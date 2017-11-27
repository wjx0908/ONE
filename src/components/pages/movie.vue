<template>
    <div class="read">
        <div class="titles">
            <div class="title">
             一个 · 影视
            </div>
        </div>
        <div class="article" v-for="(item,index) in this.topten" :key="index" @click="loadPage(item)">
            <div class="art_type">- {{getTag(item)}} -</div>
            <div class="art_title">
                <div>{{item.title}}</div>
                <div>文 / {{item.author.user_name}}</div>
            </div>
            <div class="art_pic"><img :src="item.img_url" width="100%"></div>
            <div class="art_txt">{{item.forward}}</div>
            <div class="art_num">
                <div class="time">近日</div>
                <div>
                    <i class="iconfont icon-shoucang"><span> {{item.like_count}}</span></i>
                    <i class="iconfont icon-zhuanfa"> </i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
import { getType,getRouteType,hideNav } from "../../utils/tools";
    export default {
        name:"read",
        data(){
            return{}
        },
        computed:{
            ...mapGetters('movie',[
                'topten'
            ])
        },
        beforeRouteLeave (to, from, next) {
            // ...
            this.setScroll();
            next()
        },
        created(){
            this.getTopten();
        },
        methods:{
            ...mapActions('movie',[
                'getTopten'
            ]),
            getTag(art){
                let taglist=art.tag_list,tag="",artTag=art.category;
                if(taglist.length>0){
                    tag = taglist[0].title
                }else{
                    tag=getType(artTag)
                }
                return tag;
            },
            loadPage(art){
                hideNav();
                let artTag=art.category,routeName="";
                routeName=getRouteType(artTag)
                this.$router.push({ name: routeName, params: {id:art.content_id}})
            },
            setScroll(){
                let _this=this
                if(document.documentElement.scrollTop){
                    _this.scrolltop=document.documentElement.scrollTop
                }else if(document.body.scrollTop){
                     _this.scrolltop=document.body.scrollTop
                }
                
                console.log(_this.scrolltop)
                sessionStorage.setItem("movie_value",_this.scrolltop)
            },
            getScroll(){
                window.scrollTo(0,sessionStorage.getItem("movie_value"))
            },
        },
        activated(){
            this.getScroll()
        }
    }
</script>
<style scoped lang="scss">
@import "../../assets/css/cssrem.scss";
.read{padding-bottom:remOne(150px);}
.titles{
   
    height:remOne(90px);
    line-height:remOne(90px);
    font-size:remOne(32px);
}
.title{
     position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    background: #fff
}
.art_pic{border-top:5px dashed #ccc;border-bottom:5px dashed #ccc;padding:remOne(10px) 0;}
.article:nth-of-type(2){border-top: none}
.article{
        border-top: remOne(10px) solid #efefef;
        padding:0 remOne(40px);
        .art_type{font-size:remOne(25px);color:#999;height: remOne(74px);line-height: remOne(74px)}
        .art_title{
            text-align:left;
            div:first-child{
                font-size:remOne(40px);
                color:#222;
                line-height: remOne(56px);
            }
            div:last-child{
                font-size:remOne(27px);
                color:#999;
                line-height: remOne(56px);
                height: remOne(70px)
            }
        }
        .art_txt{
            margin-top: remOne(14px);
            text-align:left;
            font-size:remOne(28px);
            color:#999;
            line-height: remOne(55px);
        }
        .art_num{
            margin-top: remOne(33px);
            display:flex;
            justify-content:space-between;
            color: #999;
            line-height: remOne(78px);
            .time{
                font-size: remOne(23px)
            }
            i:first-child{
                margin: 0 
            }
            i{
                margin-left:remOne(20px);
                font-size: remOne(35px);
                span{
                    font-size: remOne(24px)
                }
            }
        }
        
        
    }
</style>