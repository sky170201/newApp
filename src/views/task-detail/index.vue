<template>
    <NavBar>
        <template #title>{{ $t('taskDetail.title') }}</template>
    </NavBar>
    <div class="top-100 task-detail">
        <div class="state">
            <van-image width="60" :src="stateImg"></van-image>
        </div>
        <div class="info">
            <div class="item">
                <span class="tit">{{ $t('taskDetail.taskTitle') }}：</span>
                <van-image width="20" :src="ttImg"></van-image>
                <span class="i ml-10">TikTok</span>
            </div>
            <div class="item">
                <span class="tit">{{ $t('taskDetail.taskProfit') }}：</span>
                <span class="i mainColor">{{ taskDetail.price }}EUR</span>
            </div>
            <div class="item">
                <span class="tit">{{ $t('taskDetail.taskDes') }}：</span>
                <span class="i">{{ $t('taskDetail.action') }}</span>
            </div>
            <div class="item">
                <label>{{ $t('taskDetail.taskLink') }}：</label>
                <div class="link">
                    <span>{{ taskDetail.url }}</span>
                    <div class="btn">
                        <van-button type="success" :url="taskDetail.url" size="mini">
                            {{ $t('taskDetail.btn1') }}
                        </van-button>
                        <van-button @click="copyLink(taskDetail.url)" style="margin-left: 10px" type="primary"
                            size="mini">{{
                                    $t('taskDetail.btn2')
                            }}</van-button>
                    </div>
                </div>
            </div>
            <div class="item">
                <span class="tit">{{ $t('taskDetail.auditTime') }}：</span>
                <span class="i">{{ taskDetail.shenhe_time }}</span>
            </div>
        </div>
        <van-form @submit="onSubmit">
            <van-field v-model="remark" rows="2" autosize :label="$t('taskDetail.backup')" type="textarea"
                maxlength="100" :placeholder="$t('taskDetail.backupPlaceholder')" show-word-limit />
            <van-field name="uploader" :label="$t('taskDetail.upload')">
                <template #input>
                    <van-uploader v-model="uploader" />
                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button class="border-radius-10" block type="primary" native-type="submit">
                    {{ $t('taskDetail.submit') }}
                </van-button>
                <van-button class="border-radius-10 mt-40" block type="danger">
                    {{ $t('taskDetail.cancel') }}
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from "@/components/NavBar";
import stateImg from '@/assets/img/state4-zh-CN.png'
import ttImg from '@/assets/img/tiktok.png'
import { taskDetail } from './data'
import { copy } from '@/utils'

const copyLink = (link) => {
    copy(link)
}

const remark = ref('');
const uploader = ref([]);

onMounted(() => {
    uploader.value = [{ url: taskDetail.file }]
})

const onSubmit = (values) => {
    console.log('submit', values);
};

</script>

<style scoped lang='less'>
.task-detail {
    position: relative;

    .state {
        position: absolute;
        right: 40px;
        top: 40px;
    }

    .info {
        margin: 0 14px 0;

        .item {
            padding: 20px;
            font-size: 28px;
            display: flex;
            align-items: center;

            .link {
                display: flex;
                flex: 1;
                overflow: hidden;
                align-items: center;

                span {
                    flex: 1;
                    text-overflow: ellipsis;
                    font-size: 24px;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .btn {
                    display: flex;
                }
            }
        }
    }

    .van-form {}

    :deep(.van-uploader__upload) {
        width: 200px;
        height: 200px;
        background-color: rgba(247, 248, 250, .08);
    }
}
</style>
