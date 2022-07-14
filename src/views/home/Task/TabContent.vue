<template>
  <van-empty v-if="!taskList.length" :description="$t('task.noRecord')" />
  <van-pull-refresh v-else :pulling-text="$t('task.pulling')" :loosing-text="$t('task.loosing')"
    :loading-text="$t('task.loading')" v-model="refreshing" @refresh="onRefresh">
    <van-list :immediate-check="false" v-model:loading="loading" :finished="finished" :finished-text="$t('task.noMore')"
      @load="onLoad">
      <van-cell @click="() => toTaskDetail(item.id)" v-for="(item, index) in taskList" :key="index">
        <template #icon>
          <!-- type:4 youtube type:1 tiktok -->
          <div class="cell-img">
            <img :src="item.type == 4 ? youtube : tiktok">
          </div>
        </template>
        <template #title>
          <p>{{ item.type == 4 ? "YouTuBe" : "TikTok" }}</p>
          <p>{{ $t('task.require') }}：{{ $t('task.action') }}</p>
          <p>{{ $t('task.created') }}：{{ item.create_time }}</p>
          <p v-if="active === 'completed'">{{ $t('task.audit') }}：{{ item.shenhe_time }}</p>
        </template>
        <template #right-icon>
          <!-- 状态 state:-1 失败 -->
          <div v-if="active === 'progress'" class="progress-right" @click="(e) => e.stopPropagation()">
            <div class="price">
              <p>{{ $t('taskHall.price') }}</p>
              <p><span>{{ item.price }}</span>EUR</p>
            </div>
            <van-uploader :max-count="1" v-model="item.fileList" preview-size="40" :after-read="afterRead" />
            <van-button @click="submit(item)" size="mini" type="primary">{{ $t('taskDetail.submit') }}</van-button>
          </div>
          <div v-else-if="active === 'completed'" class="cell-right">
            <img :src="locale === 'zh' ? state3Zh : state3En">
          </div>
          <div v-else-if="active === 'failed'" class="cell-right">
            <img :src="locale === 'zh' ? state4Zh : state4En">
          </div>
        </template>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import router from '@/router';
// import { data } from './data'
import youtube from '@/assets/img/youtube.png'
import tiktok from '@/assets/img/tiktok.png'

import state4Zh from '@/assets/img/state4-zh-CN.png'
import state4En from '@/assets/img/state4-en-US.png'
import state3Zh from '@/assets/img/state3-zh-CN.png'
import state3En from '@/assets/img/state3-en-US.png'
import { uploadFile, submitUploadFile } from '@/api/home';
import { Dialog, Toast } from 'vant';
import i18n from '@/language/i18n';

const { proxy } = getCurrentInstance()
const props = defineProps({
  taskList: {
    type: Array,
    default: () => ([])
  },
  active: {
    type: String,
    default: ''
  },
  loading: Boolean,
  finished: Boolean,
  refreshing: Boolean,
})

const emits = defineEmits(['update:loading', 'update:finished', 'update:refreshing', 'onLoad', 'onRefresh'])

const locale = proxy.$i18n.locale
let uploadUrl = null

const submit = async ({ id, fileList }) => {
  if (!fileList.length) {
    Toast(i18n.global.t('taskHall.upload'))
  }
  const { message } = await submitUploadFile({
    id,
    txt: '',
    image: uploadUrl,
  })
  if (message === 'Success') {
    Dialog.alert({
      message: i18n.global.t('task.dialogText'),
      theme: 'round-button',
      confirmButtonColor: '#0071e3'
    }).then(() => {
      // on close
      emits('onRefresh')
    });
  }
}
const toTaskDetail = (id) => {
  router.push({
    path: '/task-detail',
    query: { id, active: props.active }
  })
}
const onLoad = () => {
  emits('onLoad')
}
const onRefresh = () => {
  emits('onRefresh')
}
const afterRead = async (file) => {
  // 此时可以自行将文件上传至服务器
  const formData = new FormData()
  formData.append('pic', file.file)
  const { result } = await uploadFile(formData)
  uploadUrl = result
};
</script>

<style scoped lang='less'>
.van-pull-refresh {
  height: calc(100vh - 280px);
  overflow: auto;

  .van-cell {
    border-bottom: 1px solid #0e1526;

    .cell-img {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      background: #fff;
      margin-right: 20px;

      img {
        width: 100%;
        // height: 100%;
      }
    }

    .progress-right {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .price {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        line-height: 40px;
        align-items: flex-end;

        span {
          color: #0071e3;
          font-size: 32px;
        }
      }

      :deep(.van-uploader__upload) {
        background-color: rgba(247, 248, 250, .08);

        .van-icon {
          background: #fff;
          overflow: hidden;
          height: 100%;
          border-radius: 5px;
        }
      }

      .van-button {
        padding: 0 20px;
      }
    }

    .cell-right {
      width: 128px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
