import axios from '~/plugins/axios'
import _ from 'lodash'

export const state = () => ({
  cart: [],
  favourites: []
})

export const mutations = {
  ADD_CART: function (state, product) {
    state.cart.push(product)
  },
  REMOVE_CART: function (state, index) {
    state.cart.splice(index, 1)
  },
  SYNC_CART: function (state, cart) {
    state.cart = cart
  },
  ADD_FAVORITE: function (state, id) {
    state.favourites.push(id)
  },
  REMOVE_FAVORITE: function (state, id) {
    let index = state.favourites.indexOf(id)
    state.favourites.splice(index, 1)
  },
  SYNC_FAVOURITES: function (state, favourites) {
    state.favourites = favourites
  }
}

export const actions = {
  async addCart ({commit}, cart) {
    try {
      let { data } = await axios.post('/api/cart', cart)
      commit('ADD_CART', data)
    } catch (e) {
      console.log(e.response)
    }
  },
  async removeCart ({commit, state}, {uuid}) {
    try {
      await axios.delete('/api/cart/' + uuid)
      let index = _.findKey(state.cart, function (item) {
        return item.uuid === uuid
      })
      commit('REMOVE_CART', index)
    } catch (e) {
      console.log(e.response)
    }
  },
  async getCart ({commit}) {
    let { data } = await axios.get('/api/cart')
    commit('SYNC_CART', data)
  },
  async addToFavourite ({commit}, item) {
    let { data } = await axios.post('/api/favourites', item)
    commit('ADD_FAVORITE', data)
  },
  async removeFromFavourite ({commit}, {item}) {
    let { data } = await axios.delete(`/api/favourites/${item}`)
    commit('REMOVE_FAVORITE', data)
  }
}
