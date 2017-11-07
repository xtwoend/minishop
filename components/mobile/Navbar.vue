<template lang="pug">
nav(class="navbar")
  div(class="container")
    .navbar-menu
      .navbar-start
        nuxt-link(class="navbar-burger" to="/menu")
          span
          span
          span
      .navbar-brand
        div(class="navbar-item logo")
          nuxt-link(to="/")
            img(src="/logo.svg" alt="minishop")

      .navbar-end
        nuxt-link(to="/products/search" class="navbar-item")
          i(class="icon-search")
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      // 
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
      [class^=icon-]
        font-size: 1.3rem
      .navbar-burger
        &:hover
          background-color: transparent !important

      .navbar-item
        width: 3.2rem
        height: 3.2rem
        &.logo
          flex: 2
          width: 100%
          img
            max-height: 2rem
            margin-top: 0.5rem
        // &.search
        //   flex: 2
        //   padding: .5rem 0rem .5rem 0
        //   .field.search
        //     width: 100%
        //   [class^=icon-]
        //     font-size: 1rem
        //   input.search
        //     background-color: whitesmoke
        //     border-color: whitesmoke
        //     -webkit-box-shadow: none
        //     box-shadow: none
        //     color: #7a7a7a

</style>
