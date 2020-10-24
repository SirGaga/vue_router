import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'
// 1.通过Vue.use(插件),来安装插件
Vue.use(VueRouter)
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import('../views/Profile');
//2.创建VueRouter对象
// 配置路由和组件之间的对应关系
const routes = [
  {
    path: '',
    // redirect重定向
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    // component: Home
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
        // 子路由的path不需要添加 '/'
      // {
      //   // 默认的缺省值，直接重定向到子路径
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userId',
    name: 'user',
    meta: {
      title: '用户'
    },
    // component: User
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '档案'
    },
    component: Profile,
    // 该路由独享的守卫
    beforeEnter:(to, from, next) => {
      next();
      console.log('profile only,beforeEnter');
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 为全局的router-link标签的active-class改变默认的激活样式
  linkActiveClass: 'active'
})
// 全局守卫
// 前置守卫钩子，在路由跳转之前进行的回调，需要且必须调用next()方法
// 后置守卫钩子(afterEach)，不需要主动调用next()方法，所以没有next()函数作为参数
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  next();
})

router.afterEach(((to, from) => {
  console.log('-----');
}))

// 3.导出router对象，并传入到Vue实例中
export default router
