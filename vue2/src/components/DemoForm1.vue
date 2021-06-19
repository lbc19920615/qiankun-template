<template>
  <div class="hello">
    <form-create v-model="fApi" :rule="rule" :option="option" :value.sync="value"></form-create>
  </div>
</template>

<script>
export default {
  name: 'DemoForm1',
  props: {
    msg: String
  },
  data () {
    return {
      // 实例对象
      fApi: {},
      // 表单数据
      value: {},
      // 表单生成规则
      rule: [
        {
          type: 'input',
          field: 'goods_name',
          title: '商品名称'
        },
        {
          type: 'datePicker',
          field: 'created_at',
          title: '创建时间'
        }
      ],
      // 组件参数配置
      option: {
        // 表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData))
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
