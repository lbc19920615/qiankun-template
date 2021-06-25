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
import {useTableGridSearchEvent} from "@/components/CusForm/hooks";

export default {
  name: 'CusGridWrap',
  props: {
    prefix: String
  },
  data () {
    return {}
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    let [ onSearchQueryChange ] = useTableGridSearchEvent(props.prefix, ctx)
    return {
      onSearchQueryChange
    }
  }
}
</script>
