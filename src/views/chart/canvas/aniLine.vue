<template>
    <div class="content" ref="content">
        <div class="left">this.getCanvas</div>
        <div class="right">this.getCanvas</div>
        <canvas ref="myCanvas" id="canvas" width="1024" height="768">
        </canvas>
    </div>
</template>

<script>
  export default {
    data() {
        return {
           
        }
    },
    mounted() {
        console.log('为i动态', this.$refs.content)

        // 滚动条的获取
        window.addEventListener('scroll', this.handleScroll, true)
        this.drawCanvas()

        this.ctx = this.$refs.myCanvas.getContext('2d')
        this.$nextTick(()=>{
            (async () =>{
            // await this.getCanvas({x:706,y:402},{x:660,y:375})

            // 三段线的开始到结束的坐标
            await this.getCanvas({x:800,y:50},{x:780,y:100})
            await this.getCanvas({x:780,y:100},{x:700,y:100})
            await this.getCanvas({x:700,y:100},{x:500,y:200})
            // 分叉
            // this.getCanvas({x:468,y:374},{x:554,y:321}) 
            //     .then(()=>{
            //         this.getCanvas({x:554,y:321},{x:518,y:296})
            //     })
            // await this.getCanvas({x:468,y:374},{x:241,y:503})
            // await this.getCanvas({x:241,y:503},{x:23,y:377})
            // this.getCanvas({x:23,y:377},{x:62,y:352})
            })()
        })

    },
    methods: {
        drawCanvas() {
            const canvas = document.getElementById('canvas')
            const ctx = canvas.getContext('2d')

            // 绘制灰色折线
            ctx.beginPath()
            ctx.strokeStyle = "#cccccc"
            ctx.lineWidth = 4
            ctx.lineCap="round";
            ctx.lineJoin = "round"
            ctx.moveTo(800, 50)
            ctx.lineTo(780, 100)
            ctx.lineTo(700, 100) 
            ctx.lineTo(500, 200) 
            ctx.stroke() 
        },

        getCanvas(start,end){
            return new Promise(resolve=>{
                let movingDistance_x = end.x - start.x; //x轴需要移动的距离
                let movingDistance_y = end.y - start.y; //y轴需要移动的距离
                let ratio = movingDistance_y / movingDistance_x; // 斜率
                // 画线的方法
                let draw_lineTo = (start_draw,end_draw)=>{
                    this.ctx.beginPath()
                    // this.ctx.lineCap="round"; // lineCap 设置线段端点显示的模样:butt，round 和 square，默认是 butt。
                    this.ctx.lineJoin="round";
                    this.ctx.miterLimit=1;
                    this.ctx.moveTo(start_draw.x,start_draw.y)
                    this.ctx.lineTo(end_draw.x,end_draw.y)
                    this.ctx.strokeStyle = '#1E75FE'
                    this.ctx.lineWidth = 4
                    this.ctx.stroke()
                    if(Math.abs(end_draw.x - end.x) == 0 ){
                        resolve()
                        return
                    }

                    start_position = end_draw
                    end_position = getEnd_position(start_position)

                    console.log(Math.abs(end_draw.x - end.x),start_position,end_position)

                    setTimeout(() => {
                        draw_lineTo(start_position,end_position)
                    }, 10);
                }

                // 获取开始坐标
                let start_position = { x : start.x, y : start.y}

                // 获取结束坐标的方法
                let getEnd_position = (start_position)=>{
                    let x = end.x > start.x ? (start_position.x + 1) : (start_position.x - 1)
                    let y =
                        end.x > start.x
                        ? start_position.y + ratio
                        : start_position.y - ratio;

                    return { x : x , y : y }
                }
                // 获取结束坐标
                let end_position = getEnd_position(start_position)

                // 画线
                draw_lineTo(start_position,end_position)
            })
        },

        handleScroll() {
            // 当前距离顶部的距离
            console.log('ccc', this.$refs.myCanvas.getBoundingClientRect().top)
        }
    }
  }
</script>

<style lang="less" scoped>
@media screen  {
    
}
.content {
    position: relative;
    display: flex;
    width: 100%;
    .left {
        background: pink;
        height: 300px;
        flex: 1;
    }
    .right {
        background-color: skyblue;
        height: 300px;
        flex: 1;
    }
    // div {
    //     text-align: center;
    //     background-color: #FFFFFF;
    // }
    #canvas {
        // background-color: rgba(0, 0, 0, 0);
        // background-color: #FFFFFF;
        // margin: 0 auto;
        // display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>