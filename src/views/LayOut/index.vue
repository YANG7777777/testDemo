<template>
  <div class="system">
    <el-container style="margin: 0;padding:0;">
      <el-header style="background-color: #304156;">
        <headerItem></headerItem>
      </el-header>
      <el-container style="height: 650px">
        <el-aside
          width="201px"
          style="background-color:#304156"
        >
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#304156"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handeleSelect"
            :unique-opened="true"
            :default-active="currentPath"
          >
            <sliderbar-item :tree="routes"></sliderbar-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import sliderbarItem from '@/components/sliderbar-item'
import headerItem from '@/components/headerItem'
export default {
  name: 'ManagerialSystem',
  data () {
    return {
      routes: [], // 路由表
      currentPath: ''
    }
  },
  components: {
    sliderbarItem,
    headerItem
  },
  methods: {
    handeleSelect (key, keyPath) {
      const path = key === 'dashboard' ? '/' + key : keyPath.join('/')
      this.$router.push(path)
      // 根据相应的路由跳转设置导航高亮
      this.currentPath = this.getPath(path)
    },
    getRoutes () {
      // 获取所有路由表
      this.routes = this.$router.options.routes
    },
    getPath (str) {
      return str.substring(str.lastIndexOf('/') + 1)
    }
  },
  created () {
    this.getRoutes()
  },
  mounted () {
    // 页面刷新根据路由让导航显示高亮
    this.currentPath = this.getPath(this.$route.path)
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* .el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
} */

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>
