<template>
  <div class="home">
    <DemoForm1 msg="Welcome to Your Vue2 App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DemoForm1 from '@/components/DemoForm1.vue'

export default {
  name: 'Home',
  components: {
    DemoForm1
  }
}
</script>
