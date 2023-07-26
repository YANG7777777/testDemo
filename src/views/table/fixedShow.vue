<template>
  <div>
    <el-table :data="tableData" ref="table" style="width: 100%">
      <el-table-column align="center" label="日期">
        <!-- <el-table-column prop="data" label="采访日期" fixed width="200" align="center"></el-table-column> -->
        <el-table-column fixed prop="upData" label="提交日期" width="200" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="data" :label="rowLabel" fixed width="200" align="center"></el-table-column>
      <el-table-column label="个人信息展示" align="center">
        <el-table-column prop="name" label="姓名" width="150" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" width="150" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" width="150" align="center"></el-table-column>
        <el-table-column prop="address" label="住址" width="250" align="center"></el-table-column>
        <el-table-column prop="height" label="身高" width="150" align="center"></el-table-column>
        <el-table-column prop="weight" label="体重" width="150" align="center"></el-table-column>
        <el-table-column label="工作状态" width="150" align="center">
          <template slot-scope="scop">
            <span v-if="scop.row.status === 'work'" style="color: red">{{scop.row.status}}</span>
            <span v-if="scop.row.status === 'home'" style="color: green">{{scop.row.status}}</span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'fixedTable',
  data () {
    return {
      tableData: [{
        data: '2121-10-24',
        upData: '2121-4-45',
        name: 'jock',
        sex: '男',
        age: 28,
        address: '北京 海淀',
        height: 180,
        weight: 80,
        status: 'work',
        isUsed: true,
      }, {
        data: '2121-10-24',
        upData: '2121-4-45',
        name: 'jock',
        sex: '男',
        age: 28,
        address: '北京 海淀',
        height: 180,
        weight: 80,
        status: 'home',
        isUsed: false,
      }],
      rowLabel: ''
    }
  },
  filters: {
    changeColor (v) { }
  },
  mounted () {
    this.$refs.table.bodyWrapper.addEventListener('scroll', res => {
      const target = res.target
      if (target.scrollLeft > 200) {
        this.rowLabel = '日期'
      } else {
        this.rowLabel = ''
      }
    }, true)
  },
  methods: {}
}
</script>

<style>
</style>
