<template>
<div>
    <Navbar/>
    
    <transition name="slide" mode="out-in">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>

    <transition name="slide" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
</div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    name: "app",
    components: {Navbar},
    data(){
        return{

        }
    }
}
</script>

<style>
@import url(./css/common.css);
.slide-enter-active,
.slide-leave-active{
    transition: all .3s ease;
}
.slide-enter,
.slide-leave-to{
    opacity: 0;
}
#app{

}
</style>

