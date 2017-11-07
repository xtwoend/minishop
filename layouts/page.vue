<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import FootNav from '~/components/mobile/FootNav'
import NavPage from '~/components/mobile/NavPage'

export default {
  head () {
    return !this.mobileLayout ? {} : {
      bodyAttrs: {
        class: 'mobile'
      }
    }
  },
  components: {
    'nav-footer': FootNav,
    'nav-page': NavPage
  },
  computed: {
    mobileLayout () {
      return this.$store.state.option.mobileLayout
    }
  }
}
</script>

<style lang="sass">
// .fade-enter-active, .fade-leave-active
//   transition-property: opacity
//   transition-duration: .25s

// .fade-enter-active
//   transition-delay: .25s

// .fade-enter, .fade-leave-active
//   opacity: 0 
</style>
