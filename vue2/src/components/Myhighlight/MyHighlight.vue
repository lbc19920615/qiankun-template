<style lang="scss">
$tag: "my-highlight";
$sel: ".my-highlight";

#{$sel} {
}
</style>

<template>
  <pre v-highlightjs class="my-highlight">
<code
  class="hljs"
  :class="computeCls"
  v-html="computeContent"
></code>
</pre>
</template>

<script>
export default {
  name: 'MyHighlight',
  props: {
    language: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    computeCls() {
      return [
        'language-' + this.language
      ]
    },
    computeContent() {
      return this.content
    }
  }
}
</script>
