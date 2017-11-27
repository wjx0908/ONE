import api from "../api/api"
import axios from "axios"
//创建axios实例 
const  example = axios.create({
    baseURL : api.baseUrl
});

//正则判断
const reg = /\{(.+)\}/ig;

export default {
    //  Home  ------------------------------------------
    //获取idlist
    getIdlist (){
        return example.get(api.idList);
    },
    //获取当天文章列表
    getAllById (id){
        return example.get(api.getAllById.replace(reg,id));
    },
    //  read  --------------------------------------------
    //获取前十的文章列表
    getReadTopten(){
        return example.get(api.getToptenRead);
    },
    //通过id获取文章详情
    getEssayById(id){
        return example.get(api.getEssayById.replace(reg,id))
    },
    //通过id获取连载详情
    getSerialById(id){
        return example.get(api.getSerialById.replace(reg,id))
    },
    //通过id获取问答详情
    getQuestionById(id){
        return example.get(api.getQuestionById.replace(reg,id))
    },
    //  music  -------------------------------------------
    getToptenMusic(){
        return example.get(api.getToptenMusic);
    },
    getMusicById(id){
        return example.get(api.getMusicById.replace(reg,id))
    },
    //  movie  -------------------------------------------
    getToptenMovie(){
        return example.get(api.getToptenMovie)
    },
    getMovieById(id){
        return example.get(api.getMovieById.replace(reg,id))
    }
}

