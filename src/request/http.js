import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api的base_url
  timeout: 30 * 1000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   if (config.data.tranCode === 'queryOnlineDevidsService' || config.data.tranCode === 'querySqlCommonService') {
  //     config.headers['X-Token'] = ''
  //   } else {
  //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  //   }
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    // const res = response.data
    // if (res.code !== 0) {
    //   // -6:非法的token;  -5:Token 过期了;
    //   if (res.code === -5 || res.code === -6) {
    //     MessageBox.confirm(res.message, '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('LogOut').then(() => {
    //         location.reload()// 为了重新实例化vue-router对象 避免bug
    //       })
    //     }).catch(() => {
    //       Message({
    //         message: '已取消',
    //         type: 'error',
    //         duration: 5 * 1000
    //       })
    //     })
    //   }
    return response.data
    // } else {
    //   return response.data
    // }
  },
  error => {
    // console.log('err' + error)// for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error).catch(e => { console.log(e) })
  }
)

export default service
