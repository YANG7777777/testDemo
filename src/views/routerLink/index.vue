<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'routerReLink',
  data () {
    return {}
  },
  mounted () {
    const { href } = this.$router.resolve({
      path: 'targetView', // 跳转路径
      query: {
        // 需要传的参数
      }
    })
    window.open(href, '_blank')
  }
}
</script>

<style>
</style>
