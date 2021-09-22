<template>
  <div class="tree">
    递归渲染列表
    <el-tree
      :data="tree"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>

  </div>
</template>

<script>

export default {
  name: 'Tree',
  data () {
    return {
      treeData: [
        {
          id: 0,
          name: 'tools',
          pid: 12
        },
        {
          id: 1,
          name: '办公管理',
          pid: 0
        },
        {
          id: 2,
          name: '请假申请',
          pid: 1
        },
        {
          id: 3,
          name: '出差申请',
          pid: 1
        },
        {
          id: 4,
          name: '请假记录',
          pid: 2
        },
        {
          id: 5,
          name: '系统设置',
          pid: 0
        },
        {
          id: 6,
          name: '权限管理',
          pid: 5
        },
        {
          id: 7,
          name: '用户角色',
          pid: 6
        },
        {
          id: 8,
          name: '菜单设置',
          pid: 6
        }],
      tree: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    toTree (data) {
      // 删除所有的children 防止多次调用
      data.forEach(function (item) {
        delete item.children
      })
      // 将数据存储为以id为KEY的map索引数据列
      var map = {}
      data.forEach(function (item) {
        map[item.id] = item
      })
      // console.log(map)
      var val = []
      data.forEach(function (item) {
        // 以当前的遍历项目 去找pid
        var parent = map[item.pid]
        if (parent) { // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
          (parent.children || (parent.children = [])).push(item)
        } else { // 如果没有在map中找到对应的索引ID,那么直接把当前的item添加到val结果集中，作为顶级
          val.push(item)
        }
      })
      this.tree = val
      // console.log(val)
      return val
    },
    handleNodeClick (data) {
      // console.log(data)
    }
  },
  mounted () {
    this.toTree(this.treeData)
  }

}
</script>

<style>
</style>
