<template>
  <div class="system">
    <el-container style="margin: 0;padding:0;">
      <el-header style="background-color:#304156">Header</el-header>
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
            :default-active="this.currentPath"
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

import sliderbarItem from '@/components/sliderbar-item'
export default {
  name: 'ManagerialSystem',
  data () {
    return {
      routes: [], // 路由表
      currentPath: ''
    }
  },
  components: {
    sliderbarItem
  },
  methods: {
    handeleSelect (key, keyPath) {
      console.log(this.$route.path)
      const path = key === 'dashboard' ? '/' + key : keyPath.join('/')
      this.currentPath = path
      this.$router.push(path)
    },
    getRoutes () {
      // 获取所有路由表
      this.routes = this.$router.options.routes
    }
  },
  created () {
    this.getRoutes()
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
</style>
