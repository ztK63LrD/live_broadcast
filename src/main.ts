import { createApp } from 'vue'
import 'reset.css'
import './style/style.css'
import './style/tailwind.css'
import App from './App.vue'

// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 导入路由组件
import router from '@/router'

// svg图标配置
import 'virtual:svg-icons-register'

// 获取应用实例对象
const app = createApp(App)
// 使用路由组件
app.use(router)

// 安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn, // element-plus国际化配置
})

// 将应用挂载到挂载点上
app.mount('#app')
