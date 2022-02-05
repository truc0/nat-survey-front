<script setup lang="ts">
const notices = [
    {
        message: '此项目仍处于开发状态',
        description: '这意味着当前的页面随时可能发生变更，在升级过程中网站可能无法使用。',
        type: 'warning',
    },
    {
        message: '以下资料仅供参考',
        description: '本网站由非官方组织维护，全部资料均来源于问卷收集，本网站无法保证数据的真实性。',
        type: 'warning',
    }
]
</script>

<template>
    <div id="notice-board">
        <a-alert 
            class="notice"
            v-for="notice in notices"
            :key="notice.message"
            :message="notice.message" 
            :description="notice.description"
            :type="notice.type" 
            closable
            show-icon 
        />
        <a-alert
            class="notice"
            message="分享你的经历"
            type="success"
            closable
            show-icon
        >
            <template #description>
                本网站暂只接受有 JAccount 账号的用户提供资料，请填写问卷
                <a href="https://wj.sjtu.edu.cn/q/ohFzbedn" target="_blank">https://wj.sjtu.edu.cn/q/ohFzbedn</a>
            </template>
        </a-alert>
    </div>
</template>

<style scoped>
#notice-board {
    text-align: left;
}

#notice-board .notice {
    margin-top: .3rem;
    margin-bottom: .3rem;
}
</style>
