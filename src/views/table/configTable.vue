<template>
  <div class="bias">
    <el-table
      border
      :data="tableData"
      :cell-style="tableCellStale"
      style="width: 100%"
      @cell-click='cellClick'
    >
      <el-table-column prop="row_head" width="120"></el-table-column>
      <template>
        <el-table-column
          align="center"
          v-for="(item, index) in tableTitle"
          :key="index"
          :label="item.label"
          :width="item.width || ''"
          :prop="item.prop || ''"
        >

          <template slot-scope="scope">
            <!-- 编辑框组件 -->
            <edit-cell
              :afterEdit="afterEdit"
              :targetValue="targetValue"
              v-model="scope.row[item.prop]"
              :can-edit="(scope.row.row_head === '总计' && item.prop !== 'bei')? false : item.CanEdit"
            />
            <!-- 当前行等于总计 并且 列不等于备注 不可编辑 -->
            <!-- 第一层table渲染   后面类推 -->
            <!-- 编辑框组件  -->
          </template>
          <template>
            <el-table-column
              align="center"
              :label="item1.label"
              v-for="(item1, index1) in item.children"
              :prop="item1.prop || ''"
              :key="index1"
            >
              <template slot-scope="scope">
                <!-- 编辑框组件 -->
                <edit-cell
                  :afterEdit="afterEdit"
                  :targetValue="targetValue"
                  v-model="scope.row[item1.prop]"
                  :can-edit="item1.CanEdit"
                />
                <!-- 编辑框组件 -->
              </template>
              <template>
                <el-table-column
                  align="center"
                  :label="item2.label"
                  v-for="(item2, index2) in item1.children"
                  :prop="item2.prop || ''"
                  :key="index2"
                >
                  <template slot-scope="scope">
                    <!-- 编辑框组件 -->
                    <edit-cell
                      :afterEdit="afterEdit"
                      :targetValue="targetValue"
                      v-model="scope.row[item2.prop]"
                      :can-edit="item2.CanEdit"
                    />
                    <!-- 编辑框组件 -->
                  </template>
                </el-table-column>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import { reportConfig } from './config/editTableConfig'
import EditCell from '../../components/editCell'
export default {
  name: 'configTable',
  data () {
    return {
      tableTitle: reportConfig.tableTtle,
      tableData: reportConfig.tableData,
      row: '',
      column: '',
      targetValue: {},
      CanEdit: false
    }
  },
  components: {
    EditCell
  },
  methods: {
    afterEdit (e) {
      // 1.根据返回值来发送接口修改数据
      // 2.修改请求回来的数据
      console.log('afterEdit', e)
    },
    tableCellStale ({ row, column, rowIndex, columnIndex }) { // 表格背景颜色样式
      if ((row.row_head === '总计' && columnIndex !== 9) || columnIndex === 5) {
        return {
          background: '#ccc'
        }
      }
    },
    summaryFun () { // 表头总计数据
      const tools = {
        row_head: '总计',
        sum: ''
      }
      this.tableData.unshift(tools)
    },
    cellClick (row, column, cell, event) { // 单元格点击事件
      console.log(row, column)
      if (row.row_head === '总计') {
        console.log(123)
      }
    }
  },
  mounted () {
    this.summaryFun()
  }
}
</script>

<style lang="less">
// 不加scope属性才能生效
.el-table thead.is-group th {
  background: #f0f0f0 !important;
}
.el-table thead.is-group tr:first-of-type th:first-of-type:before {
  content: "日期";
  text-align: center;
  position: absolute;
  width: 152px;
  height: 1px;
  bottom: 30px;
  right: 0;
}
.el-table thead.is-group tr:first-of-type th:first-of-type:after {
  content: "配送新增";
  text-align: center;
  position: absolute;
  width: 152px;
  top: 10px;
  left: 0;
}
.el-table thead.is-group tr:first-of-type th:first-of-type .cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 152px;
  height: 1px;
  background-color: #ccc;
  display: block;
  text-align: center;
  transform: rotate(38deg);
  transform-origin: top left;
  -ms-transform: rotate(38deg);
  -ms-transform-origin: top left;
  -webkit-transform: rotate(38deg);
  -webkit-transform-origin: top left;
}
</style>
