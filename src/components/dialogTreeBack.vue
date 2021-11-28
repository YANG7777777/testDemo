<template>
  <div>
    <el-dialog title :visible.sync="dialogVisible" width="width" :before-close="dialogBeforeClose">
      <div>
        <el-tree
          ref="tree"
          :props="defaultProps"
          :data="treeData"
          node-key="id"
          show-checkbox
          :default-checked-keys="backChose"
        ></el-tree>
      </div>
      <div slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="handleTreeData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialogTreeBack',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    closeDialog: {
      type: Function,
      default: () => { }
    },
    treeData: {
      type: Array
    },
    setChose: {
      type: Function,
      default: () => { }
    },
    backChose: {
      type: Array
    }

  },
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    cancel () {
      this.closeDialog()
    },
    handleTreeData () { // 确定按钮
      // 选中的数据
      const data = this.$refs.tree.getCheckedNodes()
      this.setChose(data)
    },
    dialogBeforeClose () {
      this.cancel()
    }
  }
}
</script>

<style>
</style>
