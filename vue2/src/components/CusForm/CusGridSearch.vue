<style lang="scss">
$tag: "cus-grid-search";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="cus-grid-search">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CusGridSearch',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {}
  }
}
</script>
