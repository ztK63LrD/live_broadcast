<template>
    <div class="studio">
        <div class="studio-intro">
            <img src="@/assets/images/1.jpg" alt="">
            <div class="intro-center">
                <h4>测试直播<span>游戏</span></h4>
                <div class="intro-bottom">
                    <p class="intro-name">主播：babyG</p>
                    <p class="intro-room">房间号：325534252</p>
                    <p class="intro-hot">
                        <img src="@/assets/images/level.png" alt="">3242315
                    </p>
                    <p class="intro-peoplet">
                        <img src="@/assets/images/level.png" alt="">322315
                    </p>
                </div>
            </div>
            <div class="intro-right">
                <ul>
                    <li>
                        <svg style="width: 50px; height: 20px;" class="icon">
                            <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                            <!-- use标签的fill属性可以设置图标的颜色 -->
                            <use xlink:href="#icon-phone" fill="gray"></use>
                        </svg>
                        <span>手机观看</span>
                    </li>
                    <li>
                        <svg style="width: 50px; height: 20px;" class="icon">
                            <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                            <!-- use标签的fill属性可以设置图标的颜色 -->
                            <use xlink:href="#icon-share" fill="gray"></use>
                        </svg>
                        <span>分享</span>
                    </li>
                </ul>
                <div class="intro-focus">
                    <div class="focus-num">8</div>
                    <div class="focus-btn">
                        <img src="@/assets/images/level.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="player-wrap">
            <video class="studio-video" controls>
                <source src="@/assets/video/2.mp4">
            </video>
        </div> 
        <div class="gift-send">
            <img src="@/assets/images/level.png" alt="">
            <div class="coin">金币: <span>88</span></div>
            <div class="recharge">充值</div>
            <div class="gift-list">
                <el-carousel :autoplay="false" arrow="never" indicator-position="none" height="60px" ref="myswiper">
                    <el-carousel-item v-for="index in 3" :key="index">
                        <img src="@/assets/images/1.jpg" alt="">
                        <img src="@/assets/images/2.jpg" alt="">
                        <img src="@/assets/images/3.jpg" alt="">
                        <img src="@/assets/images/4.jpg" alt="">
                        <img src="@/assets/images/p1.jpg" alt="">
                        <img src="@/assets/images/p2.jpg" alt="">
                        <img src="@/assets/images/p3.jpg" alt="">
                        <img src="@/assets/images/p4.jpg" alt="">
                    </el-carousel-item>
                </el-carousel>
                <!-- 按钮 -->
                <div class="next-btn" @click="arrowClick('left')">
                    <svg style="width: 50px; height: 20px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-shixin-left" fill="gray"></use>
                    </svg>
                </div>
                <div class="pre-btn" @click="arrowClick('right')">
                    <svg style="width: 50px; height: 20px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-shixin-right" fill="gray"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="anchor-dynamic">
            <h4 class="title">主播动态</h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const myswiper = ref()
const arrowClick = (val: string) => {
    if(val === 'right') {
        myswiper.value.next()
    } else {
        myswiper.value.prev()
    }
}
</script>

<style scoped lang="scss">
.studio {
    flex: 1;
    .studio-intro {
        display: flex;
        height: 100px;
        background-color: #FFFFFF;
        align-items: center;
        img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-left: 20px;
        }
        .intro-center {
            flex: 1;
            margin-top: 2px;
            margin-left: 15px;
            h4 {
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 20px;
                span {
                    background-color: #008c8c;
                    color: #FFFFFF;
                    margin-left: 10px;
                    font-size: 14px;
                    font-weight: normal;
                }
            }
            .intro-bottom {
                display: flex;
                align-items: center;
                .intro-name {
                    margin-right: 40px;
                }
                .intro-room {
                    color: #909090;
                    margin-right: 50px;
                }
                .intro-hot {
                    img {
                        width: 20px;
                        height: 12px;
                        margin-right: 5px;
                    }
                }
                .intro-peoplet {
                    img {
                        width: 20px;
                        height: 12px;
                        margin-right: 5px;
                    }
                }
            }
        }
        .intro-right {
            ul {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                gap: 0 10px;
                li {
                    display: flex;
                    align-items: center;
                    &:last-child {
                        margin-right: 20px;
                    }
                }
            }
            .intro-focus {
                display: flex;
                align-items: center;
                margin-left: 20px;
                .focus-num {
                    background-color: #f5f5f5;
                    width: 100px;
                    line-height: 26px;
                    border-radius: 15px;
                    text-align: center;
                }
                .focus-btn {
                    width: 90px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 15px;
                    text-align: center;
                    background: linear-gradient(90deg,#82D3FF, #854EFF);
                    margin-left: -20px;
                    img {
                        width: 15px;
                        height: 15px;
                        margin-left: 0px;
                    }
                }
            }
        }
    }
    .player-wrap {
        .studio-video {
            width: 100%;
        }
    }
    .gift-send {
        display: flex;
        background-color: #FFFFFF;
        height: 60px;
        align-items: center;
        padding: 0 10px;
        img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }
        .coin {
            span {
                color: gold;
            }
        }
        .recharge {
            background-color: gold;
            color: #FFFFFF;
            margin-left: 20px;
            padding: 3px 10px;
            height: 30px;
            line-height: 30px;
            border-radius: 3 px;
            background: linear-gradient(90deg,#FFD01E, #FFAA21);
        }
        .gift-list {
            flex: 1;
            height: 60px;
            position: relative;
            margin-left: 20px;
            :deep(.el-carousel--horizontal) {
                width: 400px;
                position: absolute;
                right: 10px;
                .el-carousel__item {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    img {
                        width: 44px;
                        height: 44px;
                        border-radius: 10px;
                        border: 1px solid #e8e8e8;
                        margin: 0 2px;
                    }
                }
            }
            .next-btn {
                position: absolute;
                top: 20px;
                right: 395px;
                cursor: pointer;
            }
            .pre-btn {
                position: absolute;
                top: 20px;
                right: -25px;
                cursor: pointer;
            }
        }
    }
}
</style>
