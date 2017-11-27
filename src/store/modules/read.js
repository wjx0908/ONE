import server from "../../model/model.js"
import * as types from "../mutation-type.js"

const state =   {
    topten : [],
    eassy:{},
    serial:{},
    question:{},
    author:{},
    answer:{},
    asker:{}
}

const getters = {
    topten:state => state.topten,
    eassy:state=>state.eassy,
    serial:state=>state.serial,
    question:state=>state.question,
    author:state=>state.author,
    answer:state=>state.answer,
    asker:state=>state.asker
}

const actions = {
    getTopten({ commit }){
        server.getReadTopten().then( result => {
            // console.log(result.data.data)
            commit(types.ONE_TOPTEN,result.data.data)
        })
    },
    getEassy({commit},id){    //获取Eassy详情
        server.getEssayById(id).then(result=>{
            commit(types.ONE_EASSY,result.data.data)
        })
    },
    getSerial({commit},id){    //获取Eassy详情
        server.getSerialById(id).then(result=>{
            commit(types.ONE_SERIAL,result.data.data)
        })
    },
    getQuestion({commit},id){    //获取Eassy详情
        server.getQuestionById(id).then(result=>{
            commit(types.ONE_QUESTION,result.data.data)
        })
    },

}

const mutations = {
    [types.ONE_TOPTEN] (state,data){
        state.topten=data
    },
    [types.ONE_EASSY](state,data){
        state.eassy=data;
        state.author=data.author[0]
    },
    [types.ONE_SERIAL](state,data){
        state.serial=data
        // console.log(state.serial)
        state.author=data.author
    },
    [types.ONE_QUESTION](state,data){
        state.question=data
        state.asker=data.asker
        state.answer=data.answerer

    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}