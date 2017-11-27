import $ from "jquery";

const getType=function(type){
    const tp = {
        "0": "插画",
        '1': '阅读',
        '2': '连载',
        '3': '问答',
        '4': '音乐',
        '5': '影视'
    }
    return type ? tp[type] : ""; 
}
export { getType };


const getRouteType=function(type){
    const tp = {
        '1': 'eassy',
        '2': 'serial',
        '3': 'question',
        '4': 'musics',
        '5': 'movies'
    }
    return type ? tp[type] : ""; 
};
export { getRouteType };


const hideNav=function(){
    $(".navBar").hide();
}
export { hideNav };

const showNav=function(){
    $(".navBar").show();
}
export { showNav };