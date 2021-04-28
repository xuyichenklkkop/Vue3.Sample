<template>
  <div>这是子组件</div>
</template>

<script>
export default {
  data () {
    return {
      altertName: 'child alert'
    }
  },
  methods: {
    showName () {
      this.$emit("showName", this.altertName)
    },
    getData () {
      this.$req('memo', {}).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.showName()
    this.getData()
    this.getest()
  }
}
</script>