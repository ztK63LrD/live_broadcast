<template>
    <div class="diveo">
        <div class="video-player" v-for="(item, index) in videolist" :key="index" v-show="currentIndex == index">
            <video controls class="player">
                <source :src="`src/assets/video/${item.video}`" type="video/mp4" />
            </video>
            <div class="goin">
                <router-link to="/room">进入直播间</router-link>
            </div>
        </div>
        <div class="video-right">
            <ul>
                <li :class="currentIndex == index ? 'active' : ''" v-for="(item, index) in videolist" :key="index" @click="changeIndex(index)">
                    <img :src="`src/assets/images/${item.img}`" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const videolist = ref([
    { img: '1.jpg', video: '1.mp4' },
    { img: '2.jpg', video: '2.mp4' },
    { img: '3.jpg', video: '3.mp4' },
    { img: '4.jpg', video: '4.mp4' }
])
const currentIndex = ref<number>(0)
// 改变当前的索引
const changeIndex = (index: number) => {
    currentIndex.value = index
}

</script>

<style scoped lang="scss">
.diveo {
    width: 80%;
    display: flex;
    margin: 0 auto;
    .video-player {
        width: 70%;
        background: #333;
        position: relative;
        .player {
            width: 100%;
            height: 650px;
        }
        .goin {
            position: absolute;
            width: 100px;
            height: 24px;
            border-radius: 12px;
            background-color: #F3BC3A;
            color: #FFFFFF;
            font-size: 15px;
            text-align: center;
            line-height: 24px;
            bottom: 38px;
            right: 140px;
        }
    }
    .video-right {
        flex: 1;
        background-color: rgba($color: #000000, $alpha: 0.7);
        padding: 10px;
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            li {
                font-size: 0;
                position: relative;
                img {
                    width: 100%;
                    height: 135px;
                    object-fit: cover;
                }
            }
            li.active {
                border: 2px solid #18D5D9;
                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -15px;
                    border: 7px solid transparent;
                    border-right-color: #18D5D9;
                }
            }
        }
    }
}
</style>
