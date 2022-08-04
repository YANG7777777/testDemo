<template>
    <div slot="width: 200px;">
        <el-tree
            :props="props"
            :load="loadNode"
            node-key="id"
            @node-click="handleNodeClick"
            expand-on-click-node
            :default-expanded-keys="[9]"
            lazy
            style="width: 200px;">
        </el-tree>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        props: {
          label: 'name', 
          children: 'children',
          isLeaf: 'isChildren' //
        },
      };
    },
    methods: {
      loadNode(node, resolve) { // 异步懒加载不需要绑定data
      console.log('node', node)
        if (node.level === 0) { // 顶级节点
          return resolve([{ name: 'region', id: 9 }]);
        }
        if (node.level >= 1) {
          const data = [{
            name: 'leaf',
            id: 1,
            isChildren: false 
            },
            {
            id: 2,
            name: 'zone',
            isChildren: true
          }]
          resolve(data);
        }
      },
       handleNodeClick(data) {
        console.log('23232', data)
    }
    }
  };
</script>

<style lang="less" scoped>

</style>