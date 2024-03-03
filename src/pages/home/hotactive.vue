<template>
    <div class="hotactivity">
        <div class="activity">
            <div class="activity-hd">
                <h4>热门活动</h4>
                <a href="#">
                    <span>更多</span>
                    <svg style="width: 15px; height: 15px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-arrow-right" fill="gray"></use>
                    </svg>
                </a>
            </div>
            <div class="activity-bd">
                <ul>
                    <li>
                        <img src="@/assets/images/bd1.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/bd2.jpg" alt="">
                    </li>
                    <li>
                        <img src="@/assets/images/bd3.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="message">
            <div class="activity-hd">
                <h4>官方消息</h4>
                <a href="#">
                    <span>更多</span>
                    <svg style="width: 15px; height: 15px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-arrow-right" fill="gray"></use>
                    </svg>
                </a>
            </div>
            <div class="message-hd">
                <a href="#">
                    <h5>
                        <span class="act">活动</span>充值有礼，主播限时送祝福
                    </h5>
                    <p>充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福</p>
                </a>
                <a href="#">
                    <h5>
                        <span class="report-title">活动</span>充值有礼，主播限时送祝福
                    </h5>
                    <p>充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福</p>
                </a>
                <a href="#">
                    <h5>
                        <span class="report-title">活动</span>充值有礼，主播限时送祝福
                    </h5>
                    <p>充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福;充值有礼，主播限时送祝福</p>
                </a>
            </div>
        </div>
        <div class="anchor-rank">
            <div class="activity-hd">
                <h4>主播周榜</h4>
                <a href="#">
                    <span>更多</span>
                    <svg style="width: 15px; height: 15px;" class="icon">
                        <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                        <!-- use标签的fill属性可以设置图标的颜色 -->
                        <use xlink:href="#icon-arrow-right" fill="gray"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hotactivity {
    width: 80%;
    margin: auto;
    display: flex;
    gap: 0 20px;
    .activity, .message, .anchor-rank {
        background-color: #FFFFFF;
        padding: 10px;
        .activity-hd {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h4 {
                font-weight: 700;
                font-style: 20px;
            }
        }
    }
    .activity{
        flex: 2;
        .activity-bd {
            width: 100%;
            padding-top: 15px;
            ul {
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-template-rows: repeat(2, 1fr);
                gap: 20px;
                li {
                    &:nth-child(1) {
                        grid-row: 1/3;
                        grid-column: 1/2;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
    .message {
        flex: 1;
        .message-hd {
            h5 {
                font-weight: 600;
                margin-bottom: 5px;
                padding-top: 15px;
                span {
                    width: 46px;
                    display: inline-block;
                    height: 20px;
                    line-height: 20px;
                    color: #FFFFFF;
                    text-align: center;
                    margin-right: 10px;
                    font-weight: 400;
                    border-radius: 5px;
                }
                .act {
                    background-color: #BAA6FF;
                }
                .report-title {
                    background-color: #F7D48F;
                }
            }
            p {
                color: #9090A2;
                font-size: 14px;
                width: 300px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .anchor-rank {
        flex: 1;
    }
}
</style>
