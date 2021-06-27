<template>
  <el-button
    v-bind="$attrs"
    :disabled="innerDisabled"
    @click="submit"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    timeout: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      timer: null,
      innerDisabled: false,
      autoUnLock: true
    }
  },
  methods: {
    submit(e) {
      const self = this
      const context = {
        toggleLock(v = false) {
          self.innerDisabled = v
        },
        setAutoUnLock(v) {
          self.autoUnLock = v
        }
      }
      this.$emit('submit', {
        e,
        context
      })
      this.innerDisabled = true
      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        this.timer = null
        this.innerDisabled = false
        if (self.autoUnLock) {
          context.toggleLock(false)
        }
      }, self.timeout)
    }
  }
}
</script>
