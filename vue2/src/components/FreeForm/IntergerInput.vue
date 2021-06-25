<style lang="scss">
$tag: "interger-input";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <el-input
    v-model="famount"
    class="interger-input"
    v-bind="$attrs"
    @keyup.native="number"
  ></el-input>
</template>

<script>
const IntergerRegexp = /[^.\d]/g

function checkIsPureNumber(val) {
  if (!val.indexOf) {
    return false
  }
  return !IntergerRegexp.test(val) && (val.indexOf('.') < 0)
}

export default {
  name: 'IntergerInput',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      famount: undefined,
      locked: false
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        // console.log('obj.a changed', newVal, this.locked);
        if (!this.locked) {
          this.genInput(newVal)
        }
      },
      immediate: true,
    }
  },
  methods: {
    genInput(newVal) {
      this.famount = this.parse(newVal)
    },
    number(e) {
      // console.log('e.target.value', e.target.value, typeof e.target.value)
      this.famount = this.parse(e.target.value)
      this.emitInput(this.famount)
    },
    parse(val) {
      let newVal
      if (typeof val === 'string') {
        const v = val.replace(IntergerRegexp, '')
        newVal = v.replace('.', '')
      }
      return newVal
    },
    emitInput(newVal) {
      if (!this.locked) {
        this.locked = true
        if (!newVal) {
          this.$emit('input', undefined)
          this.$nextTick(() => {
            this.locked = false
          })
          return false
        }
        if (checkIsPureNumber(newVal)) {
          this.$emit('input', parseInt(newVal))
          this.$nextTick(() => {
            this.locked = false
          })
          return false
        }
        this.$nextTick(() => {
          this.locked = false
        })
      }
    }
  }
}
</script>
