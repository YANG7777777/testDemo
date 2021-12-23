<template>
  <div>
    <div style="background-color: #f0f0f0">
      <p>name 不带参数</p>
      <router-link :to="{name:'targetJump'}">{{'router-link: name'}}</router-link>
    </div>

    <div>
      <p>name 带参数</p>
      <router-link :to="{name:'targetJump', params: {id:1}}">{{'router-link: name:params'}}</router-link>
      <div>
        注意：
        <br />路由配置 path: "/home/:id" 或者 path: "/home:id"
        <br />不配置path ,第一次可请求,刷新页面id会消失
        <br />配置path,刷新页面id会保留
      </div>
      <router-link :to="{name:'targetJump', query: {id:2}}">{{'router-link: name:query'}}</router-link>
    </div>

    <div style="background-color: #f0f0f0">
      <p>path 不带参数</p>
      <router-link :to="{path:'targetJump'}">{{'router-link: path'}}</router-link>
    </div>

    <div>
      <p>path 带参数</p>
      <router-link :to="{path:'targetJump', query:{id:3}}">{{'router-link: path:query'}}</router-link>
      <div>
        注意：
        <br />无需配置 path: "/home/:id" 或者 path: "/home:id"刷新页面id不会消失
        <br />path跳转 只能 用query传参
      </div>
    </div>

    <div style="background-color: #f0f0f0">
      <p>router.push(编程式路由)</p>
      <el-button type="primary" @click="one">one</el-button>
      <el-button type="primary" @click="two">two</el-button>
      <el-button type="primary" @click="three">three</el-button>
      <el-button type="primary" @click="four">four</el-button>
    </div>

    <div>
      this.$router.replace() (用法同上,push)
      <br />this.$router.go(n) 向前或者向后跳转n个页面，n可为正整数或负整数
      <br />this.$router.push
      <br />跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面
      <br />this.$router.replace()
      <br />跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接了前页面)
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jump',
  data () {
    return {}
  },
  mounted () { },
  methods: {
    one () {
      this.$router.push('targetJump')
    },
    two () {
      this.$router.push({ path: 'targetJump' })
    },
    three () {
      // 此跳转方式传参  也需路由配置path: "/home/:id" 或者 path: "/home:id"
      // 否则页面刷新 参数会丢失
      this.$router.push({ name: 'targetJump', params: { id: '123' } })
    },
    four () {
      // 此方式跳转不需要多余配置  页面刷新参数不会丢失
      this.$router.push({ path: 'targetJump', query: { id: 'private' } })
    }
  }
}
</script>

<style>
</style>
