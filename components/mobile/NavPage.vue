<template lang="pug">
nav.navbar
  .container
    .navbar-menu
      .navbar-start
        a(@click="back" class="navbar-item")
          i(class="icon-angle-left")
      .navbar-item.nav--title
        span Chat
      .navbar-end
        nuxt-link.navbar-item(to="cart")
          span(class="badge--nav" v-if="$store.state.cart.cart.length > 0") {{ $store.state.cart.cart.length }}
          i(class="icon-basket-2")

</template>

<script>
export default {
  data () {
    return {
      // 
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
.mobile
  .navbar
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 100
    background: #fff
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05)
    .navbar-menu
      display: flex
      padding: 0
      .navbar-item
        width: 45px
        height: 45px
        // padding: 10px
        // line-height: 34px
        [class^=icon-]
          font-size: 1.3rem
        .badge--nav
          min-width: 1rem
          height: 1.1rem
          background-color: rgb(190, 35, 35)
          border-radius: 1rem
          border-width: 1px
          border-color: rgb(255, 255, 255)
          position: absolute
          top: 0.4rem
          right: 0.1rem
          padding-left: 0.3rem
          padding-right: 0.3rem
          color: #fff
          border: 1px solid #fff
          font-size: 0.7rem
      .nav--title
        flex: 2
        text-align: center
        line-height: 1.9rem
</style>
