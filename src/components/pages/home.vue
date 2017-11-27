<template>
    <div class="home">
        <div class="title">
            <div class="title_cont">
                <div>{{this.todayDate}}</div>
                <div>{{this.subhead}}</div>
            </div>
        </div>
        <div class="vol">
            <div class="vol_img">
                <img :src="this.poster.img_url" width="100%">
            </div>
            <div class="vol_dis">
                <p>{{this.poster.title}} | {{this.poster.pic_info}}</p>
                <p>{{this.poster.forward}}</p>
                <p>{{this.poster.words_info}}</p>
                <div class="vol_num">
                    <div>
                        <i class="iconfont icon-pen"><span> 小计</span></i>
                    </div>
                    <div>
                        <i class="iconfont icon-shoucang"><span> {{this.poster.like_count}}</span></i>
                        <i class="iconfont icon-shoucang1"> </i>
                        <i class="iconfont icon-zhuanfa"> </i>
                    </div>
                </div>
            </div> 
        </div>
        <div class="article" v-for="(item,index) in this.article" :key="index" v-if="index!=0" @click="loadPage(item)">
            <div class="art_type">- {{getTag(item)}} -</div>
            <div class="art_title">
                <div>{{item.title}}</div>
                <div>文 / {{item.author.user_name}}</div>
            </div>
            <div class="art_pic"><img :src="item.img_url" width="100%"></div>
            <div class="art_txt">{{item.forward}}</div>
            <div class="art_num">
                <div class="time">今日</div>
                <div>
                    <i class="iconfont icon-shoucang"><span> {{item.like_count}}</span></i>
                    <i class="iconfont icon-zhuanfa"> </i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { getType, getRouteType,hideNav } from "../../utils/tools";
    export default {
        name:"home",
        data(){
            return{
                scrolltop:''
            }
        },
        computed :{
            ...mapGetters('home',[
                'idlist',
                'article',
                'date',
                'poster',
                'subhead'
            ]),
            todayDate(){
                return this.date.replace(/-/g,' / ')
            }
        },
        beforeRouteLeave (to, from, next) {
            this.setScroll();
            next();
        },
        created (){
            this.getIdlist()

        },
        
        methods :{
            ...mapActions('home',[
                'getIdlist'
            ]),
            setScroll(){
                let _this=this
                if(document.documentElement.scrollTop){
                    _this.scrolltop=document.documentElement.scrollTop
                }else if(document.body.scrollTop){
                     _this.scrolltop=document.body.scrollTop
                }
                console.log(_this.scrolltop)
                sessionStorage.setItem("home_value",_this.scrolltop)
            },
            getScroll(){
                window.scrollTo(0,sessionStorage.getItem("home_value"))
            },

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
        },
        activated(){
            this.getScroll()
        }
       
    }
</script>
<style lang="scss" scoped>
@import "../../assets/css/cssrem.scss";
.home{
    padding-bottom:remOne(150px);
    .title{
        height:remOne(100px);
        .title_cont{
            position:fixed;
            left:0;
            top:0;
            height:remOne(86px);
            background: #fff;
            padding-top:remOne(14px);
            width: 100%;
            color:#333;
            border-bottom: 1px solid #f4f4f4;
            span{
                color: #a1a1a1;
            }
            div:first-child{
                font-size: remOne(40px);
                height:remOne(45px);
                line-height:remOne(45px)
            }
            div:last-child{
                font-size: remOne(25px);
                height:remOne(37px);
                line-height:remOne(37px)
            }
        }
    }
    .vol{
        .vol_dis{
            padding-bottom: remOne(30px);
            p:first-child{
                font-size: remOne(24px);
                color:#8c8c8c;
                height:remOne(75px);
                line-height:remOne(75px)
            }
            p:nth-child(2){
                text-align: left;
                padding:0 remOne(60px);
                font-size: remOne(27px);
                // height:remOne(85px);
                line-height:remOne(45px);
                margin: remOne(30px) 0;
            }
            p:nth-child(3){
                font-size: remOne(24px);
                color:#8c8c8c;
                height:remOne(95px);
                line-height:remOne(95px)
            }
        }
        .vol_num{
            padding: 0 remOne(20px) 0 remOne(30px);
            height:remOne(45px);
            display:flex;
            justify-content:space-between;
            i:first-child{
                margin: 0 
            }
            i{
                color: #999;
                margin-left:remOne(20px);
                font-size: remOne(35px);
                span{
                    font-size: remOne(24px)
                }
            }
        }
    }
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
}
</style>
