<template>
<div id="login">
    <div class="title">Backend Login</div>
    <form action="#">
        <div class="tips row">{{tips}}</div>
        <div class="row row1">
            <label class="name" for="name">用户名</label>
            <input type="text" id="name" class="value" v-model="user.name">
        </div>
        <div class="row row2">
            <label class="name" for="password">密码</label>
            <input type="password" id="password" class="value" v-model="user.password">
        </div>
        <div class="row row3">
            <button class="submit" type="submit" @click.prevent="submit">登陆</button>
        </div>
    </form>
</div>
</template>

<script>
import api from "../../js/api.js";
import {mapMutations} from "vuex";

export default {
    name: "backendLogin",
    data(){
        return{
            user: {},
            tips: ""
        }
    },
    created(){
        let isLogin = localStorage.getItem("isLogin");
        if(isLogin){
            this.$router.push("/backend/posts");
        }
    },
    methods:{
        ...mapMutations([
            "SET_LOGIN"
        ]),
        async submit(){
            const result = await api.backendLogin(this.user);
            console.log("%c [backendLogin]", "color: green", result);
            if(result.success){
                this.tips = "登陆成功";
                this.SET_LOGIN(true);
                this.$router.push({name: "backendPosts"});
            }
            else{
                this.tips = result.message;
            }
        }
    }
}
</script>

<style scoped>
#login{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.title{
    position: relative;
    width: 70%;
    left: 15%;
    height: 5rem;
    line-height: 5rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-size: 3rem;
    text-align: center;
    font-weight: lighter;
    border-bottom: 1px solid #979797;
    color: #12B8FF;
}
form{
    position: relative;
    width: 50%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.row{
    position: relative;
    width: 100%;
    margin: 2rem 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.name{
    position: relative;
    width: 4rem;
    font-weight: lighter;
    font-size: 1rem;
    color: #4A4A4A;
}
.value{
    position: relative;
    flex-grow: 1;
    border: none;
    border-bottom: 1px solid #979797;
    outline: none;
}
.submit{
    position: relative;
    width: 7rem;
    margin: 0px auto;
    margin-top: 3rem;
    padding: 0.4rem 0.5rem;
    font-weight: lighter;
    font-size: 1rem;
    text-align: center;
    color: #4A4A4A;
    border: 1px solid #9B9B9B;
    background-color: #DAD7D7;
}
.tips{
    justify-content: center !important;
    color: #FF4E17;
}
</style>

