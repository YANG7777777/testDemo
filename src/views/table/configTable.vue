<template>
  <div class="bias">
    <div style="text-align: right">
      <el-button @click="beginEdit" type="primary">编辑</el-button>
      <el-button @click="saveEdit" type="success">保存</el-button>
    </div>
    <el-table
      border
      :data="tableData"
      :cell-style="tableCellStale"
      style="width: 100%"
      @cell-click="cellClick"
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
              :isEditTable="isEditTable"
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
                  :can-edit="scope.row.row_head === '总计'? false : item1.CanEdit"
                  :isEditTable="isEditTable"
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
                      :targetValue="{...targetValue}"
                      v-model="scope.row[item2.prop]"
                      :can-edit="scope.row.row_head === '总计'? false : item2.CanEdit"
                      :isEditTable="isEditTable"
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
      CanEdit: false, // 组件是否可编辑
      isEditTable: false // table表格是否能点击
    }
  },
  components: {
    EditCell
  },
  methods: {
    beginEdit () { // 点击编辑按钮 开始编辑
      this.isEditTable = true
    },
    saveEdit () { // 点击保存按钮
      this.isEditTable = false
      console.log(this.tableData)
    },
    afterEdit (e) {
      // console.log(['bei', 'xiaozu'].indexOf(e.columnName))
      if (e.columnName === 'bei') { // 备注列
        return
      } else if (e.columnName === 'xiaozu') { // 是否列
        this.tableData.forEach(item => {
          if (e.rowName === item.row_head) {
            if (['是', '否'].indexOf(item[e.columnName]) < 0) {
              item[e.columnName] = ''
              this.$message('请输入  “是”  或  “否”')
            }
            console.log('dddddd', item[e.columnName])
          }
        })
        return
      } else if (['huodongshi1', 'huodongshi2', 'huodongshi3'].indexOf(e.columnName) !== -1) {
        this.tableData.forEach(item => {
          if (e.rowName === item.row_head) {
            // console.log('dddddd', this.hasDot(item[e.columnName]))
            item[e.columnName] = this.hasDot(item[e.columnName])
          }
        })
      } else {
        this.tableData.forEach(item => {
          if (e.rowName === item.row_head) {
            item[e.columnName] = parseInt(item[e.columnName])
          }
        })
      }

      this.sumFunction(e.columnName, e.rowName)
    },
    hasDot (num) {
      // 保留4位小数点过滤器 不四舍五入
        let toFixedNum = Number(num).toFixed(5)
        return toFixedNum.substring(0, toFixedNum.toString().length - 1)
    },
    tableCellStale ({ row, column, rowIndex, columnIndex }) { // 表格背景颜色样式
      if ((row.row_head === '总计' && columnIndex !== 9) || columnIndex === 5) {
        return {
          background: '#ccc'
        }
      }
    },
    cellClick (row, column, cell, event) { // 单元格点击事件
      // 计算列总计
      const columnName = column.property
      const rowName = row.row_head
      this.targetValue = { columnName, rowName }
    },
    sumFunction (columnName, rowName) { // 计算列
      let columnCount = 0 // 列的总计
      this.tableData.forEach((item, index) => {
        if (index !== 0) {
          columnCount += Number(item[columnName])
        }
      })
      this.tableData[0][columnName] = columnCount

      // 行计算
      // const rowCount = 0
      this.tableData.forEach((item, index) => {
        if (item.row_head === rowName) {
          item.zongji = Number(item.huodongshi1) + Number(item.huodongshi2) + Number(item.huodongshi3)
        }
      })

      // 标灰列计算
      let garyCount = 0
      this.tableData.forEach((item, index) => {
        if (index !== 0) {
          garyCount += Number(item.zongji)
        }
      })
      this.tableData[0].zongji = garyCount
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
// 不加scope属性才能生效
.el-table thead.is-group th {
  background: #ccc !important;
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
