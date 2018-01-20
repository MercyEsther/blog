<template>
<div>
    <div class="toggle" @click="navbarShow = !navbarShow">
        <span class="line line1" :class="{active: navbarShow}"></span>
        <span class="line line2" :class="{active: navbarShow}"></span>
        <span class="line line3" :class="{active: navbarShow}"></span>
    </div>

    <transition name="slideH">
        <div id="navbar" v-if="navbarShow">
            <ul class="items">
                <li class="item" :key="index" v-for="(item,index) in items" :class="{active: item.path == curPage}" @click="toPage(item.path)">
                    {{item.name}}
                </li>
                <li class="backend" @click="$router.push({name: 'backendLogin'})" v-if="!isLogin">后台入口</li>
                <li class="signout" @click="backendSignout" v-if="isLogin">退出后台</li>
            </ul>
        </div>
    </transition>
</div>
</template>

<script>
import api from "../js/api.js";
import {mapState,mapMutations} from "vuex";

export default {
    name: "navbar",
    data(){
        return{
            items: [
                {name: "首页", path:"home"},
                {name: "项目", path: "projects"},
                {name: "设计", path: "design"},
                {name: "日志", path: "posts"},
                {name: "资源", path: "resource"}
                ],
            curPage: "",
            navbarShow: false
        }
    },
    computed:{
        ...mapState([
            "isLogin"
        ])
    },
    watch:{
        $route(to,from){
            this.curPage = to.name;
        }
    },
    created(){
        this.curPage = this.$route.name;
        
    },
    methods:{
        ...mapMutations([
            "SET_LOGIN"
        ]),
        toPage(path){
            this.$router.push({name: path});
        },
        async backendSignout(){
            let result = await api.backendSignout();
            console.log("%c [backendSignout]","color: green",result);
            if(result.success){
                this.SET_LOGIN(false);
                this.$router.push("/login");
            }
            else{

            }
        }
    }
}
</script>

<style scoped>
.slideH-enter-active,
.slideH-leave-active{
    transition: all .3s ease;
}
.slideH-enter,
.slideH-leave-to{
    transform: translateX(-10rem);
    opacity: 0;
}
#navbar{
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 14rem;
    height: 100%;
    background-color: #35383E;
}
.items{
    position: relative;
    height: 100%;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.item{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    padding-left: 4rem;
    list-style: none;
    font-size: 1.2rem;
    font-weight: lighter;
    color: white;
}
.item:hover{
    font-weight: bold;
    background-color: #FFAFB6;
}
.item.active{
    font-weight: bold;
    background-color: #FFAFB6;
}
.toggle{
    position: fixed;
    z-index: 10;
    top: 2rem;
    left: 4rem;
}
.line{
    position: relative;
    display: block;
    width: 3rem;
    margin: 1rem;
    border-top: 1px solid #676767;
    background-color: #676767;
    transition: all .3s ease;
    transform-origin: left;
}
.line1.active{
    transform: rotate(45deg);
    border-color: white;
}
.line2.active{
    border-color: #35383E;
}
.line3.active{
    transform: rotate(-45deg);
    border-color: white;
}
.backend,
.signout{
    position: fixed;
    bottom: 2rem;
    left: 4rem;
    list-style: none;
    text-align: center;
    color: #ccc;
    font-size: 0.7rem;
    font-weight: lighter;
    text-decoration: underline;
}
.backend:hover,
.signout:hover{
    cursor: pointer;
}
</style>

