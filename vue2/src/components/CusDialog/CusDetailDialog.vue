<style lang="scss">
$tag: "cus-detail-dialog";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <el-dialog
    v-bind="$attrs"
    :visible.sync="innerVisible"
    :close-on-click-modal="false"
    @closed="onDialogClose"
  >
    <template v-if="innerVisible">
      <cus-dialog-render v-if="render" :render="render"></cus-dialog-render>
      <slot v-else></slot>
    </template>
  </el-dialog>
</template>

<script>
import {cusModalVisibleMixin} from '@/components/CusDialog/mixins/cusModalMixin'
import CusDialogRender from '@/components/CusDialog/CusDialogRender'

export default {
  name: 'CusDetailDialog',
  components: {CusDialogRender},
  mixins: [
    cusModalVisibleMixin
  ],
  props: {
    // eslint-disable-next-line vue/require-default-prop
    render: Function
  },
  data() {
    return {}
  }
}
</script>
