<template>
    <router-view></router-view>
    <van-tabbar
        safe-area-inset-bottom
        route>
        <van-tabbar-item replace to="/home" icon="home-o">{{$t('tabbar.home')}}</van-tabbar-item>
        <van-tabbar-item replace to="/hall" icon="apps-o">{{$t('tabbar.hall')}}</van-tabbar-item>
        <van-tabbar-item replace to="/level" icon="diamond-o">{{$t('tabbar.level')}}</van-tabbar-item>
        <van-tabbar-item replace to="/task" icon="orders-o">{{$t('tabbar.task')}}</van-tabbar-item>
        <van-tabbar-item replace to="/my" icon="manager-o">{{$t('tabbar.my')}}</van-tabbar-item>
    </van-tabbar>
</template>
