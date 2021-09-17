<template>
  <div id="tableLearn">
    <el-table
        :data="tableData"
        border
        @cell-click="tableCellClick"
        style="width: 100%">
        <el-table-column
        v-for="(item) in colunms"
        :key="item.prop"
          :prop="item.prop"
          :label="item.label">
             <template slot-scope="scope">
               <span v-if="item.prop !== 'address' && item.prop !== 'book'">{{scope.row[item.prop]}}</span>
               <!-- 编辑框组件 -->
               <edit-cell :afterEdit = 'afterEdit' :targetValue="targetValue" v-else v-model="scope.row[item.prop]" :can-edit="true"/>
               <!-- 编辑框组件 -->
             </template>
        </el-table-column>
      </el-table>
      <el-button type="success" @click="toAnother">naotherTable</el-button>
      <el-button type="success" @click="biasButton">斜线</el-button>
  </div>
</template>

<script>

import EditCell from '../../components/editCell'
export default {
  name: 'Table',
  data () {
    return {
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        book: 'Java'
      }, {
        id: '2',
        date: '2016-05-04',
        name: '王二虎',
        address: '上海市普陀区金沙江路 1517 弄',
        book: 'Java'
      }, {
        id: '3',
        date: '2016-05-01',
        name: '王三虎',
        address: '上海市普陀区金沙江路 1519 弄',
        book: 'Java'
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        book: 'Java'
      }],
      colunms: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'book',
          label: '书籍'
        }
      ],
      targetValue: {}
    }
  },
  components: {
    EditCell
  },
  methods: {
    // row 当前行、 column 当前列、 rowIndex 当前行号、 columnIndex 当前列号
    // 该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。
    // 也可以返回一个键名为rowspan和colspan的对象。
    // arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) { // 当前行号能被2整除的时候
    //     if (columnIndex === 0) { // 当前列号等于0的时候
    //       return [1, 2] // 在当前列号等于零的时候 合并一行两列
    //     } else if (columnIndex === 1) {
    //       return [0, 0]
    //     }
    //   }
    // },
    toAnother () {
      this.$router.push({
        path: '/adjTable'
      })
    },
    biasButton () {
      this.$router.push({
        path: '/bias'
      })
    },
    tableCellClick (row, column, event, cell) {
      this.targetValue = {
        id: row.id,
        headerName: column.property
      }
    },
    afterEdit (e) {
      // 1.根据返回值来发送接口修改数据
      // 2.修改请求回来的数据
      console.log('afterEdit', e)
    }
  }
}
</script>

<style lang="less">

</style>
