<template>
  <div class="hello">
    <form-create v-model="fApi" :rule="rule" :value.sync="value" :option="option"
                 @prefix1-change="prefix1Change" @prefix2-change="prefix2Change"
    ></form-create>
    <ElButton type="primary" plain @click="submit">提交</ElButton>
    <ElButton aligen="center" plain @click="reset">重置</ElButton>
  </div>
</template>

<script>
import {
  basicFormRule,
  configFormRule,
  cusFormRule,
  formArrayRule,
  formValidateRule
} from '@/components/DemoForm1/formRule.ts'

export default {
  name: 'DemoForm1',
  props: {
    msg: String
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      // 实例对象
      fApi: {},
      option:{
        submitBtn: false,
        resetBtn: false,
        form: {
          labelWidth: '180px'
        }
      },
      // 表单数据
      value: {},
      // 表单生成规则
      rule: [
        ...basicFormRule,
        ...configFormRule,
        {
          type:'input',
          field:'event',
          title:'change 事件',
          emit:['change', 'blur'],
          emitPrefix:'prefix1'
        },
        {
          type:'input',
          field:'inject',
          title:'change 事件',
          emit: [{
            name: 'change',
            inject: ['自定义参数,数据类型不限']
          }],
          emitPrefix:'prefix2',
        },
        ...formValidateRule,
        ...formArrayRule,
        ...cusFormRule,
      ]
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    prefix1Change(){
      alert(`change!![${this.fApi.getValue('event')}]`)
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    prefix2Change(inject){
      alert(`change: ${inject.inject}[${inject.$f.getValue('inject')}]`)
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    submit(){
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.fApi.submit((formData, fApi)=>{
        alert(JSON.stringify(formData))
      })
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    reset(){
      this.fApi.resetFields()
      setTimeout(() => {
        this.fApi.clearValidateState()
      }, 30)
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
</style>
