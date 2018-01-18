<template>
<div id="next">
    <img class="nextImg" src="/static/next.png" @click="next">
</div>
</template>

<script>
export default {
    name: "next",
    data(){
        return {
            curPos: 1,
            limit: 5
        }
    },
    created(){
        window.addEventListener("scroll",() => {
            var cur = window.scrollY;
            var pageH = window.screen.availHeight;
            for(var i = 1; i < this.limit; i ++){
                if(cur < pageH * i){
                    this.curPos = i;
                    break;
                }
            }
        });
    },
    methods:{
        next(){
            var speed = 0.1;
            var curPage = this.curPos;
            var timer = setInterval(() => {
                document.documentElement.scrollTop += 20 * speed;
                speed += 0.2;
                if(document.documentElement.scrollTop >= window.screen.availHeight * this.curPos){
                    clearInterval(timer);
                }
                else if((document.documentElement.scrollTop + window.screen.availHeight) > 
                document.body.scrollHeight){
                    document.documentElement.scrollTop = window.screen.availHeight * curPage;
                    clearInterval(timer);
                }
            },30);
        }
    }
}
</script>

<style scoped>
#next{
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 2rem;
}
</style>

