<style lang="scss">
$tag: "cus-grid-wrap";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="cus-grid-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CusGridWrap',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {}
  }
}
</script>
