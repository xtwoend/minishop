export const state = () => ({
  mobileLayout: false,
  mobileSidebar: false,
  userAgent: null
})

export const getters = {
  mobileLayout: state => state.mobileLayout
}

export const mutations = {

  SET_USER_AGENT (state, action) {
    state.userAgent = action
  },

  SET_MOBILE_LAYOUT (state, action) {
    state.mobileLayout = action
  },

  SET_MOBILE_SIDEBAR (state, action) {
    state.mobileSidebar = action
  }
}
