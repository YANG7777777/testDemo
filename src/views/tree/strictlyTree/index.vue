<template>
    <div style="display: flex;">
        <div style="flex: 1; padding: 0 50px">
            <el-tree
                ref="tree"
                :check-strictly="true"
                @check="handleCheck"
                :data="data"
                show-checkbox
                node-key="id"
                :props="defaultProps"
                :render-content="rendContent"
                :default-checked-keys="[1,4,9]"
                :default-expanded-keys="[1]"
            >
            </el-tree>
        </div>
        <div style="flex: 1; padding: 0 50px">
            <el-tree
                ref="lazyRef"
                :props="props"
                :load="loadNode"
                lazy
                node-key="id"
                show-checkbox
                @check-change="handleCheckChange"
            >
            </el-tree>
        </div>
    </div>
</template>

<script>
export default {
    name: "TreeDemo",
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: "一级 1",
                    disabled: false,
                    children: [
                        {
                            id: 4,
                            pid: 1,
                            label: "二级 1-1",
                            disabled: false,
                            children: [
                                {
                                    id: 9,
                                    pid: 4,
                                    label: "三级 1-1-1",
                                    disabled: false,
                                    children: [
                                        {
                                            id: 94,
                                            pid: 9,
                                            label:"四级 1-1-1",
                                            disabled: false,
                                        },
                                         {
                                            id: 95,
                                            pid: 9,
                                            label:"四级 1-1-2",
                                            disabled: false,
                                        }
                                    ]
                                },
                                {
                                    id: 10,
                                    pid: 4,
                                    label: "三级 1-1-2",
                                    disabled: false,
                                }
                            ]
                        },
                         {
                            id: 42,
                            pid: 1,
                            label: "二级 1-2",
                            disabled: false,
                            children: [
                                {
                                    id: 92,
                                    pid: 42,
                                    label: "三级 1-2-1",
                                    disabled: false,
                                },
                                {
                                    id: 102,
                                    pid: 42,
                                    label: "三级 1-2-2",
                                    disabled: false,
                                }
                            ]
                        }
                    ]
                },
            ],
            defaultProps: {
                children: "children",
                label: "label"
            },
            props: {
                label: "name",
                children: "zones"
            },
            hightdata: [1,4,9], // 高亮显示的id数组
        };
    },
    methods: {
        // 设置高亮的 效果
        rendContent(h, { node, data }) {
             console.log('rendContent',node);
            
            //  判断与树形结构数据中的值一样的就是需要高亮的  && 当前不是叶子节点 && 当前节点下有选中节点
            if (this.hightdata.indexOf(data.id) !== -1 && !node.isLeaf && this.isChildChecked(node.childNodes)) {
                return <span class="hightli">{data.label}</span>;
            } else {
                return <span>{data.label}</span>;
            }
        },
        // 反显时当前节点下 有没有选中的节点
        isChildChecked(childNodes) {
            let hasChildChecked = childNodes.some(item => {
                return item.checked
            });
            return hasChildChecked
        },
        handleCheck(data, { checkedKeys }) {
            // 这里可以设置父节点高亮  当前节点是否是
            console.log('checked-change', data)
            if (checkedKeys.includes(data.id)) {
                // 选中
                console.log('选中')
                let node = this.$refs.tree.getNode(data.id); // getNode(node-key)
                this.selectChildren(data, true); // 选中子节点
                this.parentNodesChange(node); // 选中父节点
            } else {
                console.log('取消')
                let node = this.$refs.tree.getNode(data.id); // getNode(node-key)
                console.log('11111', node)
                this.cancelDataStyle(node, 1) // 1: 表示当前操作取消的节点
                this.selectChildren(data, false); // 取消子节点
            }
        },
        selectChildren(data, checked) {
            data &&
                data.children &&
                data.children.map(item => {
                    let node = this.$refs.tree.getNode(item.id)
                    if(checked) {
                        this.addDataStyle(node)
                    } else {
                        this.cancelDataStyle(node)
                    }
                    this.$refs.tree.setChecked(item.id, checked);
                    if (data.children) {
                        this.selectChildren(item, checked);
                    }
                });
        },
        // 父级递归
        parentNodesChange(node) {
            // console.log(node);
            if (node.parent) {
                // 这里设置高亮
                this.addDataStyle(node)
                for (let key in node) {
                    if (key == "id") {
                        this.$refs.tree.setChecked(node, true);
                    }
                }
                if (node.parent && node.id !== 0) {
                    this.parentNodesChange(node.parent);
                }
            }
        },
        // 判断当前选中的数据 是否是叶子节点
        addDataStyle(node) {
            if(!node.isLeaf) { // 当前选中的跟节点所有上级都需要高亮
                if(this.hightdata.indexOf(node.data.id) == -1) {
                    this.hightdata.push(node.data.id)  
                }
            }
        },
        cancelDataStyle(node, flag) {    
            this.hightdata.remove(node.data.id)
            console.log('222222', node)
            if(flag == 1) { // 当前取消的操作项
                console.log('ccccc', node)
                // 获取父节点
                let parentNode = this.$refs.tree.getNode(node.data.pid)
                console.log('parentNode', parentNode)
                if(parentNode && parentNode.data.children) {
                    let childs = parentNode.data.children
                    // 判断子节点中有没有选中的项
                    let hasChildChecked = childs.some(item => {
                        let node = this.$refs.tree.getNode(item.id)
                        return node.checked
                        // console.log('4444444', node.checked)
                    });
                    if(!hasChildChecked) { // 取反 没有选中项目 将父节点高亮取消掉
                        console.log('121212212', parentNode)
                        console.log('343434', this.hightdata)
                        this.hightdata.remove(parentNode.data.id)
                        return
                    }
                }
            }
        },
        // --------------------------------

        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([
                    { name: "region11", id: 1 },
                    { name: "region21", id: 2 }
                ]);
            }
            if (node.level > 3) return resolve([]);

            var hasChild;
            if (node.data.name === "region1") {
                hasChild = true;
            } else if (node.data.name === "region2") {
                hasChild = false;
            } else {
                hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
                // this.$nextTick(() => {
                //     this.setHalfCheckedNodes(1);
                // });
                var data;
                if (hasChild) {
                    data = [
                        {
                            name: "zone" + this.count++
                        },
                        {
                            name: "zone" + this.count++
                        }
                    ];
                } else {
                    data = [];
                }

                resolve(data);
            }, 500);
        },
        setHalfCheckedNodes(key) {
            const node = this.$refs.lazyRef.getNode(key);
            if (node) {
                // 此处应判断当前节点的checked属性是否为true，是则不必半选
                node.indeterminate = true;
            }
        }
    },
    mounted() {
        // 给数组添加 remove 方法
        Array.prototype.remove = function(val) { 
            var index = this.indexOf(val); 
            if (index > -1) { 
                this.splice(index, 1); 
            } 
        };
    }
};
</script>

<style>
.hightli {
  color: red !important;
}
</style>
