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
      return this.$route.params.userId;
    }
  }
}
</script>

<style scoped>

</style>