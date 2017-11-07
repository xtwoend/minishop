<template lang="pug">
nav(class="navbar")
  div(class="container")
    div(class="navbar-start search")
      a(@click.prevent.stop="back" class="navbar-item back")
        i(class="icon-angle-left")

      div(class="navbar-item search")
        div(class="field search")
          div(class="control has-icons-left")
            input(class="input search" type="text" placeholder="Ketik aja bos apa yang di cari")
            span(class="icon is-small is-left")
              i(class="icon-search")
      //- div(class="navbar-end")
      //-   a(class="navbar-item")
      //-     i(class="icon-basket")

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
.navbar
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 100
  background: #fff
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05)
  .container
    max-width: 30rem !important
    width: 30rem
    .navbar-start
      &.search
        width: 100%

    .navbar-item
      width: 45px
      height: 45px
      padding: .4rem .5rem
      line-height: 34px
      [class^=icon-]
        font-size: 1.3rem
      &.search
        padding: .45rem .45rem .45rem 0
        flex: 2
        .field.search
          width: 100%
      // padding: 0.5rem !important  
      // &.search
        // width: 100%
      // [class^=icon-]
        // font-size: 1.3rem
  .navbar-burger 
    display: block
    border-right: 1px solid #dcdcdc
    span
      height: 2px
  input.search
    background-color: whitesmoke
    border-color: whitesmoke
    -webkit-box-shadow: none
    box-shadow: none
    color: #7a7a7a
  // .field.search
    // width: 100%
</style>
