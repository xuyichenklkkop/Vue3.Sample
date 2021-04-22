<template>
  <div style="height：100px;width:100%">
    <span>这是父组件</span>
    <Child @showName="showRealName"></Child>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  name: 'Father',
  components: {
    Child
  },
  data () {
    return {
      altertName: 'Father alert'
    }
  },
  methods: {
    showRealName (val) {
      alert(val)
    }
  },
  mounted () {

  }
}
</script>