<template>
    <div id="nav">
       
      <router-link to="/home" > <i class="iconfant"></i><span>Home</span>
      </router-link> 
      <router-link to="/liebiao">
        <i class="iconfant"></i><span>列表</span>
      </router-link>|
      <router-link to="/gouwu">
        <i class="iconfant"></i><span>购物</span>
      </router-link>
      <router-link to="/geren">
        <i class="iconfant"></i><span>个人中心</span>
      </router-link>
      <router-link to="/xiangqing">
        <i class="iconfant"></i><span>详情页</span>
      </router-link>
      
    </div>
</template>
<style>
 #nav{
     position: fixed;
     bottom: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 58px;
     border-top: 1px solid orange;
 }
</style>
