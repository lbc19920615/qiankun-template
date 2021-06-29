<template>
  <div id="app">
    <div id="nav">
      <template v-for="(routeLink, routeLinkIndex) in routesLinks">
        <router-link :to="routeLink.path" :key="routeLinkIndex">{{routeLink.name}}</router-link>
        <template v-if="routeLinkIndex < routesLinks.length - 1">|</template>
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {ref} from "@vue/composition-api";
import routes from "@/router/routes";

export default {
  setup() {
    let routesLinks = ref(routes)
    return {
      routesLinks
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
