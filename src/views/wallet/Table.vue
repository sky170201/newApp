<template>
    <table width="100%">
        <tr>
            <th>{{ $t('wallet.amount') }}</th>
            <th>{{ $t('wallet.profitRatio') }}</th>
            <th>{{ $t('wallet.actualArrival') }}</th>
            <th>{{ $t('wallet.state') }}</th>
            <th>{{ $t('wallet.date') }}</th>
        </tr>
        <tr v-for="(item, index) in records.list" :key="index">
            <td>{{ item.money }}</td>
            <td><em>{{ item.ratio }}</em></td>
            <td>{{ item.shiji }}</td>
            <td><em>{{ item.txt }}</em></td>
            <td>{{ item.times }}</td>
        </tr>
    </table>
</template>

<script setup>

defineProps({
    records: {
        type: Object,
        default: () => ({})
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
