<template>
  <div class="mapMutations">
    <HelloWorld />
    <h3>mapMutations</h3>
    <button @click="add">+</button>
    {{ count }}
    <button @click="minus">-</button>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapGetters } from 'vuex'
import Vue from 'vue'
Vue.filter('filterOne', function (value, one) {
  // console.log(value, one)
  return (value + one)
})

export default {
  name: 'MapMutations',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['add', 'minus'])
  },
  mounted () {
    this.$nextTick(() => {
      // console.log('dom更新延迟回调')
    })
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  components: {
    HelloWorld
  }
}
</script>
