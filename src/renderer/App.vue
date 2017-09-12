<template>
    <div class="wrapper">
        <MainHeader></MainHeader>
        <MainSidebar></MainSidebar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <MainFooter></MainFooter>
        <MainSetting></MainSetting>
    </div>
</template>

<script>
    import MainHeader from './libs/MainHeader'
    import MainSidebar from './libs/MainSidebar'
    import MainFooter from './libs/MainFooter'
    import MainSetting from './libs/MainSetting'
    export default {
        name: 'App',
        components: {
            MainHeader, MainSidebar, MainFooter, MainSetting
        }
    }
</script>

<style>
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    /* H1 - H6 font */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
