<template>
  <section>
    <el-button @click='login'>登录</el-button>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    function login () {
      store.dispatch('user/login', {
        username: 'admin',
        password: 'admin'
      }).then(() => {
        location.reload()
      })
    }
    return {
      login
    }
  }
})
</script>
