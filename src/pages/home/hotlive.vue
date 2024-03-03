<template>
    <div class="hotlive">
        <h4 class="title">热门直播</h4>
        <ul>
            <li>颜值</li>
            <li>游戏</li>
            <li>男神</li>
            <li>真人秀</li>
            <li>户外</li>
            <li>购物</li>
            <li>搞笑</li>
            <li>综艺</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hotlive {
    width: 80%;
    display: flex;
    margin: 30px auto;
    align-items: center;
    .title {
        font-weight: 700;
        font-size: 20px;
    }
    ul {
        display: flex;
        li {
            margin: 0 30px;
            &:hover {
                color: #F3BC3A;
                cursor: pointer;
                font-weight: 600;
            }
        }
    }
}
</style>
