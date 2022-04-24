<template>
    <div class="main">
        <div class="treeOne">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <el-tooltip :disabled="showTitle" effect="dark" :content="tooltipTitle" placement="top"
                    slot-scope="{ node, data }">
                    <span class="span-ellipsis" @mouseover="onShowNameTipsMouseenter">{{ node.label }}</span>
                </el-tooltip>
            </el-tree>
        </div>
        <div class="treeTwo">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                <span class="tree_node" slot-scope="{ node }">
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
        <div class="treeFour">
            <el-tree :data="data" :props="defaultProps"></el-tree>
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
            },
            showTitle: false
        };
    },

    mounted() {

    },

    methods: {
        onShowNameTipsMouseenter(e) {
            console.log(123)
            var target = e.target;
            let textLength = target.clientWidth;
            let containerLength = target.scrollWidth;
            if (textLength < containerLength) {
                this.tooltipTitle = e.target.innerText;
                this.showTitle = false;
            } else {
                this.showTitle = true;
            }
        }
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

            .tree_node {
                display: block;
                overflow-x: scroll;
            }

            .tree_node::-webkit-scrollbar {
                height: 3px;
            }

            .tree_node::-webkit-scrollbar-thumb {
                border-radius: 10px;
                // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: rgba(0, 0, 0, 0.2);
            }

            .tree_node .innerbox::-webkit-scrollbar-track {
                // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 0;
                background: rgba(0, 0, 0, 0.1);

            }
        }
    }

    .treeThree {
        height: 600px;
        width: 200px;
        margin: 20px;

        /deep/.el-tree {
            overflow: scroll;
            height: 100%;

            .el-tree-node {
                display: inline-block;
                min-width: 100%;
            }
        }

        .el-tree::-webkit-scrollbar {
            height: 5px;
        }

        .el-tree::-webkit-scrollbar-thumb {
            border-radius: 10px;
            // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: rgba(0, 0, 0, 0.2);
        }

        .el-tree .innerbox::-webkit-scrollbar-track {
            // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 0;
            background: rgba(0, 0, 0, 0.1);

        }
    }

    .treeFour {
        height: 600px;
        width: 200px;
        margin: 20px;
        background-color: white;
        ::v-deep .el-tree-node {
            white-space: normal;
            padding: 0 2px;

            .el-tree-node__content {
                height: 100%;
                align-items: start;
            }
        }
    }
}
</style>