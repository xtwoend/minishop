<template>
  <div>
    <my-navbar v-if="!mobileLayout"/>
    <m-navbar v-if="mobileLayout"/>
    <section class="container main-content">
        <nuxt/>
    </section>
    <nav-footer v-if="mobileLayout"/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import FootNav from '~/components/mobile/FootNav'
import MNavbar from '~/components/mobile/Navbar'

export default {
  head () {
    return !this.mobileLayout ? {} : {
      bodyAttrs: {
        class: 'mobile'
      }
    }
  },
  components: {
    'my-navbar': Navbar,
    'nav-footer': FootNav,
    'm-navbar': MNavbar
  },
  computed: {
    mobileLayout () {
      return this.$store.state.option.mobileLayout
    }
  }
}
</script>

<style lang="sass">
</style>
