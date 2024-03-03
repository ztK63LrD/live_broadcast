<template>
    <div class="message">
        <div class="report">
            <img src="@/assets/images/level.png" alt="">
            <p>房间公告：小哥哥我在等你哦？？？？</p>
        </div>
        <div class="detail-rank">
            <el-tabs v-model="activeName">
                <el-tab-pane label="亲密总榜" name="first" class="el_btn">
                    <ul class="detail-tab">
                        <li  v-for="index in 3" :key="index">
                            <div class="detail-img">
                                <img class="frame" src="@/assets/images/first.png" alt="">
                                <img class="portrait" src="@/assets/images/p1.jpg" alt="">
                            </div>
                            <img src="@/assets/images/level.png" alt="">
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="亲密周榜" name="second" class="el_btn1">
                    <ul class="detail-tab">
                        <li  v-for="index in 3" :key="index">
                            <div class="detail-img">
                                <img class="frame" src="@/assets/images/secord.png" alt="">
                                <img class="portrait" src="@/assets/images/p2.jpg" alt="">
                            </div>
                            <img src="@/assets/images/level.png" alt="">
                        </li>
                    </ul>
                </el-tab-pane>
                <div class="rank-list">
                    <ul v-for="index in 8" :key="index">
                        <li>
                            <img src="@/assets/images/level.png" alt="">
                            <p>测试用户</p>
                            <div>8888金币</div>
                        </li>
                    </ul>
                </div>
            </el-tabs>
        </div>
        <div class="message-bottom">
            <div class="msg-scroll">
                <h4 class="tips">
                    系统提示：禁止发布任何色情、暴力、低俗、赌博等不良信息！禁止在直播间发布手机号码、QQ、微信等联系方式！否则将被永久封禁井上报公安部门。
                </h4>
            </div>
            <div class="input-wrap">
                <div class="input-icon">
                    <svg style="width: 50px; height: 20px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-delete" fill="gray"></use>
                    </svg>
                    <svg style="width: 50px; height: 20px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-texiao" fill="gray"></use>
                    </svg>
                </div>
                <div class="input-message">
                    <input type="text">
                    <button>发布</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref('first')

</script>

<style scoped lang="scss">
.message { 
    width: 360px;
    background: #FFFFFF;
    flex-shrink: 0;
    position: relative;
    .report {
        display: flex;
        align-items: center;
        padding: 0 10px;
        height: 46px;
        img {
            width: 30px;
            height: 20px;
            margin-right: 10px;
        }
    }
    .detail-rank {
        :deep(.el-tabs__nav) {
            float: none;
            justify-content: space-evenly;
            .el-tabs__active-bar {
                width: 500px;
            }
        }
        .el_btn, .el_btn1 {
            .detail-tab {
                display: flex;
                justify-content: space-between;
                margin-top: 25px;
                text-align: center;
                flex-wrap: nowrap;
                li {
                    width: 33%;
                    position: relative;
                    .detail-img {
                        .frame {
                            width: 70px;
                            height: 70px;
                        }
                        .portrait {
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            position: absolute;
                            top: 4px;
                            left: 29px;
                        }
                    }
                    img {
                        width: 60px;
                    }
                    &:nth-child(2) {
                        margin-top: -25px;
                    }
                }
                &:hover  {
                    cursor: pointer;

                }
            }
        }
        .el_btn:hover ~ .rank-list {
            height: 300px;
            opacity: 1;
        }

        .rank-list {
            background-color: #fff;
            border: 1px solid #efefef;
            width: 100%;
            height: 0;
            opacity: 0;
            transition: all .7s;
            position: relative;
            z-index: 100;
            ul li {
                padding: 20px;
                display: flex;
                img {
                    width: 28px;
                    height: 18px;
                }
                p {
                    flex: 1;

                }
            }
            &:hover {
                height: 300px;
                opacity: 1;
                cursor: pointer;
            }
        }
    }
    .message-bottom {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        top: 225px;
        .msg-scroll {
            overflow-y: scroll;
            margin-top: 20px;
            height: calc(100% - 100px);
            .tips {
                color: gold;
                font-weight: 500;
                line-height: 25px;
                padding: 25px;
            }
        }
        .input-wrap {
            border: 1px solid #eee;
            padding: 0 20px;
            .input-icon {
                padding: 10px;
            }
            .input-message {
                display: flex;
                input {
                    flex: 1;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    border: 1px solid #eee;
                }
                button {
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    background-color: gold;
                    color: #fff;
                    border: 0;
                    width: 60px;
                    height: 40px;

                }
            }
        }
    }
}
</style>
