<template>
    <div class="charts">
        <div class="charts-wrap"  v-for="index in 2" :key="index">
            <div class="charts-hd">
                <h4 class="title">富豪榜</h4>
                <ul>
                    <li>日榜</li>
                    <li>周榜</li>
                    <li>月榜</li>
                    <li>年榜</li>
                </ul>
            </div>
            <div class="charts-bd">
                <div class="charts-bd-rank" v-for="(item, index) in chartsrank" :key="index">
                    <div class="rank-avatar">
                        <img class="frame" :src="`src/assets/images/${item.avatar}`" alt="">
                        <img class="portrait" :src="`src/assets/images/${item.portrait}`" alt="">
                    </div>
                    <div class="rank-name">{{ item.name }}</div>
                    <div class="rank-level"></div>
                    <div class="rank-gold">
                        <span>{{ item.gold }}</span>金币
                    </div>
                </div>
            </div>
            <div class="charts-list">
                <ul v-for="(item, index) in chartslist" :key="index">
                    <li>
                        <img class="list-avatar" :src="`src/assets/images/${item.img}`" alt="">
                        <p>{{ item.namne }}</p>
                        <div class="list-level">
                            <img class="level" :src="`src/assets/images/${item.level}`" alt="">
                        </div>
                        <div>
                            <span>{{ item.gold }}</span>金币
                        </div>
                        <button>关注</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const chartsrank = ref([
    { name: '小狐狸呀', avatar: 'secord.png', portrait: 'p2.jpg', gold: '111888' },
    { name: '小狐狸呀', avatar: 'first.png', portrait: 'p1.jpg', gold: '111888' },
    { name: '小狐狸呀', avatar: 'third.png', portrait: 'p3.jpg', gold: '111888' }
])
const chartslist = ref([
    { namne: '测试名字', img: 'p4.jpg', level: 'level.png', gold: '1234' },
    { namne: '测试名字', img: 'p5.jpg', level: 'level.png', gold: '234' },
    { namne: '测试名字', img: 'p6.jpg', level: 'level.png', gold: '123234' },
    { namne: '测试名字', img: 'p7.jpg', level: 'level.png', gold: '122314' },
    { namne: '测试名字', img: 'x1.jpg', level: 'level.png', gold: '234' },
    { namne: '测试名字', img: 'x2.jpg', level: 'level.png', gold: '3234' },
    { namne: '测试名字', img: 'x3.jpg', level: 'level.png', gold: '114534' },
    { namne: '测试名字', img: 'x4.jpg', level: 'level.png', gold: '132234' }
])

</script>

<style scoped lang="scss">
.charts {
    width: 80%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    .title {
        font-weight: 700;
        font-size: 20px;
    }
    gap: 30px;
    .charts-wrap {
        width: calc(100% / 2);
        background-color: #FFFFFF;
        padding: 20px;
        .charts-hd {
            display: flex;
            justify-content: space-between;
            align-items: center;
            ul {
                display: flex;
                li {
                    width: 48px;
                    height: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    text-align: center;
                    line-height: 20px;
                    border-radius: 10px;
                    &:hover {
                        background-color: #F3BC3A;
                        color: #fff;
                        font-weight: 700;
                    }
                }
            }
        }
        .charts-bd {
            display: flex;
            justify-content: space-between;
            background: url(../../assets/images/charts-bg.png) no-repeat;
            padding: 40px 130px 0px;
            background-size: 100%;
            margin-top: 130px;
            .charts-bd-rank {
                width: 100px;
                height: 200px;
                position: relative;
                text-align: center;
                img {
                    width: 100px;  
                    object-fit: cover;
                    margin-top: -100px;
                }
                &:nth-child(2) {
                    margin-top: -40px;
                }
                .frame {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .portrait {
                    position: absolute;
                    top: 6px;
                    left: 8px;
                    border-radius: 50%;
                    width: 85px;
                    height: 85px;
                }
            }
        }
        .charts-list {
            counter-reset: count 3;
            ul li {
                display: flex;
                width: 100%;
                height: 70px;
                align-items: center;
                &:nth-child(odd) {
                    background-color: #f9f9ff;
                }
                &::before {
                    counter-increment: count 1;
                    content: counter(count, decimal-leading-zero);
                    color: #D5DAEA;
                    margin-right: 10px;
                }
                .list-avatar {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                p {
                    margin-right: 6px;
                }
                .list-level {
                    flex: 1;
                    .level {
                        width: 52px;
                        height: 32px;
                    }
                }
                span {
                    color: red;
                    font-weight: 700;
                }
                button {
                    border: 0;
                    margin-left: 25px;
                    width: 60px;
                    height: 26px;
                    background-color: #fff;
                    color: #F3BC3A;
                    box-shadow: 0 3px 6px 0 #F3BC3A;
                    border-radius: 15px;
                }
            }
        }
    }
}
</style>
