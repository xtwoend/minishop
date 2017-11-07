<template lang="pug">
div
  item(:data="item" :show-content="showContent")
  
</template>

<script>
import axios from 'axios'
import Item from '~/components/product/Item'
import _ from 'lodash'

export default {
  async asyncData ({ params, store }) {
    let products = store.state.products.products
    if (products.length > 0) {
      let index = _.findKey(products, function (item) {
        return item.slug === params.slug
      })
      return {
        item: products[index]
      }
    } else {
      let { data } = await axios.get(`http://minishop.dev/api/v1/products/${params.slug}`)
      return {
        item: data.data
      }
    }
  },
  components: {
    'item': Item
  },
  data () {
    return {
      showContent: true
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
