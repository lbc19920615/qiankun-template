import formCreate from '@form-create/element-ui'

formCreate.component('inputBtn', {
  data: function () {
    return {
      num: this.value,
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(h){
    return (
      <el-button disabled={this.disabled}
                 long={true}
                 on-click={() => {
                  this.onClick()
                 }}
      >计数器{this.num}</el-button>
    )
  },
  props:{
    //预定义
    disabled:Boolean,
    value:Number,
  },
  watch:{
    value(n){
      //同步 value 的值
      this.num = n
    }
  },
  methods: {
    onClick: function () {
      this.num++
      //更新组件内部的值
      this.$emit('input',this.num)
    },
  },
})
