<template>
  <div style="padding: 20px 10px" id="exportPdf" ref="exportPdf">
    <h3 style="text-align:center;">pdf 局部页面保存</h3>
    <h4 style="padding: 10px 0;">1、在Vue页面上实现PDF导出功能依赖于两个npm插件</h4>
    <p
      style="padding: 10px 10px;background-color:#ccc;display:inline-block;"
    >npm i vue-to-pdf --save</p>
    <h4 style="padding: 10px 0;">2、在Vue页面上实现PDF导出和打印功能依赖于两个npm插件</h4>
    <p style="padding: 10px 10px;background-color:#ccc;display:inline-block;">
      import vueToPdf from 'vue-to-pdf';
      <br />Vue.use(vueToPdf);
    </p>
    <h4 style="padding: 10px 0;">3、这两个插件都可以页面局部打印和导出，先在想操作的dom节点上加入id和ref：</h4>
    <p style="padding: 10px 10px;background-color:#ccc;display:inline-block;">{{daim}}</p>
    <h4 style="padding: 10px 0;">4、然后在按钮上加入点击事件：</h4>
    <p style="padding: 10px 10px;background-color:#ccc;display:inline-block;">{{daochu}}</p>
    <h4 style="padding: 10px 0;">5、定义函数：：</h4>
    <p style="padding: 10px 10px;background-color:#ccc;display:inline-block;">
      savePdf(){
      <br />this.$PDFSave(this.$refs.exportPdf, "我的文件");
      <br />},
    </p>
    <div class="flexs">
      <div>
        <input type="button" @click="savePdf" value="导出(pdf)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      daim: '<div id="exportPdf" ref="exportPdf"></div>',
      daochu: '<input type="button" @click="savePdf" >导出(pdf)</input>'
    }
  },
  methods: {
    savePdf () {
      this.$PDFSave(this.$refs.exportPdf, 'F:\\pdfTest')
    }

  }
}
</script>

<style lang='less' scoped>
.flexs {
  display: flex;
  div {
    flex: 1;
    text-align: center;
    input {
      height: 30px;
      width: 200px;
      background-color: indigo;
      color: white;
    }
  }
}
</style>
