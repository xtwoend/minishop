<template lang="pug">
div.chatbox
  div(class="chat--item" v-for="conv in conversations")
    chat-item(:data="conv")
</template>

<script>
import ChatItem from '~/components/chat/chatitem'
export default {
  components: {
    'chat-item': ChatItem
  },
  data () {
    return {
      conversations: [
        {
          id: 1,
          message: 'text hello',
          user: {
            name: 'Bro',
            avatar: 'https://img11.deviantart.net/e4a2/i/2016/096/f/7/avatar_icon_by_astrolink247-d9xxs6r.jpg'
          },
          created_at: new Date()
        },
        {
          id: 2,
          message: 'Yoi, bro',
          user: {
            name: 'Boid',
            avatar: 'https://img11.deviantart.net/e4a2/i/2016/096/f/7/avatar_icon_by_astrolink247-d9xxs6r.jpg'
          },
          created_at: new Date()
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
