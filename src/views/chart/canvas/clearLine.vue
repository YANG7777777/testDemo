<template>
    <div>
        <canvas id="canvas" width="600" height="400"></canvas>
        <el-button @click="handleBegin">开始</el-button>
        <el-button @click="handleClear">清除</el-button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                canvas: null,
                sit: 0
            }
        },
        mounted() {
        },
        methods: {
            drowCanvas (x,y) {
                var ctx = document.getElementById('canvas').getContext('2d');
                var w = canvas.width,
                h = canvas.height
                this.canvas = ctx

                let drow_line = (start, end) => {
                    ctx.beginPath()
                    // ctx.scale(0.2,1) // canvas缩放
                    // ctx.translate(50, 50) // canvas 改变起始坐标点（0，0）位置
                    // ctx.rotate(30*Math.PI/180 ) // canvas 针对画布本身的旋转。可以通过角度值计算：degree * Math.PI / 180
                    ctx.strokeStyle = 'red'
                    ctx.lineWidth = 2
                    ctx.moveTo(start.x, start.y)
                    ctx.lineTo(end.x, end.y)
                    ctx.closePath()
                    ctx.stroke()

                    if (start.x > 200) return

                    start_position = end
                    end_position = getEndPosition(start_position)
                    setTimeout(() => {
                        drow_line(start_position, end_position)
                    }, 4);
                }
                let getEndPosition = (start) => {
                    // 设置默认斜率为一
                    let x = start.x + 1
                    let y = start.y + 1
                    return { x: x, y: y}
                }
                let start_position = x
                let end_position = getEndPosition(x)
                drow_line(start_position,end_position)
            },
            clearCanvas(x) {
                let xl = 1 // 设置斜率为 1
                this.canvas.clearRect(x, x, 2 ,2)
                if( x <= 0 ) clearInterval(this.inter)
            },
            handleClear() {
                this.inter = setInterval(() => {
                    console.log(this.sit)
                    this.clearCanvas(200 - this.sit)
                    this.sit = this.sit + 1
                }, 20)
            },
            handleBegin() {
                this.drowCanvas({x:0,y:0}, {x:50,y:50})
            }
        }
    }
</script>

<style lang="less" scoped>
 canvas {
    border: 1px solid #000;
}
</style>