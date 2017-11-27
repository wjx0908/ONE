<template>
  <div class="movies">
    
    <div class="title">
      <div @click="goBack"><i class="iconfont icon-back-copy"></i></div>
      <div class="big_tit">影视</div>
      <div><i class="iconfont icon-20"></i></div>
    </div>
    <!-- <slider :pages="pages" :sliderinit="sliderinit"> -->
    <div class="content">
      <div class="cont_title">{{this.movie.title}}</div>
      <div class="cont_author">文 / {{this.author.user_name}}</div>
      <div class="cont_content" v-html="this.movie.content"></div>
      <!-- <div class="duty">{{this.movie.hp_author_introduce}}</div> -->
      <div class="author">
        <div class="author_title">作者</div>
        <div class="author_bb">
          <div class="author_web"><img :src="this.author.web_url"></div>
          <div class="author_info">
            <div class="author_name">{{this.author.user_name}}</div>
            <div class="author_desc">{{this.author.desc}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="input_b"><input placeholder="写一个评论.."></div>
      <div class="bottom_icon">
        <div><i class="iconfont icon-shoucang"></i>{{this.movie.praisenum}}</div>
        <div><i class="iconfont icon-pinglun"></i>{{this.sharenum}}</div>
        <div><i class="iconfont icon-zhuanfa"></i>{{this.commentnum}}</div>
      </div>
      
  </div>
    <!-- {{this.$route.params.id}} -->
  </div>
</template>

<script>
import $ from "jquery"
import slider from "vue-concise-slider"
import { getType, getRouteType,showNav } from "../../../utils/tools";
import {mapGetters,mapActions} from "vuex"
export default {
  components:{
    slider
  },
  data () {
    return {
      sharenum:'',
      commentnum:'',
      photo:[],
      // pages:[
      //         // {
      //         //   html: 'slide1',
      //         //   style:{
      //         //     'background': '#1bbc9b'
      //         //   }
      //         // },
      // ],
      // // Sliding configuration[obj]
      // sliderinit: {
      //   currentPage: 0,
      //   thresholdDistance: 100,
      //   thresholdTime: 300,
      //   loop:true,
      //   infinite:1,
      //   slidesToScroll:1
      // }
    }
  },
  created(){
    this.getMovieById(this.$route.params.id)
    // this.getData();
    
  },
  computed:{
    ...mapGetters('movie',['movie','author']),
  },
  methods:{
    ...mapActions('movie',['getMovieById']),
    goBack(){
      this.$router.go(-1);;
      showNav();
    },
    // getData(){
    //   let _this=this
    //   $.ajax({url:"http://v3.wufazhuce.com:8000/api/movie/detail/"+this.$route.params.id,success:function(result){
    //     console.log(result);
        
    //     _this.sharenum=result.data.sharenum
    //     _this.commentnum=result.data.commentnum
    //     _this.photo=result.data.photo
    //     for(let i=0;i< _this.photo.length;i++){
    //       _this.pages[i]={
    //           html: '<div class="slide'+i+'">qwqqwqw</div>',
    //           style:{
    //                'background': '#000'
    //           }
    //         }
    //     }
    //     console.log(_this.pages)
         
    //   }})
      
    // },
   
  }
}
</script>


<style lang="scss" scoped>
@import "../../../assets/css/cssrem.scss";
.movies{
  padding-bottom:remOne(150px);
  text-align: left;
  padding-top: remOne(90px);
  .title{
    background: #fff;
    height: remOne(90px);
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    line-height: remOne(90px);
    border-bottom: 1px solid #f4f4f4;
    font-size: remOne(30px);
  }
  .big_tit{
    padding: 0 remOne(250px)
  }
  .content{
    padding: 0 remOne(42px);
  }
  .cont_title{
    font-size: remOne(47px);
    font-weight: bold;
    line-height: remOne(72px);
    padding-top: remOne(55px)
  }
  .cont_author{
    height: remOne(160px);
    line-height: remOne(160px);
    font-size:remOne(23px)
  }
  .cont_content{
    line-height: remOne(64px);
    font-size:remOne(30px)
  }
  .duty{
    margin:remOne(63px) 0; 
    color: #7a7a7a;
    font-size: remOne(23px)
  }
  .author_bb{
    display: flex;
    justify-content: flex-start
  }
  .author_title{
    font-size: remOne(27px);
    // font-size: 27px;
    height: remOne(82px);
    line-height: remOne(82px);
    border-bottom: remOne(8px) solid #000;
    width: remOne(120px);
    margin-bottom: remOne(44px);
  }

  .author_web{
    width: remOne(80px);
    height: remOne(80px);
    border-radius: 50%;
    background: #000;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%
    }
  }
  .author_name{ font-size: remOne(27px);}
  .author_info{margin-left: remOne(25px);width: remOne(520px)}
  .author_desc{line-height: remOne(44px); font-size: remOne(23px);color:#7c7c7c;}
}
.bottom{
    text-align: center;
    display: flex;
    justify-content: space-between;
    position:fixed;
    bottom:0;left:0;
    width: 100%;height: remOne(100px);line-height:remOne(100px);
    border-top: 1px solid #efefef;
    z-index: 3000;
    background: #fff;
    .input_b{
        margin-left: remOne(40px);
    }
    .input_b input{
        width: remOne(248px);
        height: remOne(64px);
        border-radius: 5px;
        border: remOne(2px) solid #9f9f9f;
        padding-left: remOne(28px);
    }
    .bottom_icon{
        margin-right: remOne(40px);
        display: flex;
        color: #9f9f9f;
        div{
            padding: 0 remOne(20px)
        }
    }
}

</style>
