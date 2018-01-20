<template>
<div id="home">
    <!-- page1 -->
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

    <!-- page2 -->
    <div class="page page2" ref="page">
      <h1 class="page2Title">个人日志</h1>
      <ul class="content">
        <li class="post" :key="index" v-for="(post,index) in posts" v-if="index < 6">
          <img :src="post.img" class="postImg">
          <span class="postTitle">{{post.title}}</span>
          <div class="row">
            <span class="postDate">{{new Date(post.updateAt).toLocaleString()}}</span>
            <span class="postAuthor">{{post.author}}</span>
          </div>
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
import Next from "../../components/Next";
import api from "../../js/api.js";
export default {
    name: "home",
    components: {Next},
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
        let posts = await api.getPosts();
        console.log("%c [getPosts]","color: green",posts);
        if(posts.success){
          this.posts = posts.posts;
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
.content{
  position: relative;
  width: 80%;
  margin: 0px auto;
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}
.post{
  position: relative;
  flex: 0 1 26%;
  min-width: 18rem;
  height: 18rem;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  transition: all .3s linear;
}
.post:hover{
  box-shadow: 2px 5px 5px 1px #F698A1;
  cursor: pointer;
}
.postImg{
  position: relative;
  width: 90%;
}
.postTitle{
  position: relative;
  width: 100%;
  padding-left: 1rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: lighter;
  color: #4a4a4a;
}
.post .row{
  position: relative;
  width: 100%;
  height: 2rem;
  background-color: #676767;
  line-height: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 0px 1rem;
}
.post .row span{
  color: white;
  font-weight: lighter;
  font-size: 0.85rem;
}
</style>

