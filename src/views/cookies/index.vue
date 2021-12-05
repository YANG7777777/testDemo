<template>
  <div>cookie操作用户名密码是否记住</div>
</template>

<script>

import Cookies from 'js-cookie'
import cookieConfig from '@/utils/cookie/settings'
import { setToken } from '@/utils/cookie/auth'
export default {
  name: 'cookies',
  data () {
    return {
      remember: false, // 是否记住用户名密码
      form: { // 登录表单数据
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    console.log(Object.prototype.hasOwnProperty)
    this.gitCookie()
  },
  methods: {
    gitCookie () { // 从浏览器中获取数据
      const username = Cookies.get('username')
      const password = Cookies.get('password')
      const remember = Cookies.get('remember')
      if (username) {
        this.form.username = username
        this.form.password = password
        this.remember = Boolean(remember)
      }
    },
    submit () { // 登录操作按钮
      const res = {
        code: 0,
        token: '2323412ddd2sjjj92w'
      }
      if (this.remember) {
        Cookies.set('username', this.form.username, { expires: cookieConfig.passCookieExpires })
        Cookies.set('password', this.form.password, { expires: cookieConfig.passCookieExpires })
        Cookies.set('remember', this.remember, { expires: cookieConfig.passCookieExpires })
      }
      if (res.code === 0 && res.token !== '') {
        setToken(res.data.token, this.remember)
        // this.$router.push({ name: 'searchMain' }) // 登录进入首页
      } else {
        this.$message('error')
      }
    }
  }
}
</script>

<style>
</style>
