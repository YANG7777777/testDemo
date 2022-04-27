<template>
  <div class="dashboard">
    <div>
      <el-button type="primary" @click="handleCommit" v-preventReClick>防止多次点击</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {}
  },
  methods: {
    handleCommit() {
      console.log(123)
    }
  },
  // 局部防止el-button重复点击
  directives: {
    preventReClick: {
      // 指令的定义
      inserted(el, binding) {
        el.addEventListener('click', () => {
          if (!el.disabled) {
            el.disabled = true
            setTimeout(() => {
              el.disabled = false
            }, binding.value || 2000)
          }
        })
      }
    }
  },

}
</script>

<style>
</style>
