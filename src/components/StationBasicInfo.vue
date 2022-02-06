<template>
<p>
    平均等待时间：
    <span>{{ averageDuration }}</span>
    小时
</p>
<p>
    最长等待时间：
    <span>{{ maxDuration }}</span>
    小时
</p>
<p>
    最短等待时间：
    <span>{{ minDuration }}</span>
    小时
</p>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const props = defineProps({
    durations: {
        type: Array as PropType<number[]>,
        required: true,
    }
})

const averageDuration = computed(() => {
    if (props.durations.length === 0) {
        return 0
    }
    let sum = 0
    props.durations.map(value => sum += value)
    return (sum / props.durations.length).toFixed(1)
})

const maxDuration = computed(() => {
    if (props.durations.length === 0) {
        return 0
    }
    let max = props.durations[0]
    props.durations.map(value => max = Math.max(max, value))
    return max.toFixed(1)
})

const minDuration = computed(() => {
    if (props.durations.length === 0) {
        return 0
    }
    let min = props.durations[0]
    props.durations.map((value: number) => min = Math.min(min, value))
    return min.toFixed(1)
})
</script>