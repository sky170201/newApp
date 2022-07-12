<template>
    <NavBar :isCusLeft="true">
        <template #left>
            <van-icon name="chat-o" @click="openChat" />
        </template>
        <template #title>AP New Media</template>
        <template #right>
            <SelectLanguage />
        </template>
    </NavBar>
    <div class="container">
        <!-- 轮播图 -->
        <SwiperTop :images="swiperImages"></SwiperTop>
        <VerticalNotice />
        <div class="line"></div>
        <BannerMenu />
        <div class="line"></div>
        <van-notice-bar class="bg-opacity" left-icon="volume-o"
            text="Welcome to AP New Media Platform. Newly registered members can get 6 USDT rewards after working for 15 consecutive days. Invite friends to register AP account and get 5 euros" />
        <div class="line"></div>
        <img class="welcome-img" src="~@/assets/img/balance-welcome.png" />
        <div class="line"></div>
        <TaskHall />
        <div class="line"></div>
        <MemberList />
        <van-popup overlay-class="announcement" round v-model:show="show">
            <div class="popup">
                <div class="title">{{ $t('homePopup.title') }}</div>
                <div class="content">
                    <p>A letter to all members</p>
                    <div>Activated AP level members before April, members who have no violations during 90 days of work
                        should apply to AP New Media for refund of the deposit before the 15th of this month, AP New
                        Media will refund the activation level deposit within 24 hours after receiving the application
                        review and approval , MasterCard Bank maintenance is over, now you can recharge normally
                    </div>
                </div>
            </div>
            <div @click="main.updateShow(false)
            " class="close">
                <van-icon name="close" />
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
import router from '@/router'

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
  router.push('/notice')
}

</script>

<style scoped lang='less'>
.van-icon {
    font-size: 44px;
}
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
                background-color: rgba(0, 0, 0, .5);
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
            // .van-icon {
            //     font-size: 44px;
            // }
        }
    }
}
</style>
