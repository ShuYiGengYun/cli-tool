<template>
  <div class="sync-container">
    <nested-sync :modal.sync="isModelShow" ref="nestedSync"></nested-sync>
    <button>父组件在此</button>
  </div>
</template>

<script>
  import SubSync from './sub-sync'
  import NestedSync from './nested-comp'
  export default {
    name: 'Sync',
    components: {
      SubSync,
      NestedSync,
    },
    mounted() {
      const ele = this.$refs.nestedSync.trigger();
      console.log(ele)
    },
    data() {
      return {
        isModelShow: false,
      }
    }
  }
</script>

<style scoped>

</style>
