<template lang="pug">
div
  div(class="form-login")
    div(class="form-title")
      h4 Masuk Login
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit
    hr(class="divinder")
    div(class="form-social")
      h5(class="has-text-centered is-size-7 has-text-grey") Dengan Media Sosial
      br
      .columns.is-mobile
        .column
          button(class="button button-primary is-fullwidth facebook")
            span(class="icon is-small")
              i(class="icon-facebook-rect")
            span Facebook
        .column
          button(class="button button-default is-fullwidth") 
            span(class="icon is-small")
              i(class="icon-google")
            span Google

    hr(class="divinder")
    div(class="form")
      h5(class="has-text-centered is-size-7 has-text-grey") Dengan No. Telp / Email
      br
      .field
        p(class="control has-icons-left has-icons-right")
          input(class="input" type="text" placeholder="Phone/Email" v-model="phone")
          span(class="icon is-small is-left")
            i(class="icon-mobile")
      .field
        p(class="control has-icons-left has-icons-right")
          input(class="input" type="password" placeholder="Password" v-model="password")
          span(class="icon is-small is-left")
            i(class="icon-key")
      .field
        p.control
          button(class="button is-primary is-fullwidth" @click="login") Login
  footer-app
    div.register-footer.has-text-centered Belum jadi member? 
      nuxt-link(to="/auth/register" class="has-text-danger") Daftar di sini!
</template>

<script>
import Footer from '~/components/Footer'

export default {
  components: {
    'footer-app': Footer
  },
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    async login () {
      let { data } = this.$store.dispatch('login', { username: this.phone, password: this.password })
      console.log(data)
    }
  }
}
</script>

<style lang="sass" scoped>
.register-footer
  padding: 0.8rem
  width: 100%
.facebook
  background-color: rgb(51, 79, 144)
  color: #fff
</style>
