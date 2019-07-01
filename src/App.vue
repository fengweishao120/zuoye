<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
//1 引入组件
//2 注册 
//3 用标签的形式使用
import Nav from './components/Nav'
export default {
   components:{
     Nav
   }
}
</script>

<style>
  a{
    text-decoration: none;
    color: black;
    margin-right: 50px;
  }
</style>
