<template>
<div id="home">
    <div class="page page1" ref="page">
      <h1 class="titleF title">HUANG<span class="titleB">YH</span></h1>
      <div class="viewport">
          <div class="wrapper">
              <div class="block top">Vue</div>  
              <div class="block bottom">Node.js</div>
              <div class="block left">Javascript</div>
              <div class="block right">Linux</div>  
              <div class="block front">Python</div>  
              <div class="block back">Design</div>  
          </div>
      </div>
      <p class="subTitle">专注前端开发，因为热爱，所以能够做得更好</p>
    </div>

    <div class="page page2" ref="page">
      <h1 class="page2Title">个人日志</h1>
      <ul class="content">
        <li :key="index" v-for="(post,index) in posts">

        </li>
      </ul>
    </div>

    <div class="page page3" ref="page">
    </div>

    <!-- 向下滚动一个屏幕 -->
    <Next/>
</div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Next from "../../components/Next";
import api from "../../js/api.js";
export default {
    name: "home",
    components: {Navbar, Next},
    data(){
        return{
            navbarShow: false,
            posts: {}
        }
    },
    created(){
      this.start();
    },
    mounted(){
      var pages = document.getElementsByClassName("page");
      for(var page of pages){
        page.style.height = window.screen.availHeight + "px";
      }
    },
    methods:{
      async start(){
        var posts = await api.getHomePosts();
        console.log("posts:",posts);
        if(posts){

        }
        else{

        }
      }
    }
}
</script>

<style scoped>
html,
body,
#app,
#home{
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.page{
  position: relative;
  width: 100%;
  height: 100%;
}
.title{
    position: relative;
    width: 80%;
    left: 10%;
    height: 10rem;
    line-height: 10rem;
    font-size: 4rem;
    font-weight: lighter;
    text-align: center;
    border-bottom: 1px solid #9B9B9B;
}
.titleF{
    color: #9B9B9B;
}
.titleB{
    margin: 0;
    color: #FFAFB6;
}
.subTitle{
  position: relative;
  width: 100%;
  top: 100px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: lighter;
  color: #666;
}
.viewport{
  position: relative;
  width: 100%;
  margin: 0px auto;
  margin-top: 100px;
  perspective-origin: 50% 500px;
  perspective: 5000px;
}
.wrapper{
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0px auto;
  transform-style: preserve-3d;
  animation: spin 14s infinite linear;
}
.block{
  position: absolute;
  text-align: center;
  line-height: 200px;
  font-size: 1.7rem;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border: 1px solid #aaa;
  transition: all 5s linear;
  transform-origin: center center center;
  color: #444;
  font-weight: lighter;
  animation: color 5s infinite linear;
}
.front{
  transform: translateZ(100px);
}
.back{
  transform: translateZ(-100px);
}
.left{
  transform: rotateY(90deg) translateZ(-100px);
}
.right{
  transform: rotateY(90deg) translateZ(100px);
}
.top{
  transform: rotateX(90deg) translateZ(100px);
}
.bottom{
  transform: rotateX(90deg) translateZ(-100px);
}
@keyframes spin {
  0% {
    /* transform: rotate3d(0.5,0.5,0.5,0deg); */
    transform: rotateY(0deg) rotateX(0deg); 
  }
  100% {
    /* transform: rotate3d(0.5,0.5,0.5,360deg); */
    transform: rotateY(360deg) rotateX(360deg);
  }
}
@keyframes color {
  0% {
    border: 1px solid #ccc;
  }
  25% {
    border: 1px solid #B5CED9;
  }
  50% {
    border: 1px solid #E9E39A;
  }
  75% {
    border: 1px solid #F9D355;
  }
  100% {
    border: 1px solid #DEA4A0;
  }
}

.page2{
  background-color: #FFAFB6;
}
.page2Title{
  position: relative;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  font-size: 1.5rem;
  font-weight: lighter;
  text-align: center;
  color: #4A4A4A;
}
</style>

