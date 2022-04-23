<template>
    <div class="main">
        <div class="treeOne">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <span class="span-ellipsis" slot-scope="{ node }">
                    <span :title="node.label">{{ node.label }}</span>
                </span>
            </el-tree>
        </div>
        <div class="treeTwo">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <span style="display:block; overflow-x: auto;" slot-scope="{ node }">
                    <span>{{ node.label }}</span>
                </span>
            </el-tree>
        </div>
        <div class="treeThree">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <span slot-scope="{ node }">
                    <span>{{ node.label }}</span>
                </span>
            </el-tree>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestdemoIndex',

    data() {
        return {
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级:用清晰的层级结构展示信息，可展开或折叠。'
                    }]
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
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.main {
    display: flex;

    .treeOne {
        height: 600px;
        width: 200px;
        margin: 20px;
        background-color: white;
        overflow: auto;

        .el-tree {
            height: 100%;
            background-color: paleturquoise;
            display: block;

            .span-ellipsis {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
            }
        }
    }

    .treeTwo {
        height: 600px;
        width: 200px;
        margin: 20px;
        background-color: white;

        /deep/.el-tree {
            width: 100%;
            height: 100%;

            .el-tree-node {
                overflow-x: scroll;
                display: block;
                min-width: 100%;
            }
        }
    }

    .treeThree {
        height: 600px;
        width: 200px;
        margin: 20px;

        /deep/.el-tree {

            width: 100%;
            overflow: scroll;
            height: 100%;
            .el-tree-node {

                display: inline-block;
                min-width: 100%;
            }
        }
    }
}
</style>