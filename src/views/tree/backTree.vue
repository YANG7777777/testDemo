<template>
  <div>
    <el-button type="primary" @click="getTreeData">选择数据</el-button>
    <el-row>
      <el-col :span="24">选中的数据{{choseData}}</el-col>
    </el-row>
    <dialogTreeBack
      :dialogVisible="dialogVisible"
      :closeDialog="closeDialog"
      :treeData="treeData"
      :setChose="setChose"
      :backChose="backChose"
    ></dialogTreeBack>
  </div>
</template>

<script>

import dialogTreeBack from '@/components/dialogTreeBack'

export default {
  name: 'backTree',
  data () {
    return {
      dialogVisible: false,
      treeData: [],
      choseData: [],
      backChose: []
    }
  },
  components: {
    dialogTreeBack
  },
  methods: {
    closeDialog () {
      this.dialogVisible = false
    },
    getTreeData () {
      this.dialogVisible = true
      this.treeData = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2',
          children: [{
            id: 11,
            label: '三级 3-2-1'
          }, {
            id: 12,
            label: '三级 3-2-2'
          }, {
            id: 13,
            label: '三级 3-2-3'
          }]
        }]
      }]
      this.backChose = this.choseData.map(c => c.id) // 遍历获取选中的id传递给子组件
    },
    setChose (v) {
      this.choseData = v
      this.closeDialog()
    }
  }
}
</script>

<style>
</style>
