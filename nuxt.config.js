module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'minionshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/fontello.css',
    '~assets/css/markdown.css',
    // '~assets/css/vue2-animate.css',
    { src: '~assets/sass/app.sass', lang: 'sass' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  manifest: {
    theme_color: '#3B8070'
  },
  /**
   * [plugins description]
   * @type {Array}
   */
  plugins: [
    { src: '~plugins/infinite.js', ssr: false },
    '~plugins/numeral.js',
    '~/plugins/cookies'
  ],
  /**
   * [modules description]
   * @type {Array}
   */
  modules: [
    ['@nuxtjs/pwa', { optimize: true }],
    ['@nuxtjs/google-analytics', { ua: 'UA-XXXXXXXX-X' }]
  ],
  /**
   * Cache component
   * @type {Object}
   */
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  /*
  ** Add axios globally
  */
  build: {
    // vendor: ['axios'],
    analyze: {
      analyzerMode: 'static'
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
