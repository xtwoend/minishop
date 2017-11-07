<template lang="pug">
aside(class="aside" v-if="show")
  div(class="aside--overlay" @click="close") 
  div(class="cart--shop")
    nav(class="navbar navbar--cart")
      a(class="navbar-item" @click="close")
        i(class="icon-right-open")
      div(class="navbar-item") 
        h4(class="title h4") Keranjang Belanja ( {{ items.length }} )
    
    div(class="content--cart")
      div(class="item--cart")
        div(v-for="(item, index) in items")
          cart-item(:data="item" @remove="removeItem(item.uuid)")

    div(class="checkout--cart")
      div(class="checkout--total")
        span(class="desc") Total Belanja (Sebelum Ongkir)
        span(class="total") {{ total | currency }}
      div(class="checkout--button")
        button(class="button is-danger") Lanjut ke kasir
          i(class="icon-basket")
</template>

<script>
import cartItem from '~/components/transaction/Item'
export default {
  components: {
    'cart-item': cartItem
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.visible,
      total: 0,
      items: []
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
    removeItem (uuid) {
      // this.$store.commit('REMOVE_CART', index)
      this.$store.dispatch('cart/removeCart', {uuid: uuid})
      this.sum()
    },
    sum () {
      this.total = this.items.reduce(function (a, b) {
        return a + b.price
      }, 0)
    }
  },
  mounted () {
    this.items = this.$store.state.cart.cart
  },
  watch: {
    visible (val) {
      this.show = val
      this.sum()
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

.cart--shop
  width: 300px
  position: fixed
  right: 0
  bottom: 0
  top: 0
  background-color: #fff
  z-index: 101
.navbar--cart
  // border-bottom: 1px solid #dcdcdc
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05)
  .title
    font-size: 1rem
    font-weight: 600
    padding: 0.5rem
.content--cart
  right: 0
  left: 0
  top: 3.2rem
  bottom: 120px
  padding: 0.9rem
  overflow: auto
  position: absolute
  .item--cart
    width: 100%

.checkout--cart
  background-color: #fff
  position: absolute
  bottom: 0
  height: 120px
  width: 100%
  padding: 0.5rem
  border-top: 1px solid #dcdcdc
  .checkout--total
    display: flex
    justify-content: space-between
    align-items: center
    span
      &.total
        font-weight: 600
        font-size: 1.3rem
        padding: 0.92rem 0.4rem 0.92rem 0
        flex-grow: 1 auto
      &.desc
        font-size: 1rem
        padding: 0.4rem
  .checkout--button
    display: block
    .button
      width: 100%

@media screen and (max-width: 769 - 1px)
  .cart--shop
    width: 85% !important
</style>
