<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition name="fade">
      <router-view  v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    
      
    
    
    <navBar></navBar>
  </div>
</template>

<script>
import navBar from '@/components/common/navBar'


export default {
  name: 'app',
  components:{
    navBar
    
  }
}
</script>

<style>
.fade-enter-active,.fade-leave-active{
  transition:  opacity 1s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
*{margin:0;padding:0}
body,
html{

  overflow-x: hidden;
  font-family: "Microsoft YaHei"

  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;

}
</style>
