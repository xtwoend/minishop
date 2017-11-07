<template lang="pug">
article(class="media")
  figure(class="media-left")
    div(class="image is-64x64")
      img(:src="data.image.src")
  div(class="media-content")
    div(class="content") {{ data.name }}
    div(class="desc")
      span.item--attribute {{ data.size }} {{ data.color }}
      span.item--price {{ data.price | currency }}

  div(class="media-right")
    button(class="delete" @click="removeItem")
</article>

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
  },
  methods: {
    removeItem (index) {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="sass" scoped>
article.media:not(last-child)
  margin-bottom: 0.9rem
  .media-left 
    margin-right: 0.5rem
  .media-right
    position: absolute
    right: 0.9rem
  .desc
    display: flex
    justify-content: space-between
    .item--attribute
      flex-grow: 1 auto
      font-size: 14px
      color: #999
    .item--price
      text-align: right
      font-weight: 600
</style>
