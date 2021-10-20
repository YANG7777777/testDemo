<template>
  <div class="radioTree">
      <p>单选树形控件</p>
      <el-tree
            ref="tree"
            class="tree"
            :node-key="'id'"
            :empty-text="' '"
            :data="treeData"
            show-checkbox
            check-strictly
            :expand-on-click-node="false"
            @check-change="selectTreeNode"
          >
            <span slot-scope="{ node }" class="custom-tree-node">
              <span class="title">{{ node.label }}</span>
            </span>
          </el-tree>

  </div>
</template>

<script>
export default {
  name: 'radioTree',
  data () {
    return {
      treeData: [{
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
    }
  },
  methods: {
    selectTreeNode (data, checked, tree) {
      if (checked) {
        this.currentNodeData = data
        this.$refs.tree.setCheckedNodes([data])
      }
    }
  }

}
</script>

<style>

</style>
