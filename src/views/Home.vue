<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>这是首页</div>
    <Banner :slider = 'slider'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '../components/banner'
export default {
  name: 'home',
  data(){
    return{
      slider:[1,2,3,4]
    }
  },
  components: {
    HelloWorld,
    Banner
  }
}
</script>
