<template>
<a-card
    class="station-card"
    :tab-list="tabList"
    :active-tab-key="activeTabKey"
    @tabChange="(newKey: string) => activeTabKey = newKey"
>
    <template #title>
        <a-row justify="space-between">
            <a-col>
                <a-typography-title :level="5">{{ name }}</a-typography-title>
            </a-col>
            <a-col style="padding-left: .3rem">
                <a-typography-text code>{{ recordCount }}条</a-typography-text>
            </a-col>
        </a-row>
    </template>
    <StationBasicInfo 
        v-if="activeTabKey === 'basic_info'"
        :durations="durations"
    />
    <div v-else>
        正在开发，敬请期待
    </div>
</a-card>
</template>

<script setup lang="ts">
import { computed, ref, PropType } from 'vue'

import StationBasicInfo from '@/components/StationBasicInfo.vue'

/**
 * props
 */
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    durations: {
        type: Array as PropType<number[]>,
        required: true,
    },
})

/**
 * data
 */
const recordCount = computed(() => props.durations.length)
const activeTabKey = ref('basic_info')
const tabList = [
    {
        key: 'basic_info',
        tab: '基本信息',
    },
    {
        key: 'other',
        tab: '其他信息'
    }
]
const content: Record<string, string> = {
    'basic_info': 'station-basic-info'
}
</script>

<style>
.station-card {
    width: 100%;
    text-align: left;
}
</style>
