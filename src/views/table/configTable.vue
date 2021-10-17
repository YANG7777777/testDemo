<template>
  <div class="bias">
    <el-table border :data="tableData3" style="width: 100%">
      <el-table-column prop="date" width="120"> </el-table-column>
      <template>
        <el-table-column
          align="center"
          v-for="(item, index) in tableTitle"
          :key="index"
          :label="item.label"
          :width="item.width || ''"
          :prop="item.prop || ''"
        >
          <template v-if="item.children">
            <el-table-column
              align="center"
              :label="item1.label"
              v-for="(item1, index1) in item.children"
              :prop="item1.prop || ''"
              :key="index1"
            >
              <!-- <template v-if="!item1.children" slot-scope="scope"> -->
                <!-- 编辑框组件 -->
                <!-- <edit-cell
                  :afterEdit="afterEdit"
                  :targetValue="targetValue"
                  v-model="scope.row[item1.prop]"
                  :can-edit="true"
                /> -->
                <!-- 编辑框组件 -->
              <!-- </template> -->
              <template v-if="item1.children">
                <el-table-column
                  align="center"
                  :label="item2.label"
                  v-for="(item2, index2) in item1.children"
                  :prop="item2.prop || ''"
                  :key="index2"
                >
                  <!-- <template slot-scope="scope"> -->
                    <!-- 编辑框组件 -->
                    <!-- <edit-cell
                      :afterEdit="afterEdit"
                      :targetValue="targetValue"
                      v-model="scope.row[item2.prop]"
                      :can-edit="true"
                    /> -->
                    <!-- 编辑框组件 -->
                  <!-- </template> -->
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
// import EditCell from '../../components/editCell'
export default {
  name: 'configTable',
  data () {
    return {
      tableTitle: reportConfig.tableTtle,
      tableData3: reportConfig.tableData,
      row: '',
      column: '',
      targetValue: {}
    }
  },
  // components: {
  //   EditCell
  // },
  methods: {
    afterEdit (e) {
      // 1.根据返回值来发送接口修改数据
      // 2.修改请求回来的数据
      console.log('afterEdit', e)
    }
    // cellClick(row, column, cell, event) {
    //   this.row = row;
    //   this.column = column;
    // },
    // tableCellStyle({ row, column, rowIndex, columnIndex }) {
    //   if (row.province === "河南" && columnIndex === 2) {
    //     return {
    //       background: "#eceb3c",
    //     };
    //   } else if (row.province === "河北" && columnIndex === 2) {
    //     return {
    //       background: "blue",
    //       color: "#000",
    //     };
    //   } else if (row.province === "北京" && columnIndex === 2) {
    //     return {
    //       background: "red",
    //     };
    //   } else if (row.province === "上海" && columnIndex === 2) {
    //     return {
    //       background: "green",
    //       color: "#000",
    //     };
    //   }
    //   if (this.row === row && this.column === column) {
    //     // console.log(12345)
    //     return {
    //       background: "pink",
    //     };
    //   } else {
    //     return {
    //       background: "#fff",
    //     };
    //   }
  }
}
</script>

<style lang="less">
// 不加scope属性才能生效
.el-table thead.is-group th {
  background: #ccc;
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
  background-color: #ebeef5;
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
