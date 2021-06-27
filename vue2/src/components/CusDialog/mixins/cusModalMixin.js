export const cusModalVisibleMixin = {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerVisible: false
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        this.innerVisible = newVal
      }
    }
  },
  methods: {
    onDialogClose() {
      this.$emit('closed')
      this.$emit('update:visible', false)
    }
  }
  // computed: {
  //   innerVisible: {
  //     get: function() {
  //       return this.visible
  //     },
  //     set: function(val) {
  //       this.$emit('update:visible', val)
  //     }
  //   }
  // }
}
