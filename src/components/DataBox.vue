<script setup lang="ts">
import { ref } from 'vue'

import { fetchStations } from '@/apis'
/* types */
import { Station as StationType } from '@/types/station'
/* components */
import Station from './Station.vue'

const stations = ref<StationType[]>([])

fetchStations().then(response_data => {
    stations.value = response_data.data
})
</script>

<template>
    <ul id="stations">
        <li v-for="station in stations">
            <Station
                :name="station.name"
                :durations="station.durations"
            />
        </li>
    </ul>
</template>