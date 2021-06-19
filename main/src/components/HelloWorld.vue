<template>
  <div class="hello">
    <div>
      <a href="/vue3">vue3子应用</a>
    </div>
    <div>
      <a href="/vue2">vue2子应用</a>
    </div>
    <div>
      <a href="/purehtml">purehtml子应用</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  width: 50%;
}
a {
  color: #42b983;
}
</style>
