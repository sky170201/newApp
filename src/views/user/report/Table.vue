<template>
    <table width="100%">
        <tr>
            <th>{{ $t('report.quantity') }}</th>
            <th>{{ $t('report.task') }}</th>
            <th>{{ $t('report.lower') }}</th>
            <th>{{ $t('report.pull') }}</th>
            <th>{{ $t('report.other') }}</th>
            <th>{{ $t('report.consumption') }}</th>
            <th>{{ $t('report.date') }}</th>
        </tr>
        <tr v-for="(item, index) in records" :key="index">
            <td>{{ item.id }}</td>
            <td><em>{{ item.renwu }}</em></td>
            <td>{{ item.xiaji }}</td>
            <td><em>{{ item.laren }}</em></td>
            <td>{{ item.qita }}</td>
            <td><em>{{ item.xiaofei }}</em></td>
            <td>{{ item.date }}</td>
        </tr>
    </table>
</template>

<script setup>

defineProps({
    records: {
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
            color: @mainColor;
            font-style: normal;
        }
    }
}
</style>
