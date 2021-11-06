<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">{{ scope.row.dataSourceName }}</template>
      </el-table-column>
      <el-table-column prop="dataSourceType" label="数据类型" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ip" label="ip" show-overflow-tooltip></el-table-column>
      <el-table-column prop="port" label="port" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sqlName" label="sqlName" show-overflow-tooltip></el-table-column>
      <el-table-column prop="userName" label="userName" show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          dataSourceName: '91工商数据',
          dataSourceType: 'MySQL',
          ip: '172.168.23.101',
          port: '3306',
          sqlName: '',
          userName: ''
        }, {
          dataSourceName: '91工商数据',
          dataSourceType: 'MySQL',
          ip: '172.168.23.101',
          port: '3306',
          sqlName: '',
          userName: ''
        }
      ],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style>
</style>
