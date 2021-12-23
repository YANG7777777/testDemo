<template>
  <div>
    <p>目标页面 {{this.$route.params.id}} {{this.$route.query.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'targetJump',
  data () {
    return {}
  }
}
</script>

<style>
</style>
