<template>
  <div class="canvas">
    <canvas
      id="tutorial1"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial2"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial3"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial4"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial5"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial6"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial7"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial8"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial9"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
    <canvas
      id="tutorial10"
      width="100"
      height="100"
      style="border: 1px solid #ccc"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {}
  },
  methods: {
    drawRectangle () {
      const canvas = document.getElementById('tutorial1')
      const ctx = canvas.getContext('2d')
      // fillRect(x, y, width, height)：绘制一个填充的矩形。
      // strokeRect(x, y, width, height)：绘制一个矩形的边框。
      ctx.fillStyle = 'rgba(200, 0, 0)'
      ctx.fillRect(10, 10, 50, 50)
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      ctx.fillRect(30, 30, 55, 50)
    },
    drawPath () {
      const canvas = document.getElementById('tutorial2')
      const ctx = canvas.getContext('2d')
      ctx.beginPath() // 新建一条path
      ctx.moveTo(30, 30) // 将画笔移动到指定的坐标
      ctx.lineTo(80, 30) // 绘制一条从当前位置到指定坐标（100， 50） 的直线
      ctx.closePath()
      ctx.stroke() // 通过线条来绘制图形轮廓
    },
    drawTriangle () {
      const canvas = document.getElementById('tutorial3')
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.lineTo(50, 20)
      ctx.lineTo(50, 50)
      ctx.fill() // 填充闭合区域。如果path没有闭合，则fill()会自动闭合路径。
    },
    drawArc () {
      const canvas = document.getElementById('tutorial4')
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      // arc(x, y, r, startAngle, endAngle, anticlockwise): 以(x, y) 为圆心，以r 为半径，从 startAngle 弧度开始到//endAngle弧度结束。anticlosewise 是布尔值，true 表示逆时针，false 表示顺时针(默认是顺时针)。Math.PI 是圆周率
      ctx.arc(50, 50, 40, 0, Math.PI, true)
      ctx.stroke()
    },
    drawArc2 () {
      const canvas = document.getElementById('tutorial5')
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(10, 10)
      // 参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
      ctx.arcTo(40, 10, 40, 40, 20)
      ctx.lineTo(40, 40)
      ctx.stroke()

      // ctx.beginPath()
      // ctx.rect(10, 10, 5, 5)
      // ctx.rect(40, 10, 5, 5)
      // ctx.rect(40, 40, 5, 5)
      // ctx.fill()
    },
    drawBezier () {
      const canvas = document.getElementById('tutorial6')
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(10, 60) // 起始点
      const cp1x = 40; const cp1y = 20 // 控制点
      const x = 80; const y = 80 // 结束点
      ctx.quadraticCurveTo(cp1x, cp1y, x, y) // 绘制二次贝塞尔曲线
      ctx.stroke()
    },
    drawColor () {
      const canvas = document.getElementById('tutorial7')
      var ctx = canvas.getContext('2d')
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)'
          ctx.fillRect(j * 16, i * 16, 16, 16)
        }
      }
    },
    drawLineCap () {
      const canvas = document.getElementById('tutorial8')
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 40)
      ctx.lineTo(90, 40)
      ctx.lineCap = 'round'
      ctx.lineWidth = 20
      ctx.stroke()
    },
    drawLinejion () {
      const canvas = document.getElementById('tutorial9')
      const ctx = canvas.getContext('2d')
      ctx.lineJoin = 'round'
      ctx.lineWidth = 20
      ctx.beginPath()
      ctx.moveTo(10, 10)
      ctx.lineTo(40, 50)
      // ctx.moveTo(40, 50)  // 使用lineJion 写一个moveTo就好了否则不生效
      ctx.lineTo(70, 10)
      ctx.stroke()
    },
    drawText () {
      const canvas = document.getElementById('tutorial10')
      const ctx = canvas.getContext('2d')
      ctx.font = '40px sans-serif'
      // fillText(text, x, y[, maxWidth]) 在指定的(x, y) 位置填充指定的文本，绘制的最大宽度是可选的。
      // strokeText(text, x, y[, maxWidth]) 在指定的(x, y) 位置绘制文本边框，绘制的最大宽度是可选的。
      ctx.fillText('杨', 10, 40)
      ctx.strokeText('杨', 10, 80)
    },
    drawCanvas () {
      this.drawRectangle() // 绘制矩形
      this.drawPath() // 绘制直线
      this.drawTriangle() // 绘制三角形
      this.drawArc() // 绘制圆弧方法一
      this.drawArc2() // 绘制圆弧方法二
      this.drawBezier() // 绘制二次贝塞尔曲线
      this.drawColor() // canvas 颜色
      this.drawLineCap() // 线条末端样式
      this.drawLinejion() // 线条合并
      this.drawText() // 文字
    }

  },
  mounted () {
    this.drawCanvas()
  }

}
</script>

<style>
</style>
