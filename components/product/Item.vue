<template>
<div class="card">
  <div class="card-image">
    <nuxt-link :to="`/products/${data.slug}`">
      <figure class="image is-square">
        <img :src="data.image.src" alt="Image">
      </figure>
    </nuxt-link>
  </div>
  <div class="card-content">
    <nuxt-link :to="`/products/${data.slug}`">
      <div class="item-title">{{ data.name }}</div>
    </nuxt-link>
    <div class="item-meta mb">
      <span class="item-price">{{ data.price | currency }} {{ data.currency }} </span>
      <span class="item-size" v-if="data.hasOwnProperty('attributes') && data.attributes.hasOwnProperty('sizes')">{{ data.attributes.sizes.join(', ') }}</span>
    </div>
    <div v-if="showContent">
      <item-content :source="data.description"></item-content>
    </div>
    <div class="item-meta bt">
      <span class="item-pengen">121 yang minat</span>
      <span class="item-stok has-text-right">
        <stock :data="data.stock"></stock> 
      </span>
    </div>
  </div>
  <footer class="card-footer" v-if="!option">
    <a class="card-footer-item" @click.stop.prevent="addToFavorite">
      <i :class="favouriteClass"></i> Minat
      <!-- <span class="is-hidden-mobile"></span> -->
    </a>
    <a class="card-footer-item">
      <i class="icon-forward"></i>
      Bagikan
    </a>
    <div class="card-footer-item button--cart">
      <button class="button is-primary" @click.stop.prevent="openOption">
        <i class="icon-basket"></i> Beli
      </button>
    </div>
  </footer>
  <footer class="product--options" v-else>
    <button class="delete is-medium" @click="closeOption"></button>
    <div>
      Hello bro.. silahkan pilih warna dan ukuran yang bro mau.
    </div>
    <div v-if="data.hasOwnProperty('attributes') && data.attributes.hasOwnProperty('sizes')">
      <div v-for="size in data.attributes.sizes">
        <button class="button" v-for="color in data.attributes.colors" @click="addToBucket(color, size)">{{ color + ' ' + size }}</button>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Stock from '~/components/product/stock'
import Content from '~/components/product/content'
import uuid from 'uuid/v1'

export default {
  components: {
    Stock,
    'item-content': Content
  },
  props: {
    data: {
      type: Object,
      default: true
    },
    showContent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      favourite: false,
      option: false,
      item: this.data
    }
  },
  methods: {
    addToBucket (color, size) {
      let data = {
        uuid: uuid(),
        item_id: this.data.id,
        color: color,
        size: size,
        name: this.data.name,
        price: this.data.price,
        image: this.data.image
      }
      // this.$store.commit('ADD_CART', data)
      this.$store.dispatch('cart/addCart', data)
      this.option = false
      // this.option = true
    },
    openOption () {
      if (this.data.stock > 0) {
        this.option = true
      }
    },
    closeOption () {
      this.option = false
    },
    addToFavorite () {
      if (this.checkFavorite()) {
        this.$store.dispatch('cart/removeFromFavourite', { item: this.data.id })
        this.favourite = false
      } else {
        this.$store.dispatch('cart/addToFavourite', { item: this.data.id })
        this.favourite = true
      }
    },
    checkFavorite () {
      let favourites = this.$store.state.cart.favourites
      return favourites.includes(this.data.id)
    }
  },
  computed: {
    favouriteClass: function () {
      let iconClass = (this.checkFavorite()) ? 'icon-heart' : 'icon-heart-empty'
      return [
        iconClass,
        { 'is-favourite': this.checkFavorite() }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.card:not(last-child)
  margin-bottom: 0.8rem
.card-content
  padding: 12px
  .item-title
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    margin-bottom: .375rem
    height: 1.25rem
    line-height: 1.25rem
    font-weight: 400
  .item-meta
    display: flex
    &.mb
      margin-bottom: 0.5rem
    &.bt
      border-top: 1px solid #dbdbdb
    .item-price
      // color: hsl(348, 100%, 61%)
      flex: 1
      font-weight: 600
      font-size: 1rem
    .item-size
      font-size: 0.8rem
      padding: 3px 10px
      background-color: hsl(0, 0%, 21%)
      color: #fff
    .item-pengen,
    .item-stok
      flex: 1
      font-size: 85%
      color: rgb(128, 128, 128)
.card-footer-item
  border: none
  .is-favourite
    color: #d73c3c
  &.button--cart
    padding: 0 0.4rem
    .button
      width: 100%
.product--options
  padding: 0.5rem
  background-color: hsl(0, 0%, 21%)
  color: #fff
  button.delete
    position: absolute
    right: 0.5rem

</style>
