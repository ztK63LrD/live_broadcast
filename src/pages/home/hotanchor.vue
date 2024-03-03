<template>
    <div class="hotanchor">
        <div class="anchorlist">
            <h4 class="title">热门主播</h4>
            <div class="anchor-bd">
                <ul>
                    <li v-for="(item, index) in anchor" :key="index">
                        <img :src="`src/assets/images/${item.img}`" alt="">
                        <p class="anchor-name">{{ item.person }}</p>
                        <button>关注</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const anchor = ref([
    { img: 'p1.jpg', person: '琪琪7' },
    { img: 'p2.jpg', person: '小狐狸呀' },
    { img: 'p3.jpg', person: '我的小姐姐呀' },
    { img: 'p4.jpg', person: 'momo_33' },
    { img: 'p5.jpg', person: '小宅' },
    { img: 'p6.jpg', person: '橘子' },
    { img: 'p7.jpg', person: '熊熊' }
])

</script>

<style scoped lang="scss">
.hotanchor {
    background-color: #EBF7F7;
    padding: 30px 0;
    margin-top: 25px;
    .anchorlist {
        width: 80%;
        margin: auto;
        .title {
            font-weight: 700;
            font-size: 20px;
        }
        .anchor-bd {
            margin-top: 15px;
            ul {
                display: flex;
                justify-content: space-between;
                gap: 0 10px;
                li {
                    background-color: #FFFFFF;
                    text-align: center;
                    border-radius: 5px;
                    width: calc(100% / 7 - 10px);
                    padding: 20px 0;
                    img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                    }
                    .anchor-name {
                        font-size: 15px;
                        font-weight: 700;
                        margin: 10px 0;
                    }
                    button {
                        width: 65px;
                        height: 24px;
                        border-radius: 12px;
                        background-color: #FFFFFF;
                        color: #F3BC3A;
                        box-shadow: 1px 2px 5px 0 #F3BC3A;
                        cursor: pointer;
                        border: 0;
                    }
                }
            }
        }
    }
}
</style>
