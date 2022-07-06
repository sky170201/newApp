<template>
    <NavBar :isCusLeft="true">
        <template #left>
            <van-icon name="chat-o" @click="openChat" size="24"/>
        </template>
        <template #title>AP New Media</template>
        <template #right>
            <SelectLanguage/>
        </template>
    </NavBar>
    <div class="container">
        <!-- 轮播图 -->
        <SwiperTop
            :images="swiperImages"
        ></SwiperTop>
        <VerticalNotice />
        <div class="line"></div>
        <BannerMenu />
        <div class="line"></div>
        <van-notice-bar
            class="bg-opacity"
            left-icon="volume-o"
            text="Welcome to AP New Media Platform. Newly registered members can get 6 USDT rewards after working for 15 consecutive days. Invite friends to register AP account and get 5 euros"
        />
        <div class="line"></div>
        <img class="welcome-img" src="~@/assets/img/balance-welcome.png" />
        <div class="line"></div>
        <TaskHall />
        <div class="line"></div>
        <MemberList />
        <img class="online" src="~@/assets/img/online-h.png">
    </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '@/components/NavBar'
import SelectLanguage from '@/views/common/SelectLanguage'
import SwiperTop from '@/components/Swiper'
import VerticalNotice from './VerticalNotice'
import BannerMenu from './BannerMenu'
import TaskHall from './TaskHall'
import MemberList from './MemberList'

const swiperImages = ref([
  'http://mimgs.oss-cn-hongkong.aliyuncs.com/f/98b005d9aa53853617efa0f0ab6ecf6f.jpg',
  'http://mimgs.oss-cn-hongkong.aliyuncs.com/f/77101bb986c474997d2c66a2f6732329.jpg'
])
const openChat = () => {
  console.log('openChat')
}

</script>

<style scoped lang='less'>
.container {
    position: relative;
    width: 100%;
    height: calc(100% - 192px);
    overflow: auto;
    .welcome-img {
        height: 100px;
        width: 100%;
    }
    .online {
        position: fixed;
        right: 20px;
        bottom: 300px;
        border-radius: 50%;
    }
}
</style>
