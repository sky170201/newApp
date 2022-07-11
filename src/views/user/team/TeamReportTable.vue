<template>
    <table width="100%">
        <tr>
            <th
                v-for="(item, index) in tableTh"
                :key="index"
            >{{item.title}}</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
            <!-- <td>{{ item.id }}</td>
            <td><em>{{ item.renwu }}</em></td>
            <td>{{ item.xiaji }}</td> -->
        </tr>
    </table>
</template>

<script setup>
import i18n from '@/language/i18n'

const tableTh = [
  { title: i18n.global.t('team.table1Th1') },
  { title: i18n.global.t('team.table1Th2') },
  { title: i18n.global.t('team.table1Th3') }
]

defineProps({
  list: {
    type: Object,
    default: () => ([])
  }
})

</script>

<style scoped lang="less">
table {
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;

    th {
        padding: 21px 13px;
    }

    td {
        padding: 27px 13px;

        em {
            color: #0071e3;
            font-style: normal;
        }
    }
}
</style>
