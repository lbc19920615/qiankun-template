<style lang="scss">
$tag: "com-page";
$sel: ".com-page";

#{$sel} {
}
</style>

<template>
  <div class="com-page"><slot></slot></div>
</template>

<script>
export default {
  name: 'ComPage',
  data () {
    return {}
  }
}
</script>
