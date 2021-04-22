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
    }
  },
  mounted () {
    this.showName();
  }
}
</script>