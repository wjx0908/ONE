import server from "../../model/model.js"
import * as types from "../mutation-type.js"


const state = {
    topten :[],
    movie:{},
    author:{}
}

const getters = {
    topten : state => state.topten,
    movie:state=> state.movie,
    author:state=>state.author
}

const actions = {
    getTopten( {commit} ){
        server.getToptenMovie().then(result => {
            commit(types.ONE_TOPTEN,result.data.data)
        })
    },
    getMovieById({commit},id){
        server.getMovieById(id).then(result=>{
            commit(types.ONE_MOVIE,result.data.data.data[0])
        })
    }
}

const mutations = {
    [types.ONE_TOPTEN](state,data){
        state.topten=data
    },
    [types.ONE_MOVIE](state,data){
        state.movie=data
        state.author=data.user
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}