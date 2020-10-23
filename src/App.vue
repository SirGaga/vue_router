<template>
  <div id="app">
    <div id="nav">
      <!--  tag属性：将默认的a标签渲染成tag属性中填写的目标标签    -->
      <!--  replace属性：使用html5的history中的replaceState属性，防止前进后退    -->
      <!--  active-class属性：当<router-link>对应的路由匹配成功时，
      会自动给当前元素设置一个router-link-active的class，
      设置active-class可以修改默认的名称    -->
      <router-link to="/" replace active-class="active">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="'/user/'+userId" >用户</router-link>|
      <router-link :to="{path: '/profile',query:{userId: 123,name: 'name',height: 1.88}}" >档案</router-link>
<!--      <button @click="homeClick">首页</button>-->
<!--      <button @click="aboutClick">关于</button>-->
      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 通过VueRouter来进行修改
      //this.$router.push('/home');
      // 防止前进后退
      this.$router.replace('/home');
      console.log("homeClick");
    },
    aboutClick() {
      //this.$router.push('/about');
      this.$router.replace('/about');
      console.log("aboutClick");
    },
    profileClick() {
      // 带查询参数，变成 /profile?userId=123&name=name&height=1.88
      // /profile
      // 注意：如果提供了 path，params 会被忽略
      this.$router.replace({path:'/profile',query: {userId: 123,name: 'name',height: 1.88}})
    },
    userClick() {
      // 对命名的路由的传参
      // 提供了name之后才会解析params中的参数
      // -> /user/123
      // this.$router.replace('/user/'+this.userId);
      this.$router.replace({name:'user',params: {userId: this.userId}})
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
