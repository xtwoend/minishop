<template>
  <div>
    <search-navbar/>
    <section class="container main-content">
        <nuxt/>
    </section>
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
