
   <template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
  }
</script>


<script>
export default {
    name:"carrousel",
    
    props:{
      swiperSlides: {
          type :Array,
          default:()=>[5,6,7]
      }
    },
    data:{
        return: {
          swiperOptionp:{
                pagination:{
                    el:".swiper-pagination"
                }
            }
       
        }
           
    }
}
</script>
