<template>
  <a-list
    size="large"
    :loading="loading"
    :data-source="stations"
  >
    <template #footer>
        <a-row>
            <a-col class="last-updated">
                <b>Last Update:</b>
                A few minutes ago
            </a-col>
        </a-row>
    </template>
    <template #renderItem="{ item }">
        <a-list-item>
            <a-row style="width: 100%">
                <a-col :xs="24" :md="12">
                    <h4>
                        <b>{{ item.name }}</b>
                    </h4>
                    <span>{{ item.durations.length }} 条记录</span>
                </a-col>
                <a-col :xs="24" :md="12">
                    <a-row justify="space-around">
                        <a-col>
                            平均用时: <span>{{ get_average(item.durations) }}</span>h
                        </a-col>
                        <a-col>
                            最短用时: <span>{{ get_min(item.durations) }}</span>h
                        </a-col>
                        <a-col>
                            最长用时: <span>{{ get_max(item.durations) }}</span>h
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </a-list-item>
    </template>
  </a-list>
</template>


<script setup lang="ts">
import { ref } from 'vue'

/* APIs */
import { fetchStations } from '@/apis'
/* types */
import { Station as StationType } from '@/types/station'

const loading = ref(true)

const stations = ref<StationType[]>([])

fetchStations().then(response_data => {
    stations.value = response_data.data
    loading.value = false
})

function get_average(durations: number[]) {
    if (durations.length === 0) {
        return 0
    }
    let sum = 0
    durations.map(value => sum += value)
    return sum / durations.length
}

function get_min(durations: number[]) {
    if (durations.length === 0) {
        return 0
    }
    let min = durations[0]
    durations.map(value => min = Math.min(min, value))
    return min
}

function get_max(durations: number[]) {
    if (durations.length === 0) {
        return 0
    }
    let max = durations[0]
    durations.map(value => max = Math.max(max, value))
    return max
}
</script>
