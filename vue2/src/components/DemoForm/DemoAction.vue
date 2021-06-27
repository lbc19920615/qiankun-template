<template>
  <el-row type="flex">
    <el-button size='mini' type='primary' icon="el-icon-edit" @click="edit"
    ></el-button>
    <my-popop-confirm title="确定删除吗" @confirm="del">
      <el-button slot='reference' size='mini' type='danger' icon="el-icon-delete"></el-button>
    </my-popop-confirm>
  </el-row>
</template>

<script>

const EVENT_NAMES = ['search', 'add', 'edit', 'del', 'import', 'export']

const methods = {}
// const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

EVENT_NAMES.forEach(name => {
  methods[name] = function() {
    this.$emit(name, this.row)
  }
})


export default {
  name: 'DemoAction',
  props: ['row', 'column'],
  methods: {
    ...methods
  }
}
</script>
