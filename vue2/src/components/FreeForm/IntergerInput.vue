<style lang="scss">
$tag: "interger-input";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <el-input v-model.number="famount"
            @keyup.native="keyUp"
            @keydown.native="keyDown"
            @input="onInput"></el-input>
</template>

<script>
const IntergerRegexp = /[^.\d]/g

function checkIsPureNumber(val) {
  if (typeof val === 'number') {
    return true
  }
  if (typeof val === 'undefined') {
    return false
  }
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler(newVal, oldVal) {
        // console.log('obj.a changed', newVal, this.locked);
        if (!this.locked) {
          if (checkIsPureNumber(newVal)) {
            this.genInput(newVal)
            return false
          }
          if (newVal === '' || typeof newVal === 'undefined') {
            this.genInput(undefined)
            return false
          }
          if (typeof newVal === 'string') {
            this.genInput(this.parse(newVal))
            return false
          }
        }
      },
      immediate: true,
    }
  },
  methods: {
    onInput() {
      console.log(this.famount, typeof this.famount)
      if (this.famount === '') {
        this.emitInput(undefined)
      } else {
        let isInt = checkIsPureNumber(this.famount)
        if (isInt) {
          this.emitInput( this.famount)
        }
      }
    },
    genInput(newVal) {
      this.famount = newVal
    },
    keyDown() {
      // console.log(e.target)
    },
    keyUp(e) {
      // console.log('e.target.value', e.target.value, typeof e.target.value)
      this.famount = this.parse(e.target.value)
      // e.target.value = this.parse(e.target.value)
      // this.emitInput(this.famount)
    },
    parse(val) {
      let newVal
      if (val === '') {
        return undefined
      }
      if (typeof val === 'string') {
        const v = val.replace(IntergerRegexp, '')
        newVal = v.replace('.', '')
      }
      if (newVal === '') {
        return undefined
      }
      console.log('newVal', newVal)
      return parseFloat(newVal)
    },
    emitInput(newVal) {
      console.log('this.locked', this.locked, newVal)
      if (!this.locked) {
        this.locked = true
        this.$emit('input', newVal)
        this.$nextTick(() => {
          this.locked = false
        })
      }
    }
  }
}
</script>
