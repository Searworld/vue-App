<template>
  <div></div>
</template>
<script>
  import getRankings from 'api/getRankings'
  import { ERR_OK } from 'api/config'

  export default {
    methods: {
      getRankings () {
        getRankings().then((res) => {
          if (ERR_OK === 0) {
            console.log(res.data)
          }
        })
      }
    },
    mounted () {
      this.getRankings()
    }
  }
</script>
<style>

</style>
