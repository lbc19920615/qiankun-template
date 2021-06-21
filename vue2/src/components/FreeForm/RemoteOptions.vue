<template>
  <el-select
    :value="innerVal"
    v-bind="$attrs"
    :clearable="clearable"
    @change="onChange"
  >
    <el-option
      v-for="(option, optionIndex) in options"
      :key="optionIndex"
      :label="option[labelKey]"
      :value="option[valueKey]"
    />
  </el-select>
</template>

<script>
import to from 'await-to-js'

export default {
  name: 'RemoteOptions',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null,
    clearable: Boolean,
    // eslint-disable-next-line vue/require-default-prop
    requestMethod: Function,
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    autoReq: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      innerVal: undefined,
      options: []
    }
  },
  watch: {
    value() {
      this.innerVal = this.value
    }
  },
  mounted() {
    this.innerVal = this.value
    if (this.autoReq) {
      this.remoteMethod()
    }
  },
  methods: {
    fetch() {
      this.innerVal = null
      this.remoteMethod()
    },
    async remoteMethod() {
      // eslint-disable-next-line no-unused-vars
      const [err, ret] = await to(this.requestMethod())
      console.log('myRequestMethod', ret)
      this.options = ret
    },
    onChange(v) {
      this.$emit('input', v)
      const selectedItem = this.options.find(item => item.value === v)
      this.$emit('select', selectedItem)
    }
  }
}
</script>

<style scoped>

</style>
