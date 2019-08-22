<template>
  <div class="sub-sub-sync">
     <button @click="changeValue">修改subsubValue的值</button>
    {{subsubValue}}
  </div>
</template>

<script>
  export default {
    name: 'sub-sub-sync',
    props: ['subsubValue'],
    methods: {
      changeValue() {
        this.$emit('update:subsubValue', !this.subsubValue)
      }
    }
  }
</script>

<style scoped>

</style>
