<template lang="pug">
div
  cart(:visible="cart" @close="cart=false")
  aside-menu(:visible="menu" @close="menu=false")
  nav(class="navbar")
    div(class="container")

      div(class="navbar-start is-hidden-mobile")
        div(class="navbar-burger" @click="openMenu")
          span
          span
          span

        nuxt-link(to="/" class="navbar-item logo")
          img(src="/logo.svg" alt="minishop")

      div(class="navbar-end")
        div(class="navbar-burger is-hidden-tablet" @click="openMenu")
          span
          span
          span
        nuxt-link(to="/products/search" class="navbar-item")
          i(class="icon-search")
        nuxt-link(to="/products/favourite" class="navbar-item")
          span(class="badge--nav" v-if="$store.state.cart.favourites.length > 0") {{ $store.state.cart.favourites.length }}
          i(class="icon-heart-empty")
        a(class="navbar-item" @click="openBucket")
          span(class="badge--nav" v-if="$store.state.cart.cart.length > 0") {{ $store.state.cart.cart.length }}
          i(class="icon-basket-2")
      
</template>

<script>
import Cart from '~/components/transaction/Cart'
import Menu from '~/components/Menu'

export default {
  components: {
    'cart': Cart,
    'aside-menu': Menu
  },
  data () {
    return {
      cart: false,
      menu: false
    }
  },
  methods: {
    openBucket () {
      this.cart = true
      // this.syncCart()
      document.documentElement.classList.add('nonoverflow')
    },
    openMenu () {
      this.menu = true
      document.documentElement.classList.add('nonoverflow')
    },
    async syncCart () {
      await this.$store.dispatch('getCart')
    }
  },
  mounted () {
    // this.syncCart()
  }
}
</script>

<style lang="sass" scoped>
.navbar
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 10
  background: #fff
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05)
  .container
    max-width: 30rem !important
    .navbar-item
      padding: 0.5rem !important  
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
      .logo
        margin-right: auto
  .navbar-burger 
    border-right: 1px solid #dcdcdc
    span
      height: 2px
@media screen and (max-width: 480 - 1px)
  .navbar-item.logo
    display: none
</style>
