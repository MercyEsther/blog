<template>
<div id="post">
    <div class="row">
        <button class="add" @click="addPost">添加</button>
    </div>

    <ul class="posts">
        <li class="post">
            <span class="title">标题</span>
            <span class="author">作者</span>
            <span class="desc">描述</span>
            <span class="content">内容</span>
            <span class="img">图片</span>
            <span class="createAt">创建日期</span>
            <span class="updateAt">上次更新</span>
            <span class="save">保存</span>
            <span class="delete">删除</span>
        </li>
        <li class="post item" :key="index" v-for="(post,index) in posts">
            <span class="title">
                <input type="text" v-model="post.title">
            </span>
            <span class="author">
                <input type="text" v-model="post.author">
            </span>
            <span class="desc">
                <input type="text" v-model="post.desc">
            </span>
            <span class="content">
                <input type="text" v-model="post.content">
            </span>
            <span class="img">
                <input type="file" @change="submitImg($event,post)">
            </span>
            <span class="createAt">{{new Date(post.createAt).toLocaleString()}}</span>
            <span class="updateAt">{{new Date(post.updateAt).toLocaleString()}}</span>
            <span class="save" @click="updateHandler(post)">保存</span>
            <span class="delete" @click="deleteHandler(post)">删除</span>
        </li>
    </ul>
</div>
</template>

<script scoped>
import api from "../../../js/api.js";

export default {
    name: "backendPosts",
    data(){
        return{
            posts: {}
        }
    },
    created(){
        this.getPosts();
    },
    methods:{
        async getPosts(){
            const result = await api.getPosts();
            console.log("%c [getPosts]", "color: green", result);
            if(result.success){
                this.posts = result.posts;
            }
            else{

            }
        },
        async deleteHandler(post){
            const result = await api.deletePost({id: post.id});
            console.log("%c [deletePost]", "color: green", result);
            if(result.success){
                this.getPosts();
            }
            else{

            }
        },
        async addPost(){
            const result = await api.addPost();
            console.log("%c [addPost]", "color: green", result);
            if(result.success){
                this.getPosts();
            }
        },
        async updateHandler(post){
            console.log("%c [updatePost]", "color: orange", post);
            const result = await api.updatePost(post);
            console.log("%c [updatePost]", "color: green", result);
            if(result.success){
                this.getPosts();
            }
        },
        submitImg(e,post){
            let file = e.currentTarget.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(){
                post.img = reader.result;
                console.log("%c [imgSubmit]","color: green");
            }
        }
    }
}
</script>

<style scoped>
#post{
    position: relative;
    width: 100%;
}
.posts{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.post{
    position: relative;
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap !important;
    align-items: center;
    justify-content: center;
}
.post span{
    position: relative;
    display: block;
    height: 100%;
    line-height: 2rem;
    flex: 0 1 12%;
    text-align: center;
    color: #676767;
    font-weight: lighter;
    font-size: 1rem;
    border-top: 1px solid #a2a2a2;
    overflow: hidden;
}
.save,
.delete{
    flex: 0 1 6% !important;    
}
.createAt,
.updateAt{
    font-size: 0.8rem !important;
}
.post span:not(last-of-type){
    border-right: 1px solid #a2a2a2;
}
.post span:first-of-type{
    border-left: 1px solid #a2a2a2;
}
.post:last-of-type span{
    border-bottom: 1px solid #a2a2a2;
}
.post input{
    position: relative;
    width: 90%;
    margin: 0px auto;
}
.item .save{
    font-weight: normal !important;
    color: #12b8ff;
}
.item .save:hover,
.item .delete:hover{
    cursor: pointer;
}
.item .delete{
    font-weight: normal !important;
    color: #FF4E17;
}
.row{
    position: relative;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.add{
    position: relative;
    width: 6rem;
    height: 2rem;
    margin-right: 2rem;
    text-align: center;
    line-height: 2rem;
    background-color: #12b8ff;
    color: white;
    border: 1px solide #a2a2a2;
    border-radius: 3px;
}
.add:hover{
    cursor: pointer;
}
</style>

