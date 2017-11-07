<template>
<div class="markdown-body">
  <div v-html="compiledMarkdown"></div>
</div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  props: {
    source: {
      type: String
    }
  },
  data () {
    return {
      markdown: this.source
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdown, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.markdown = e.target.value
    }, 300)
  }
}
</script>
