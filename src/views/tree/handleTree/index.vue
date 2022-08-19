<template>
    <div slot="width: 200px;">
        <el-tree
            class="tree"
            :data="data"
            :props="defaultProps"
            :expand-on-click-node="false"
            style="width: 260px;">
            <div slot-scope="{node, data}" class="icon-box"  style="cursor: auto!important;">
                <div @click="handleNodeClick(data)" style="cursor: pointer;">
                     {{ data.label }}
                </div>
                <div style="cursor: pointer;">
                    <i class="el-icon-plus icon" @click="handleAdd(data)" v-if="data.children"></i>
                    <i class="el-icon-edit icon" @click="handleEdit(data)"></i>
                    <i class="el-icon-delete icon" @click="handleDelete(data)"></i>
                </div>
            </div>
        </el-tree>
    </div>
</template>

<script>
  export default {
    data() {
      return {
         defaultProps: {
            children: 'children',
            label: 'label'
        },
        data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1'
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
      };
    },
    methods: {
        handleNodeClick(node) {
            console.log(node)
        },
        handleAdd(data) {
            console.log(data)
        },
         handleEdit(data) {
            console.log(data)
        },
         handleDelete(data) {
            console.log(data)
        }
    }
  };
</script>

<style lang="less" scoped>

.tree {
    cursor: alias;
    .icon-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 5px;
    .icon {
        display: inline-block;
        padding: 2px;
    }
}
}
</style>