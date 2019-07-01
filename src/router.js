import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import './assets/icon.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/liebiao',
      name: 'liebiao',
      component: ()=>import('./views/Liebiao.vue')
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: ()=>import('./views/Xiangqing.vue')
    },
    {
      path: '/geren',
      name: 'geren',
      component: ()=>import('./views/Geren.vue')
    },
    {
      path: '/gouwu',
      name: 'gouwu',
      component: ()=>import('./views/Gouwu.vue')
    },
    // {
    //   path:'/*',
    //   redirect:"/",
    // }
     
  ]
})
