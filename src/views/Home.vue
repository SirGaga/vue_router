<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h2>我是主页</h2>
    <p>我是内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  created() {
    console.log('created');
  },
  // 这两个函数只有该组件被保持了状态，使用了keep-alive时，才是有效的
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next){
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
}
</script>
