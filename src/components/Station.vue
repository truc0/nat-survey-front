<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    durations: {
        type: Array,
        required: true
    },
})

const averageDuration = computed(() => {
    let sumOfDuration = 0
    for (const duration of (props.durations as [number])) {
        sumOfDuration += duration
    }
    return (sumOfDuration / props.durations.length).toFixed(2)
})
</script>


<template>
    <div>
        {{ props.name }} - 平均出报告时间为 {{ averageDuration }} 小时
    </div>
</template>
