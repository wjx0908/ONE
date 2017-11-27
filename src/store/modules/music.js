import server from "../../model/model.js"
import * as types from "../mutation-type.js"


const state = {
    topten :[],
    music:{},
    author:{}
}

const getters = {
    topten : state => state.topten,
    music : state => state.music,
    author : state => state.author
}

const actions = {
    getTopten( {commit} ){
        server.getToptenMusic().then(result => {
            commit(types.ONE_TOPTEN,result.data.data)
        })
    },
    getMusicById( {commit},id ){
        server.getMusicById(id).then(result => {
            commit(types.ONE_MUSIC,result.data.data)
        })
    }
}

const mutations = {
    [types.ONE_TOPTEN](state,data){
        state.topten=data
    },
    [types.ONE_MUSIC](state,data){
        state.music=data
        state.author=data.author
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}