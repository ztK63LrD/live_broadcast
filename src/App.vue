<template>
    <div class="w-full h-full bg-stone-200">
        <!-- 头部 -->
        <Header></Header>
        <!-- 路由组件出口 -->
        <router-view></router-view>
        <!-- 底部 -->
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'

</script>

<style scoped>
</style>
