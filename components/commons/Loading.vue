<template lang="pug">
.loading
  img(src="/logo.svg")
</template>

<script>
export default {
  data () {
    return {
      // 
    }
  }
}
</script>

<style lang="sass" scoped>
.loading
  position: fixed
  top: 0
  bottom: -100%
  width: 100%
  text-align: center
  margin: auto 0
  height: 100%
  z-index: 12

</style>
