<script setup lang="ts">
import NoticeBoard from './components/NoticeBoard.vue';
import Stations from '@/components/Stations.vue'
</script>

<template>
<a-layout id="app-layout">
  <a-layout-header id="app-header">
    <h1>核酸报告用时分享</h1>
  </a-layout-header>

  <a-layout-content>
    <NoticeBoard />
    <Stations />
  </a-layout-content>

  <a-layout-footer id="app-footer">
    Made by <a href="https://dongyueweb.com">DongYue Web Studio</a> |
    <a href="https://github.com/dyweb">Github</a> |
    <a href="https://github.com/truc0/nat-survey-front">Source</a>
  </a-layout-footer>
</a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f0f2f5;
}

#app-layout {
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;

  background: inherit;
}

#app-header.ant-layout-header {
  background: inherit;
}

#app-footer {
  text-align: center;
}
</style>
