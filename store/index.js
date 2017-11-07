import axios from '~/plugins/axios'
import _ from 'lodash'

export const state = () => ({
  authUser: null,
  token: null,
  age: 0
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_TOKEN: function (state, token) {
    state.token = token
  },
  SET_SESSION: function (state, maxAge) {
    state.age = maxAge / 1000
  }
}

export const actions = {
  nuxtServerInit (store, { params, route, isServer, req }) {
    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
    store.commit('option/SET_MOBILE_LAYOUT', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)

    if (req.session && req.session.token) {
      // commit('SET_USER', req.session.authUser)
      store.commit('SET_TOKEN', req.session.token)
    }
    if (req.session && req.session.cart && _.isArray(req.session.cart)) {
      store.commit('cart/SYNC_CART', req.session.cart)
    }
    if (req.session && req.session.favourites && _.isArray(req.session.favourites)) {
      store.commit('cart/SYNC_FAVOURITES', req.session.favourites)
    }
    if (req.session && req.session.cookie.maxAge) {
      store.commit('SET_SESSION', req.session.cookie.maxAge)
    }
  },
  async login ({commit}, {username, password}) {
    let { data } = await axios.post('/api/auth', {username: username, password: password})
    console.log(data)
  }
}
