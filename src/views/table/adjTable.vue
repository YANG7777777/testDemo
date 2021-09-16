<template>
  <div class="adj">
    <el-table
          :data="listData"
         :span-method="objectSpanMethod"
          class="tableArea"
          style="width: 100%">
          <el-table-column
            prop="type"
            label="序号"
            align="center"
            width="200"/>
          <el-table-column
            prop="sheetType"
            label="工单类型"
            />
          <el-table-column
            prop="taskKey"
            label="taskKey"
            />
          <el-table-column
            prop="templateUrl"
            label="templateUrl"
            />
          <el-table-column
            label="操作"
            >
            <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
                        <i class="el-icon-edit-outline"  @click="modify(scope)" />
                      </el-tooltip>
                      <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
              <i class="el-icon-delete" @click="deleteData(scope)" />
                      </el-tooltip>
            </template>
          </el-table-column >
        </el-table>
  </div>
</template>

<script>
export default {
  name: 'AdjTable',
  data () {
    return {
      listData: [],
      spanArr: [], // 遍历数据时，根据相同的标识去存储记录
      position: 0 // 二维数组索引
    }
  },
  methods: {
    queryData () { // 查询操作
      const data = [
        {
          id: 1,
          type: 1,
          sheetType: '事件单',
          taskKey: 'shijian_01',
          templateUrl: '/shijian_01'
        },
        {
          id: 5,
          type: 2,
          sheetType: '问题单',
          taskKey: 'wenti_02',
          templateUrl: '/wenti_02'
        },
        {
          id: 2,
          type: 1,
          sheetType: '事件单',
          taskKey: 'shijian_02',
          templateUrl: '/shijian_02'
        },
        {
          id: 3,
          type: 1,
          sheetType: '事件单',
          taskKey: 'shijian_03',
          templateUrl: '/shijian_04'
        },
        {
          id: 4,
          type: 2,
          sheetType: '问题单',
          taskKey: 'wenti_01',
          templateUrl: '/wenti_01'
        },
        {
          id: 6,
          type: 2,
          sheetType: '问题单',
          taskKey: 'wenti_03',
          templateUrl: '/wenti_03'
        }
      ]
      data.sort((a, b) => { // 对数组进行排序
        return a.type > b.type ? 1 : -1
      })
      this.listData = data
      this.rowSpan()
    },
    rowSpan () {
      this.listData.forEach((item, index) => {
        // 判断是否是第一项
        if (index === 0) {
          this.spanArr.push(1)
          this.position = 0
        } else {
          // 不是第一项时，就根据标识去存储
          if (this.listData[index].type === this.listData[index - 1].type) {
            // 查找到符合条件的数据时每次要把之前存储的数据+1
            this.spanArr[this.position] += 1
            this.spanArr.push(0)
          } else {
            // 没有符合的数据时，要记住当前的index
            this.spanArr.push(1)
            this.position = index
          }
        }
      })
      console.log(this.spanArr, this.position)
    },
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) { // 表格合并行
      if (columnIndex === 0) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
      if (columnIndex === 1) {
        const _row = this.spanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  },
  created () {
    this.queryData()
  }
}
</script>

<style>
.el-select {
  margin-right: 15px;
}
.el-input {
  margin-right: 15px;
  width: 200px;
}
.tableArea {
  margin-top: 20px;
  box-shadow: 0 0 8px 0 #aaa;
}
i[class^="el-icon"] {
  margin-right: 5px;
  font-size: 16px;
  cursor: pointer;
}
.modify_table td{
        padding: 10px ;
}
.item_title{
    text-align: right;
}
</style>
