export default {
  data () {
    return {
      host: null
    }
  },
  methods: {
    getHost () {
      // console.log(this)
      this.host = location.host
    }
  }
}
