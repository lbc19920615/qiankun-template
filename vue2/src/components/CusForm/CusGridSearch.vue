<style lang="scss">
$tag: "cus-grid-search";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <div class="cus-grid-search">
    <form-create
      v-if="rule"
      v-model="fApi"
      :rule="rule"
      :value.sync="value"
      :option="option"
    >
    </form-create>
  </div>
</template>

<script>
import {emitter} from "@/plugins/mitt";

export default {
  name: 'CusGridSearch',
  props: {
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    prefix: String
  },
  data () {
    return {
      // 实例对象
      fApi: {},
      option:{
        submitBtn: true,
        resetBtn: true,
        form: {
          // labelWidth: '180px',
          inline: true
        },
        row: {
          gutter: 0
        }
      },
      // 表单数据
      value: {},
      // 表单生成规则
      rule: [
        ...this.rules,
      ]
    }
  },
  watch: {
    value(newVal, oldVal) {
      emitter.emit(`${this.prefix}:search-change`, newVal, oldVal)
    }
  }
}
</script>
