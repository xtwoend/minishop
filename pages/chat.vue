<template lang="pug">
div
  nav-page
  .container.main-content
    chat-box
  
</template>

<script>
import Chat from '~/components/chat/chatbox'
import NavPage from '~/components/mobile/NavPage'

export default {
  components: {
    'chat-box': Chat,
    'nav-page': NavPage
  },
  layout: 'page',
  data () {
    return {
      // 
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
