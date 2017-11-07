<template lang="pug">
aside(class="aside" v-if="show")
  div(class="aside--overlay" @click="close")
  transition(name="fade" :duration="{ enter: 1000, leave: 1000 }") 
    div(class="menu--shop")
      nav(class="navbar navbar--menu")
        div(class="navbar-end")
          a(class="navbar-item" @click="close")
            i(class="icon-left-open")
      div(class="menu--content")
        aside(class="menu")
          ul(class="menu-list")
            li
              nuxt-link(to="/") 
                span(class="menu-icon is-medium")
                  i(class="icon-home-1")
                span Home
            li
              nuxt-link(to="/auth/login") Login

</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.visible
    }
  },
  methods: {
    close () {
      this.show = false
      this.$emit('close')
      document.documentElement.classList.remove('nonoverflow')
    },
    open () {
      this.show = true
    },
    login () {
      this.$store.dispatch('login', {email: 'email', password: 'password'})
    }
  },
  watch: {
    visible (val) {
      this.show = val
    },
    '$route' (newVel, oldVel) {
      this.close()
    }
  }
}
</script>

<style lang="sass" scoped>
.aside
  .aside--overlay
    position: fixed
    background-color: rgba(0,0,0,.3)
    top: 0
    bottom: 0
    left: 0
    width: 100%
    height: 100vh
    z-index: 100

.menu--shop
  width: 300px
  position: fixed
  left: 0
  bottom: 0
  top: 0
  background-color: #fff
  z-index: 101
  .menu--content
    right: 0
    left: 0
    top: 3.2rem
    bottom: 0
    padding: 0
    overflow: auto
    position: absolute
.navbar--menu
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05)
  
@media screen and (max-width: 769 - 1px)
  .menu--shop
    width: 85% !important
</style>
