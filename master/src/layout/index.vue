<template>
  <div class="panel" @click="doOnWeb" @keydown="doOnWeb">
    <top-header class="panel-heder"></top-header>
    <div class="panel-main">
      <!-- 根据当前路由地址判断是子项目页面，还是主项目页面进行选择 -->
      <router-view v-if="showView" />
      <div v-else id="root-view"></div>
    </div>
    <main-menu v-show="showMenu" ref="mainMenu" class="main-menu"></main-menu>
    <main-login ref="mainLogin"></main-login>
  </div>
</template>

<script>
import TopHeader from '@/layout/components/Header'
import MainMenu from '@/layout/components/Menu'
import MainLogin from '@/layout/components/MainLogin'
// 导入乾坤函数
import { registerMicroApps, start } from 'qiankun'
import { request } from '@/utils/request'
import {alUtils} from '@/module/al'

export default {
  name: 'Layout',
  components: {
    TopHeader,
    MainMenu,
    MainLogin
  },
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    showView: function() {
      return this.$route.path === '/home'
    }
  },
  mounted() {
    // 定义传入子应用的数据，方法和主键
    const msg = {
      data: this.$store.getters,
      fns: [],
      prototype: [
        { name: '$axios', value: request },
        { name: '$alUtils', value: alUtils }
      ]
    }
    // 注册子应用,可以根据登录后的权限加载对应的子项目
    registerMicroApps(
      [
        {
          name: 'module-app1',
          entry: '//localhost:9003',
          container: '#root-view',
          activeRule: '/app1',
          props: msg
        }
      ],
      {
        beforeLoad: [
          app => {
            console.log('before load', app)
          }
        ],
        beforeMount: [
          app => {
            console.log('before mount', app)
          }
        ],
        afterUnmount: [
          app => {
            console.log('after unload', app)
          }
        ]
      }
    )

    // 启动微服务
    start({ prefetch: true })
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
      this.$refs['mainMenu'].showTwoMenu = false
    },
    doOnWeb() {
      this.$refs.mainLogin.doOnWeb()
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .panel-heder {
    height: 50px;
    line-height: 50px;
  }
  .panel-main {
    width: 100%;
    height: calc(100% - 50px);
    overflow: hidden;
    display: flex;
    #root-view {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      ::v-deep > div {
        height: 100%;
      }
    }
  }
  .main-menu {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 51px;
    bottom: 0px;
  }
}
</style>
