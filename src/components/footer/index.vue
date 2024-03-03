<template>
    <div class="footer">
        <div class="footer-list">
            <ul v-for="(item, index) in footer" :key="index">
                <li><h3>{{ item.title }}</h3></li>
                <li v-for="(type, index) in item.content" :key="index">{{ type.type }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const footer = ref([
    { title: '热门频道', content: [
        { type: '颜值' },{ type: '游戏' },{ type: '男神' },{ type: '真人秀' },{ type: '户外' },{ type: '购物' },{ type: '搞笑' }
    ] },
    { title: '关于我们', content: [
        { type: '商务合作' },{ type: '联系客服' }
    ] },
    { title: '帮助中心', content: [
        { type: '用户注册协议' },{ type: '隐私权政策' },{ type: '用户阳光行为规范' },{ type: '直播协议' },{ type: '直播内容管理规定' }
    ] },
    { title: '产品下载', content: [
        { type: '暂无' }
    ] },
])

</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    background-color: #1B1B27;
    color: #a4a4a4;
    .footer-list {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
        li {
            cursor: pointer;
            &:hover {
                color: aqua;
                font-weight: 600;
            }
            margin: 10px 0;
            h3 {
                color: #fff;
                margin-bottom: 10px;
            }
        }
    }
}
</style>
