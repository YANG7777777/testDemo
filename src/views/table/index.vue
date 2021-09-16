<template>
  <div id="tableLearn">
    <el-table
        :data="tableData"
         border
         :span-method="arraySpanMethod"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
           <!-- <template slot-scope="scope">
          <span v-if="item.address !== 'batchInvest' && item.address !== 'remark'">{{scope.row[item.address]}}</span>
          <edit-cell v-else v-model="scope.row[item.address]" :can-edit="true"/>
          </template> -->
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
         <el-table-column
          prop="book"
          label="书籍">
        </el-table-column>
      </el-table>
      <el-button type="success" @click="toAnother">naotherTable</el-button>
      <el-button type="success" @click="biasButton">斜线</el-button>
  </div>
</template>

<script>

// import EditCell from '../../components/editCell'
export default {
  name: 'Table',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        book: 'Java'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        book: 'Java'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        book: 'Java'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        book: 'Java'
      }]
    }
  },
  methods: {
    // row 当前行、 column 当前列、 rowIndex 当前行号、 columnIndex 当前列号
    // 该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。
    // 也可以返回一个键名为rowspan和colspan的对象。
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) { // 当前行号能被2整除的时候
        if (columnIndex === 0) { // 当前列号等于0的时候
          return [1, 2] // 在当前列号等于零的时候 合并一行两列
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    toAnother () {
      this.$router.push({
        path: '/adjTable'
      })
    },
    biasButton () {
      this.$router.push({
        path: '/bias'
      })
    }
  }
  // components: {
  //   EditCell
  // }
}
</script>

<style lang="less">

</style>
