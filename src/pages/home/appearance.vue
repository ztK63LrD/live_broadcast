<template>
    <div class="appearance" v-for="(item, index) in appearance" :key="index">
        <div class="appearance-hd">
            <h4 class="title">{{ item.title }}</h4>
            <div class="more">
                <router-link :to="index == 0 ? '/classify' : '/charts'">
                    <span>更多</span>
                    <svg style="width: 15px; height: 13px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-more" fill="gray"></use>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="appearance-bd">
            <div class="appearance-content" v-for="(con, index) in item.content" :key="index">
                <div class="appearance-img">
                    <img :src="`/src/assets/images/${con.img}`" alt="">
                </div>
                <div class="layer">
                    <img src="/src/assets/images/player.png" alt="">
                </div>
                <h4>{{ con.style }}</h4>
                <div class="appearance-text">
                    <span>{{ con.name }}</span>
                    <span>
                        <svg style="width: 15px; height: 13px;" class="icon">
                            <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                            <!-- use标签的fill属性可以设置图标的颜色 -->
                            <use xlink:href="#icon-hot" fill="gray"></use>
                        </svg>
                        {{ con.hot }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const appearance = ref([
    { title: '颜值在线', content: [
        { img: 'y1.jpg', style: '舞蹈主播', name: '小甜甜', hot: '12345' },
        { img: 'y2.jpg', style: '唱歌主播', name: '小美', hot: '1345' },
        { img: 'y3.jpg', style: '搞笑主播', name: '阿方', hot: '112345' },
        { img: 'y4.jpg', style: '游戏主播', name: '达达', hot: '23345' }
    ] },
    { title: '游戏在线', content: [
        { img: 'x1.jpg', style: '身法主播', name: '梦泪', hot: '2345' },
        { img: 'x2.jpg', style: '躺玩主播', name: 'fancer', hot: '231345' },
        { img: 'x3.jpg', style: '大神主播', name: 'theshy', hot: '345' },
        { img: 'x4.jpg', style: '剧本主播', name: 'edg', hot: '2123345' }
    ] },

])

</script>

<style scoped lang="scss">
.appearance {
    width: 80%;
    margin: auto;
    padding: 20px 0;
    .appearance-hd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .title { 
            font-weight: 700;
            font-size: 20px;
        }
        .more { 
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                margin-right: 5px;
            }   
        }
    }
    .appearance-bd {
        display: flex;
        justify-content: space-between;
        .appearance-content {
            width: 260px;
            background-color: #FFFFFF;
            border-radius: 8px;
            box-shadow: 0 3px 15px rgba(0, 0, 0, .1);
            position: relative;
            overflow: hidden;
            &:hover .appearance-img img {
                transform: scale(1.2);
            }
            .appearance-img {
                max-width: 100%;
                overflow: hidden;
                height: 150px; /* 保持高度自动调整 */
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px 8px 0 0;
                    transition: all .5s;
                }
            }
            &:hover .layer {
                opacity: 1;
                background-color: rgba(0, 0, 0, .4);
                height: 150px;
                width: 100%;
            }
            .layer {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                img {
                    width: 100px;
                    height: 100px;
                    position: absolute;
                    inset: 0;
                    margin: auto;
                }
            }
            h4 {
                padding: 10px;
            }
            .appearance-text {
                display: flex;
                margin-bottom: 10px;
                justify-content: space-between;
                color: #999;
                padding: 0 10px;
            }
        }
    }
}
</style>
