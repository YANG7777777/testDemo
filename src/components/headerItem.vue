<template>
  <div class="header">
    <el-row style="height: 60px;line-height: 80px">
      <el-col :span="20">
      </el-col>
      <el-col
        :span="4"
        align='middle'
        justify='center'
        style="float: right;"
      >
        <el-avatar
          size="medium"
          :src="squareUrl"
        ></el-avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import heaerImg from '../assets/header.jpg'
export default {
  name: 'Header',
  data () {
    return {
      squareUrl: heaerImg
      // sizeList: ['large', 'medium', 'small']
    }
  }
}
</script>

<style>
</style>
