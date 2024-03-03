<template>
    <div class="leftmenu">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false" style="right: -18px;" @click="cur = 1" v-show="cur == 0">
                <svg style="width: 20px; height: 20px;" class="icon">
                    <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                    <!-- use标签的fill属性可以设置图标的颜色 -->
                    <use xlink:href="#icon-shixin-right" fill="gray"></use>
                </svg></el-radio-button>
            <el-radio-button :label="true" style="right: -18px;" @click="cur = 0" v-show="cur == 1">
                <svg style="width: 20px; height: 20px;" class="icon">
                    <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                    <!-- use标签的fill属性可以设置图标的颜色 -->
                    <use xlink:href="#icon-shixin-left" fill="gray"></use>
                </svg>
            </el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
            <el-menu-item v-for="item in leftmenulist" :key="item.id" :index = "item.id">
                <svg style="width: 50px; height: 20px;" class="icon">
                    <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                    <!-- use标签的fill属性可以设置图标的颜色 -->
                    <use :xlink:href="`#icon-${item.icon}`" fill="gray"></use>
                </svg>
                <span>{{ item.title }}</span>
            </el-menu-item>
            <ul class="menutabs" v-show="isCollapse == false">
                <li>颜值</li>
                <li>颜值</li>
                <li>颜值</li>
                <li>颜值</li>
                <li>颜值</li>
                <li>颜值</li>
                <li>颜值</li>
            </ul>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const leftmenulist = ref([
    { id: '1', title: '我的关注', icon: 'my' },
    { id: '2', title: '榜单', icon: 'bangdan' },
    { id: '3', title: '分类', icon: 'fenlei' }
])

const isCollapse = ref(true)
const cur = ref<number>(0)

</script>

<style scoped lang="scss">
.leftmenu {
    position: relative;
    background-color: #FFFFFF;
    height: calc(100vh - 70px);
    margin-right: 30px;
    :deep(.el-radio-group) {
        .el-radio-button { 
            position: absolute;
            top: 40%;
            background-color: #FFFFFF;
            height: 60px;
            line-height: 60px;
            span {
                border: 0;
                // width: 30px;
                border-radius: 4px;
                padding: 0px;
            }
        }
    }
    :deep(.el-menu) {
        border: 0;
        .menutabs {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
            li {
                background-color: #F9F9FF;
                width: 40%;
                text-align: center;
                padding: 5px 0;
            }
        }
    }
}
</style>
