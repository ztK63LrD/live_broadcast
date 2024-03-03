<template>
    <div class="w-full h-16 bg-white">
        <div class="header">
            <div class="logo">
                <a href="#" title="直播"></a>
            </div>
            <ul class="header-list">
                <li v-for="(item, index) in headerlist" :key="index">
                    <router-link :to="item.path">
                        <span>{{ item.title }}</span>
                    </router-link>
                </li>
            </ul>
            <div class="header-search">
                <input type="text">
                <svg style="width: 20px; height: 20px; margin-right: 15px;" class="icon">
                    <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                    <!-- use标签的fill属性可以设置图标的颜色 -->
                    <use xlink:href="#icon-search" fill="gray"></use>
                </svg>

            </div>
            <div class="header-right">
                <ul>
                    <li>
                        <svg style="width: 20px; height: 20px;" class="icon">
                            <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                            <!-- use标签的fill属性可以设置图标的颜色 -->
                            <use xlink:href="#icon-xiazai" fill="gray"></use>
                        </svg>
                        <span>下载</span>
                    </li>
                    <li @click="dialogVisible = true">
                        <svg style="width: 20px; height: 20px;" class="icon">
                            <!-- xlink:href 执行用哪一个图标，属性值务必 #icon-图标名字 -->
                            <!-- use标签的fill属性可以设置图标的颜色 -->
                            <use xlink:href="#icon-denglu" fill="gray"></use>
                        </svg>
                        <span>登录</span>
                    </li>
                </ul>
            </div>
            <!-- 弹出框 -->
            <el-dialog
                v-model="dialogVisible"
                width="450px"
            >
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="账号登录" name="first">
                        <el-input
                            v-model="login.username"
                            placeholder="请输入手机/用户名"
                            :prefix-icon="Iphone"
                        />
                        <el-input
                            v-model="login.password"
                            type = "password"
                            placeholder="请输入密码"
                            :prefix-icon="Lock"
                        />
                        <el-button type="warning" round>登录按钮</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="注册" name="second">
                        <el-input
                            v-model="login.username"
                            placeholder="请输入手机/用户名"
                            :prefix-icon="Iphone"
                        />
                        <div class="code-btn">
                            <el-input
                                v-model="login.code"
                                placeholder="请输入验证码"
                                :prefix-icon="Iphone"
                            />
                            <el-button type="warning" round>获取验证码</el-button>
                        </div>
                        <el-input
                            v-model="login.password"
                            type = "password"
                            placeholder="请输入密码"
                            :prefix-icon="Lock"
                        />
                        <el-button type="warning" round>注册登录</el-button>
                    </el-tab-pane>
                </el-tabs>
            </el-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Iphone, Lock } from '@element-plus/icons-vue'

const headerlist = ref([
    { title: '首页', path: '/index' },
    { title: '分类', path: '/classify' },
    { title: '排行榜', path: '/charts' }
])
// 弹出框
const dialogVisible = ref<boolean>(false)
// 标签选择
const activeName = ref('first')
// 登录注册信息
const login = reactive({
    username: '',
    password: '',
    code: ''
})
// 注册登录
const handleClick = () => {
    Object.assign(login, {
        username: '',
        password: '',
        code: ''
    })
}

</script>

<style scoped lang="scss">

.header {
    width: 80%;
    height: 64px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
        background: url('../../assets/logo.jpg') no-repeat;
        width: 180px;
        height: 60px;
        display: inline-block;
        background-size: contain;
    }
    .header-list {
        display: flex;
        & li {
            margin: 0 30px;
            .selected {
                font-weight: 600;
                border-bottom: 3px solid #F3BC3A;
                padding-bottom: 10px;
            }
            a {
                text-decoration: none; /* 去掉下划线 */
                color: inherit; /* 继承父元素的文本颜色，或者你也可以设置自定义的颜色值 */
            }
        }
    }
    // 搜索框
    .header-search {
        width: 300px;
        height: 36px;
        background-color: #F7F7FB;
        border-radius: 20px;
        display: flex;
        margin-left: 20px;
        align-items: center;
        padding-left: 20px;
        & input{
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none; /* 去掉输入框聚焦时的边框 */
            padding: 0; /* 去掉内边距 */
        }
    }
    .header-right {
        flex: 1;
        ul {
            display: flex;
            width: 100%;
            justify-content: end;
            li {
                display: flex;
                align-items: center;
                margin: 0 20px;
                cursor: pointer;
            }
        }
    }
    :deep(.el-dialog) {
        // height: 430px;
        border-radius: 10px;
        padding: 0;
        .el-dialog__header {
            padding: 0;
            border-radius: 10px 10px 0 0;
        }
        .el-dialog__body {
            padding: 0;
        }
        .el-tabs__header {
            padding: 15px 15px 0;
            background-color: #F3BC3A;
            border-radius: 10px 10px 0 0;
            margin: 0 0 15px;
        }
        .el-dialog__headerbtn {
            top: 8px;
            z-index: 1;
        }
        .el-tabs__content {
            padding: 10px 25px;
        }
        .el-input {
            margin-top: 20px;
        }
        .el-input__wrapper {
            padding: 10px;
            border-radius: 30px;
        }
        .el-button {
            width: 100%;
            margin: 20px 0 30px;
            padding: 25px;
            border-radius: 30px;
            font-size: 20px;
        }
    }
    .code-btn {
        position: relative;   
        :deep(.el-button) {
            position: absolute;
            right: 4px;
            top: 4px;
            width: 120px;
            font-size: 16px;
            padding: 20px;
        }
    }
}

</style>
