import server from "../../model/model.js"
import * as types from "../mutation-type.js"

const state = {
    idlist : [], //前十天的id
    article : [],//首页文章列表
    date : "",//今天的日期
    all : {},//返回的所有数据
    poster : {},//当天的海报
    subhead : "",//副标题
}

const getters = {
    idlist : state => state.idlist,
    article : state => state.article,
    date : state => state.date,
    poster : state => state.poster,
    subhead : state => state.subhead
}

const actions = {
    getIdlist ({dispatch,commit,state}){//获取所有id
        server.getIdlist().then(result => {
            // console.log(result.data.data)
            commit(types.ONE_IDLIST,result.data.data);
            dispatch('getAllById',state.idlist[1])
        })
    },
    getAllById ({dispatch,commit,state},id){//根据Id获取当天所有数据
        server.getAllById(id).then(result => {
            let allart=result.data.data
            // console.log(allart)
            commit(types.ONE_HOME,allart);
            dispatch('weather',allart)
        })
    },
    weather ({commit},allart){
        commit(types.ONE_WEATHER,allart)
    }
}

const mutations = {
    [types.ONE_IDLIST](state,data){
        state.idlist=data
    },
    [types.ONE_HOME](state,data){
        //全部数据
        state.all=data;
        //当天文章
        state.article=data.content_list;
        //当天海报
        state.poster=data.content_list[0];
    },
    [types.ONE_WEATHER](state,allart){
        state.date=allart.weather.date;
        state.subhead=allart.weather.climate+'，'+allart.weather.city_name
    }

}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}




