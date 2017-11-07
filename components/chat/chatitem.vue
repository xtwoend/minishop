<template lang="pug">
div
  div.chat--bubble.columns.is-mobile.is-gapless
    div.chat--user.column.is-2
      img(:src="data.user.avatar" alt="data.user.name")
    div.chat--message.column.is-10
      div.chat--message-text {{ data.message }}
        span.chat--time 21-Sep 08:00

  div.chat--bubble.columns.is-mobile.is-gapless
    div.chat--message.column.is-10
      div.chat--message-text {{ data.message }}
        span.chat--time 21-Sep 08:00
    div.chat--user.column.is-2
      img(:src="data.user.avatar" alt="data.user.name")
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      // 
    }
  }
}
</script>

<style lang="sass" scoped>
  
.chat--bubble
  width: 100%
  padding: 0.5rem 0
  &.columns
    margin-bottom: 0
  .chat--user
    // padding: 0 0.5rem 0
    text-align: center
    img
      max-width: 42px
      max-height: 42px
      border-radius: 2px
      border: 1px solid #ddd
  .chat--message
    background: white
    // padding: 10px
    border-radius: 2px
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2)
    max-width: 100%
    .chat--message-text
      padding: 0.5rem

  .chat--time
    display: block
    vertical-align: bottom
    font-size: 0.7rem
    color: #aaa
</style>
