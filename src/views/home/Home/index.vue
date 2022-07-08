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
        <van-popup overlay-class="announcement" round v-model:show="show">
            <div class="popup">
                <div class="title">{{$t('homePopup.title')}}</div>
                <div class="content">
                    <p>A letter to all members</p>
                    <div>Thanks to the hard work of the original AP New Media members, AP New Media has reached 25 million registered users since its establishment, and is well received by platform merchants such as Douyin! The Associated Press New Media has become a very large stage on the global short video traffic platform through hard work. In the future, AP New Media will submit an IPO to the SEC to enter the secondary market. For the authenticity of the platform data, every leader of the Associated Press new media team will supervise the work of members in the future. AP users who have not worked for 10 consecutive days will be automatically identified as fake users and their AP accounts will be cancelled. If more than 30% of the team members are fake users, it will affect the personal reward of the team leader. In order to improve everyone's enthusiasm, AP New Media decided to provide 5 million euros to reward outstanding team leaders. Team Leaders who complete more than 70% of their tasks this month will be rewarded with €10,000. Invite friends to join and register as AP users, in addition to the invitation reward, you can also get an additional $2 reward (invite friends to register successfully, you can get a $2 reward for the team leader). The team hopes that each member can complete the work as required, and everyone maintains the AP together. New Media Goes to the World
                    </div>
                </div>
            </div>
            <div @click="main.updateShow(false)
            " class="close">
                <van-icon size="26" name="close" />
            </div>
        </van-popup>
    </div>
    <Online />
</template>

<script setup>
import { ref, computed } from 'vue'
import NavBar from '@/components/NavBar'
import SelectLanguage from '@/views/common/SelectLanguage'
import Online from '@/views/common/Online'
import SwiperTop from '@/components/Swiper'
import VerticalNotice from './VerticalNotice'
import BannerMenu from './BannerMenu'
import TaskHall from './TaskHall'
import MemberList from './MemberList'
import { mainStore } from '@/store/mainStore'

const main = mainStore()
const show = computed({
  get () {
    return main.show
  },
  set (bool) {
    main.updateShow(bool)
  }
})

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
    :deep(.van-popup) {
        width: 80%;
        background: transparent;
        .popup {
            padding: 40px;
            background: url(~@/assets/img/bg_mine.png) no-repeat #052058;
            background-size: contain;
            font-size: 36px;
            border-radius: 27px;
            .title {
                margin-bottom: 15px;
                text-align: center;
            }
            .content {
                padding: 30px;
                max-height: 567px;
                background-color: rgba(0,0,0,.5);
                border-radius: 27px;
                text-align: justify;
                overflow-y: auto;
                font-size: 24px;
                line-height: 40px;
                color: #fff;
                p {
                    text-align: center;
                }
                div {
                    text-indent: 48px;
                }
            }
        }
        .close {
            margin-top: 20px;
            text-align: center;
            color: #c1c1c1;
        }
    }
}
</style>
