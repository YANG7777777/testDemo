<template>
  <div class="amap">
   <!--center 显示中心位置 lng经度 lat纬度     zoom 视图的缩放比例 -->
       <!-- scroll-wheel-zoom是否允许用鼠标滚轮缩放 -->
 <baidu-map class="map" :center="{lng: 121.4095, lat: 31.1796}" :zoom="15" :scroll-wheel-zoom="true" @click="getPoint">
        <!--地图类型，两种：一种是路线一种是绿的那种-->
  <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <!--是否显示标注-->
       <div v-if="locationFlag" >
  <bm-marker :position="postionMap" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" />
       </div>
           <!--搜索功能-->
           <!--display: none样式很关键，因为下面默认会有地址提示信息很长，很烦，这样搜索会很舒服，-->
        <bm-local-search :keyword="keyword" :auto-viewport="true" zoom="12.8" style="display: none"></bm-local-search>
  <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
</baidu-map>
  </div>
</template>

<script>
export default {
  name: 'Amap',
  data () {
    return {
      locationFlag: null,
      keywordReady: '', // 在输入框中输入的值
      add: {
        siteName: '',
        site: '',
        jd: '',
        wd: '',
        desce: '',
        type: '',
        jgName: '',
        jgNum: ''
      },
      postionMap: { // 地图坐标
        lng: 120.211486,
        lat: 30.256576
      },
      keyword: '' // 搜索框关键词
    }
  },
  methods: {
    searchLocal () {
      this.keyword = this.keywordReady
    },
    getPoint (e) { // 点击地图获取一些信息，
      console.log('e', e)
      this.show = true
      this.postionMap.lng = e.point.lng // 通过  e.point.lng获取经度
      this.postionMap.lat = e.point.lat // 通过  e.point.lat获取纬度
      this.add.jd = e.point.lng
      this.add.wd = e.point.lat
      this.zoom = e.target.getZoom()

      const geocoder = new window.BMap.Geocoder() // 创建地址解析器的实例
      geocoder.getLocation(e.point, rs => {
        if (!this.locationFlag) { // 地图标注为false时，不让位置在搜索框中显示
          return true
        }
        this.keywordReady = rs.address
      // 地址描述(string)
      // console.log(rs.address);    //这里打印可以看到详细地址信息
      // console.log(rs.addressComponents);//结构化的地址描述(object)
      // console.log(rs.addressComponents.province); //省
      // console.log(rs.addressComponents.city); //城市
      // console.log(rs.addressComponents.district); //区县
      // console.log(rs.addressComponents.street); //街道
      // console.log(rs.addressComponents.streetNumber); //门牌号
      // console.log(rs.surroundingPois); //附近的POI点(array)
      // console.log(rs.business); //商圈字段，代表此点所属的商圈(string)
      })
    },
    // 出现标注地址
    getFlag () {
      this.locationFlag = true
    },
    // 取消标注
    cancelFlag () {
      this.locationFlag = false
    }
  }

}
</script>

<style>
.map{
   width: 100%;
   height: 400px;
}
</style>
