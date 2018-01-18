<template>
<div id="backend">
    <Topbar/>
    <div id="panel">
        <transition name="slide" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>

        <transition name="slide" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>

</div>
</template>

<script>
import Topbar from "../../components/Topbar";

export default {
    name: "backend",
    components: {Topbar},
    data(){
        return {

        }
    }
}
</script>

<style scoped>
#panel{
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
}
</style>

