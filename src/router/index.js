import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


const Home = resolve  => require(['../components/pages/home'],resolve )
const Movie = resolve  => require(['../components/pages/movie'],resolve )
const Read = resolve  => require(['../components/pages/read'],resolve )
const Music = resolve  => require(['../components/pages/music'],resolve )

const Eassy = resolve  => require(['../components/pages/details/eassy'],resolve )
const Movies = resolve  => require(['../components/pages/details/movies'],resolve )
const Question = resolve  => require(['../components/pages/details/question'],resolve )
const Serial = resolve  => require(['../components/pages/details/serial'],resolve )
const Musics = resolve  => require(['../components/pages/details/musics'],resolve )

Vue.use(Router)

const router = new Router({
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{keepAlive:true}
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
      meta:{keepAlive:true}
      
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      meta:{keepAlive:true}
      
    },
    {
      path: '/read',
      name: 'read',
      component: Read,
      meta:{keepAlive:true}
     
    },
    {
      path: '/read/essay/:id',
      name: 'eassy',
      component: Eassy,
      meta:{keepAlive:false}
    },
    {
      path: '/read/serial/:id',
      name: 'serial',
      component: Serial,
      meta:{keepAlive:false}
    },
    {
      path: '/read/question/:id',
      name: 'question',
      component: Question,
      meta:{keepAlive:false}
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: Movies,
      meta:{keepAlive:false}
    },
    {
      path: '/musics/:id',
      name: 'musics',
      component: Musics,
      meta:{keepAlive:false}
    },
    
  ],
  mode : 'history',
  scrollBehavior(to,from,savedPosition){
    // console.log(to.path)
    
    // console.log(savedPosition)
    if(to.path=="/" || to.path=="/read" || to.path=="/music" || to.path=="/movie"){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  }
  
})


export default router
