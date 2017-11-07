<template lang="pug">
div.footer--nav
  nuxt-link(class="nav-item" to="/")
    i(class="nav-icon icon-home-1")
    span Beranda
  nuxt-link(class="nav-item" to="/products/favourite")
    span(class="badge--nav" v-if="$store.state.cart.favourites.length > 0") {{ $store.state.cart.favourites.length }}
    i(class="nav-icon icon-heart-empty")
    span Disukai
  nuxt-link(class="nav-item" to="/cart")
    span(class="badge--nav" v-if="$store.state.cart.cart.length > 0") {{ $store.state.cart.cart.length }}
    i(class="nav-icon icon-basket-2")
    span Keranjang
  nuxt-link(class="nav-item" to="/notification")
    i(class="nav-icon icon-bell")
    span Notifikasi
  nuxt-link(class="nav-item" to="/chat")
    i(class="nav-icon icon-comment")
    span Chat
    
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
.footer--nav
  position: fixed
  z-index: 10
  bottom: 0
  left: 0
  right: 0
  height: 45px
  -webkit-box-shadow: 0px -2px 2px rgba(0,0,0,.05), 0px -1px 0 rgba(0,0,0,.05)
  box-shadow: 0px -2px 2px rgba(0,0,0,.05), 0px -1px 0 rgba(0,0,0,.05)
  background-color: #fff
  background-image: -webkit-linear-gradient(top,#d9d9d9,#d9d9d9 50%,transparent 0)
  background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0)
  background-size: 100% 1px
  background-repeat: no-repeat
  background-position: 0 0
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  text-align: center
  .nav-item
    display: block
    position: relative
    padding: 5px 0
    -webkit-box-flex: 1
    -ms-flex: 1
    flex: 1
    text-decoration: none
    -ms-flex-flow: column nowrap
    flex-flow: column nowrap
    -ms-flex-align: center
    align-items: center
    -ms-flex-pack: justify
    justify-content: space-between
    -ms-flex: 1
    flex: 1
    &.nuxt-link-exact-active
      color: #000
    .badge--nav
      min-width: 1rem
      height: 1.1rem
      background-color: rgb(190, 35, 35)
      border-radius: 1rem
      border-width: 1px
      border-color: rgb(255, 255, 255)
      position: absolute
      top: 0.2rem
      right: 0.7rem
      padding-left: 0.3rem
      padding-right: 0.3rem
      color: #fff
      border: 1px solid #fff
    i.nav-icon
      font-size: 1.3rem
      margin: auto
      display: -ms-inline-flexbox
      display: inline-flex
      -ms-flex-align: center
      align-items: center
      fill: currentColor
      text-rendering: optimizeLegibility
      vertical-align: middle
    span
      display: block
      font-size: 0.7rem
      text-align: center
      


</style>
