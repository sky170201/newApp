<template>
    <table width="100%">
        <tr>
            <th
                v-for="(item, index) in tableTh"
                :key="index"
            >{{item.title}}</th>
        </tr>
        <tr v-for="(item, index) in teamData.list" :key="index">
            <td>{{ item.id }}</td>
            <td><em>{{ item.level }}</em></td>
            <td>{{ item.num }}</td>
        </tr>
    </table>
</template>

<script setup>
import i18n from '@/language/i18n'
import { teamData } from './data'

defineProps({
  list: {
    type: Object,
    default: () => ([])
  }
})

const tableTh = [
  { title: i18n.global.t('team.table2Th1') },
  { title: i18n.global.t('team.table2Th2') },
  { title: i18n.global.t('team.table2Th3') }
]

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
            color: @mainColor;
            font-style: normal;
        }
    }
}
</style>
