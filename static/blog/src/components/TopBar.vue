<template>
<div id="topbar">
    <ul class="items">
        <li class="item" :key="index" v-for="(item,index) in items" :class="{active: item.path == $route.name}" @click="$router.push({name: item.path})">
            {{item.name}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "topbar",
    data(){
        return {
            items: [
                {
                    name: "日志",
                    path: "backendPosts"
                },
                {
                    name: "设计",
                    path: "backendDesign"
                },
                {
                    name: "项目",
                    path: "backendProjects"
                },
                {
                    name: "用户",
                    path: "backendUsers"
                }
            ]
        }
    }
}
</script>

<style scoped>
#topbar{
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #f8f8f8;
    border-bottom: 1px solide #eee;
}
.items{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
}
.item{
    position: relative;
    height: 100%;
    flex: 0 1 20%;
    line-height: 50px;
    text-align: center;
    list-style: none;
    font-size: 16px;
    font-weight: lighter;
    color: #676767;
}
.item:hover{
    background-color: #12B8FF;
    color: white;
}
.item.active{
    background-color: #12B8FF;
    color: white;
}
</style>

