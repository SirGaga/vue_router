<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息，嘿嘿嘿</p>
<!--    <h2>{{$route.params.userId}}</h2>-->
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    // userId: () => this.$route.params.userId
    userId() {
      // $route 表示当前处于活跃状态的路由
      // $route.params.userId userId代表在路由定义的时候在路由路径上填写的:userId参数名字
      // 所有的组件都继承自Vue的原型
      // $router 是VueRouter实例，想要导航到不同URL，则使用$router.push方法
      // $route 是当前route跳转对象里面可以获取name、path、query、params等
      return this.$route.params.userId;
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log('beforeRouteEnter');
    next();
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('beforeRouteUpdate');
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('beforeRouteLeave');
    next();
  }
}
</script>

<style scoped>

</style>