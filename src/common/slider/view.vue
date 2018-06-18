<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in sliderLists">
        <a :href="str.linkUrl"><img :src="str.picUrl"/></a>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets">
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    props: {
      sliderLists: Array
    },
    mounted () {
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        on: {
          onTouchEnd: function () {
            swiper.startAutoplay()
          }
        }
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper-container {
    width: 100%;
    height: 10rem;
    & .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    & .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .swiper-pagination-bullets {
      width:100%;
      height: 0.833rem;
      display: inline-block;
    }
  }
</style>
