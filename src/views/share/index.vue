<template>
    <div class="container">
        <NavBar :fixed="true"></NavBar>
        <div :style="{ backgroundImage: 'url(' + enBg + ')' }" class="share">
            <div class="info">
                <p>{{ $t('share.k1') }}{{main.user.username}}</p>
                <p class="margin-27">{{ $t('share.k2') }}</p>
                <div>
                    <img width="110" height="110" :src="shareData.qrcode" />
                </div>
                <p class="margin-27">{{ $t('share.k3') }}：{{main.user.code}}</p>
                <van-button size="small" @click="copyCode('629919')" type="primary">{{ $t('share.k4') }}</van-button>
                <p class="margin-27" style="height: 30px">
                    {{ shareData.url }}
                </p>
                <van-button size="small" @click="copyCode(shareData.url)" type="primary">{{ $t('share.k5') }}
                </van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar";
// import { shareData } from "./data";
import enBg from '@/assets/img/share-en-US.png'
import { copy } from '@/utils'
import { getUserQrcode } from "@/api/home";
import { onMounted, ref } from "vue";
import { mainStore } from '@/store/mainStore'
const main = mainStore()

const shareData = ref({})
onMounted(async () => {
  const { result } = await getUserQrcode()
  shareData.value = result
})

const copyCode = (str) => {
  copy(str)
}

</script>

<style scoped lang="less">
.container {
    height: 100%;
    background-color: #09273f;

    .share {
        padding: 300px 100px 0;
        position: relative;
        z-index: 1;
        height: 100%;
        background-size: 100%;
        background-repeat: no-repeat;

        .info {
            width: 100%;
            color: #fff;
            background-color: #12324b;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;

        }

        .margin-27 {
            margin: 27px 0;
        }
    }
}
</style>
