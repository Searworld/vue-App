<template>
  <div v-if="sliderLists.length" class="slider-wrapper">
    <slider :sliderLists="sliderLists">
    </slider>
  </div>
</template>
<script>
  import getSliderList from 'api/getSliderLists'
  import { ERR_OK } from 'api/config'
  import Slider from 'common/slider/view'
  import getRecommendList from 'api/getRecommendList'

  export default {
    data () {
      return {
        sliderLists: [],
        getRecommendList: []
      }
    },
    components: {
      Slider
    },
    methods: {
      async init () {
        await Promise.all([
          this._getSliderList(),
          this._getRecommendList()
        ])
      },
      _getSliderList () {
        getSliderList().then((res) => {
          if (ERR_OK === 0) {
            this.sliderLists = res.data.slider
          }
        })
      },
      _getRecommendList () {
        getRecommendList().then((res) => {
          if (ERR_OK === 0) {
            this.getRecommendList = res.data.list
          }
        })
      }
    },
    mounted() {
      this.init()
    }
  }
</script>
<style>

  .slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
</style>
