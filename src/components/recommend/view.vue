<template>
  <div>
    推荐
  </div>
</template>
<script>
  import getSliderList from '../../api/getSliderLists'
  import { ERR_OK } from '../../api/config'

  export default {
    methods: {
      getSliderList () {
        getSliderList().then((res) => {
          if (ERR_OK === 0) {
            console.log(res.data)
          }
        })
      }
    },
    mounted () {
      this.getSliderList()
    }
  }
</script>
<style>

</style>
