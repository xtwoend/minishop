<template>
  <div>
    <!-- <div class="columns is-variable is-multiline is-gapless"> -->
      <!-- {{ $store.state }} -->
      <div v-for="item in data">
        <item :data="item" :show-content="showContent"></item>
      </div>
      <loadmore :loading="waiting"></loadmore>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50" v-if="hasmore"></div>
    <!-- </div> -->
  </div>
</template>

<script>
import Item from '~/components/product/Item'
import Loadmore from '~/components/loadmore'
import axios from 'axios'

export default {
  // async asyncData ({ store }) {
  //   try {
  //     if (store.state.products.products.length === 0) {
  //       let { data } = await axios.get('http://minishop.dev/api/v1/products')
  //       return {
  //         data: data.data,
  //         total: data.meta.pagination.total
  //       }
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  async fetch ({ store }) {
    try {
      if (store.state.products.products.length === 0) {
        let { data } = await axios.get('http://minishop.dev/api/v1/products')
        store.commit('products/SET_PRODUCTS', data.data)
      }
    } catch (e) {
      console.log(e)
    }
  },
  components: {
    Item,
    Loadmore
  },
  data () {
    return {
      data: [],
      busy: false,
      count: 0,
      waiting: false,
      currentPage: 1,
      showContent: false
    }
  },
  mounted () {
    this.data = this.$store.state.products.products
  },
  methods: {
    async fetch () {
      let { data } = await axios.get('http://minishop.dev/api/v1/products', {
        params: {
          page: this.currentPage
        }
      })
      this.data = this.data.concat(data.data)
      this.busy = false
      this.waiting = false
    },
    loadMore () {
      this.busy = true
      this.waiting = true
      this.currentPage++
      this.fetch()
    }
  },
  computed: {
    hasmore () {
      return this.total >= (5 * this.currentPage)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
