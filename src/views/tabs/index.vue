<template>
  <div>
    <div>
      <el-button @click="showOne">表一</el-button>
      <el-button @click="showTwo">表二</el-button>
    </div>
    <div style="background-color: #ccc;height: 100px;width: 100px;">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
import tabOne from '@/components/tabs/tabOne'
import tabTwo from '@/components/tabs/tabTwo'
export default {
  name: 'tabs',
  components: {
    tabOne,
    tabTwo
  },
  data () {
    return {
      currentView: tabOne
    }
  },
  methods: {
    showOne () {
      this.currentView = tabOne
    },
    showTwo () {
      this.currentView = tabTwo
    }
  }
}
</script>

<style scope>
</style>
