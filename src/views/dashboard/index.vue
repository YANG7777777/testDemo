<template>
  <div class="dashboard" :style="{'--bgColor' : changeFlag ? 'pink' : 'blue'}">
    <div>
      <el-button type="primary" @click="handleCommit" v-preventReClick>防止多次点击</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data() {
    return {
      changeFlag: false
    }
  },
  methods: {
    handleCommit() {
      this.changeFlag = !this.changeFlag
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
  mounted() {
    let cost = [[5,4],[3,6],[1,8],[3,9]]
    console.log(cost)
    // 有多少种组合方式
    for(var i = 0; i < cost.length; i ++) {
      console.log(cost[i])
    }
    
  }

}
</script>

<style>
.dashboard {
   background-color: var(--bgColor);
}
</style>
