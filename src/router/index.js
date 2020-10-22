import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 1.通过Vue.use(插件),来安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
// 配置路由和组件之间的对应关系
const routes = [
  {
    path: '/',
    // redirect重定向
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 3.导出router对象，并传入到Vue实例中
export default router
