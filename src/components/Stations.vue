<template>
  <a-list
    size="large"
    :loading="loading"
    :data-source="stations"
  >
    <template #footer>
        <a-row>
            <a-col class="last-updated" :offset="1">
                <b>最后更新于：</b>
                {{ lastUpdate }}
            </a-col>
        </a-row>
    </template>
    <template #renderItem="{ item }">
        <Station 
            :name="item.name"
            :durations="item.durations"
        />
    </template>
  </a-list>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'

/* APIs */
import { fetchStations } from '@/apis'
/* types */
import { Station as StationType } from '@/types/station'
import Station from './Station.vue';

const loading = ref(true)
const lastUpdateStr = ref('')
const stations = ref<StationType[]>([])

fetchStations().then(response_data => {
    stations.value = response_data.data
    loading.value = false
    lastUpdateStr.value = response_data.last_update
})

/**
 * computed
 */
const lastUpdate = computed(() => {
    const date = new Date(lastUpdateStr.value)
    return date.toLocaleString('zh-CN')
})
</script>
