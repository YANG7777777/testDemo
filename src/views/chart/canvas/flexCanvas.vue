<template>
    <div ref="content" class="content" @mouseenter="handleMouseEnter">
        <canvas ref="myCanvas" id="cv"></canvas>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentValue: null,
                timer: null,
                isRemoved: true,
                currentDirection: 1,
            }
        },
        mounted() {
            const width = this.$refs.content.offsetWidth;
            this.currentValue = width
            this.drowLine()
            window.addEventListener('resize', this.handleResize)
            // this.drowColorLine()
        },
        methods: {
            drowLine() {
                var cv=document.getElementById("cv");
                cv.style.border="1px solid red";
                cv.width= this.$refs.content.offsetWidth
                cv.height=this.$refs.content.offsetHeight

                var cvt=cv.getContext("2d");

                // 原始点坐标
                cvt.beginPath()
                cvt.strokeStyle = "#cccccc"
                cvt.lineWidth = 2
                cvt.moveTo(cv.width, 0)
                cvt.lineTo((cv.width - (cv.width / 20) ), cv.height / 5)
                cvt.lineTo((cv.width - (cv.width / 3) ), cv.height / 5)
                cvt.lineTo(0, cv.height)
                cvt.stroke() 
            },
            drowColorLine() {
                this.isRemoved = false
                this.ctx = this.$refs.myCanvas.getContext('2d')
                console.log('yyyyyyyyy', this.ctx)
                this.$nextTick(()=>{
                    (async () =>{

                    const _width= this.$refs.content.offsetWidth
                    const _height=this.$refs.content.offsetHeight
                    // return
                    // 三段线的开始到结束的坐标
                    await this.getCanvas({x:Math.floor(_width),y: 0},  {x:Math.floor( _width - (_width / 20)),y:Math.floor( _height / 5)}, 'rgba(30, 117, 254, 1)')

                    await this.getCanvas({x:Math.floor( _width - (_width / 20)), y:Math.floor(_height / 5)},  {x:Math.floor( _width - ( _width / 3)),y:Math.floor(_height / 5)},'rgba(30, 117, 254, 1)')
                    
                    let res = await this.getCanvas({x:Math.floor(_width - (_width / 3)),y:Math.floor(_height / 5)},  {x:0,y:Math.floor(_height)},'rgba(30, 117, 254, 1)')

                    if(res == 'over') {
                        this.isRemoved = true
                        this.currentDirection = 2
                    }
                    })()
                })
            },
            drowColorLineR() {
                this.isRemoved = false
                this.ctx = this.$refs.myCanvas.getContext('2d')
                console.log('yyyyyyyyy', this.ctx)
                this.$nextTick(()=>{
                    (async () =>{

                    const _width= this.$refs.content.offsetWidth
                    const _height=this.$refs.content.offsetHeight
                    // return
                    // 三段线的开始到结束的坐标
                                        
                    await this.getCanvas({x:0,y:Math.floor(_height)}, {x:Math.floor(_width - (_width / 3)),y:Math.floor(_height / 5)}, '#cccccc')

                    await this.getCanvas(  {x:Math.floor( _width - ( _width / 3)),y:Math.floor(_height / 5)}, {x:Math.floor( _width - (_width / 20)), y:Math.floor(_height / 5)}, '#cccccc')

                    let res = await this.getCanvas({x:Math.floor( _width - (_width / 20)),y:Math.floor( _height / 5)}, {x:Math.floor(_width),y: 0}, '#cccccc')
                    if(res == 'over') {
                        this.isRemoved = true
                        this.currentDirection = 1
                    }
                    })()
                })
            },
            handleResize() {
                const width = this.$refs.content.offsetWidth;
                const height = this.$refs.content.offsetHeight;

                if(width !== this.currentValue) {
                    this.currentValue = width
                    // 清除定时器
                    clearTimeout(this.timer)
                    // 清空画布
                    var c =document.getElementById("cv");
                    console.log('c', c.width)
                    // c.width=c.width;


                    console.log('bianhua l ')
                    this.drowLine()
                    setTimeout(() => {
                        this.drowColorLine()
                    }, 1000);
                    
                }
            },
            getCanvas(start,end,color){
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
                        this.ctx.strokeStyle = color
                        this.ctx.lineWidth = 2
                        this.ctx.stroke()
                        if(Math.abs(end_draw.x - end.x) == 0 ){
                            resolve('over')
                            return
                        }
                        // 防止 宽高不规则 出现 无限循环
                        if(Number.isNaN(start_position.y) || Number.isNaN(end_position.y)) {
                            resolve('over')
                            return
                        }
                        if(!Number.isFinite(start_position.y) || !Number.isFinite(end_position.y)) {
                            resolve('over')
                            return
                        }

                        start_position = end_draw
                        end_position = getEnd_position(start_position)

                        // console.log(Math.abs(end_draw.x - end.x),start_position,end_position)

                        this.timer = setTimeout(() => {
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
            handleMouseEnter() {
                if(this.isRemoved && this.currentDirection == 1) {
                    this.drowColorLine()
                } else if(this.isRemoved && this.currentDirection == 2) {
                    this.drowColorLineR()
                }
               
            }
        }
    }
</script>

<style lang="less" scoped>
@media screen and (min-width: 1020px){
    .content {
        width: 603.563px;
        height: 307.741px;
        background-color: #FFFFFF;
    }
}
@media screen and (max-width: 1019px) and (min-width: 780px){
    .content {
        width: 401.234px;
        height: 202.123px;
        // background-color: papayawhip;
    }
}
@media screen and (max-width: 779px){
    .content {
        width: 100.234px;
        height: 80.123px;
        // background-color: papayawhip;
    }
}
</style>