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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SearchActions({ append = [], context  } = {}) {
  return [
    {
      type:'el-button',
      props: {
        type: 'primary'
      },
      children:[{
        type:'i',
        class:'el-icon-search'
      },' search'],
      on:{
        click:()=>{
          context.$emit('search')
        }
      }
    },
    {
      type:'el-button',
      props: {
      },
      children:[{
        type:'i',
        class:'el-icon-refresh'
      },' reset'],
      on:{
        click:()=>{
          context.fApi.resetFields()
          context.$emit('reset')
        }
      }
    },
    ...append
  ]
}

export default {
  name: 'CusGridSearch',
  props: {
    rules: {
      type: Array,
      default: () => {
        return []
      }
    },
    appendRules: {
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
        submitBtn: false,
        resetBtn: false,
        form: {
          inline: true
        },
        wrap: {
          labelWidth: 'auto',
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
        ...SearchActions({ append: this.appendRules, context: this})
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
