<template>
  <div>
    <search-navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/SearchNavbar'
export default {
  components: {
    'search-navbar': Navbar
  }
}
</script>

<style lang="sass">

</style>
