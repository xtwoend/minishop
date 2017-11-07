
export const state = () => ({
  products: [],
  promotions: [],
  categories: []
})

export const mutations = {
  SET_PRODUCTS: function (state, products) {
    state.products = products
  },
  SET_PROMOTIONS: function (state, promotions) {
    state.promotions = promotions
  },
  SET_CATEGORIES: function (state, categories) {
    state.categories = categories
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  }
}
