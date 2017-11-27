<template>
  <div class="navBar">
      <div><router-link to="/"><i class="iconfont icon-home1"></i></router-link></div>
      <div><router-link to="/read"><i class="iconfont icon-book2"></i></router-link></div>
      <div><router-link to="/music"><i class="iconfont icon-music1"></i></router-link></div>
      <div><router-link to="/movie"><i class="iconfont icon-shiliangzhinengduixiang"></i></router-link></div>
      
  </div>
  
</template>

<script>
export default {
  name:"navBar",
  data(){
    return{

    }
    
  },
  methods:{
     
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/cssrem.scss";
  a{text-decoration:none;color:#666}
  .navBar{
    text-align: center;
    display: flex;
    justify-content: space-around;
    position:fixed;
    bottom:0;left:0;
    width: 100%;height: remOne(100px);line-height:remOne(100px);
    border-top: 1px solid #efefef;
    z-index: 1000;
    background: #fff;
    }
  .navBar div{width: 25%;}
  .navBar div i{font-size: 27px;color: #505050;}
</style>

