<template>
  <div class="sub-sync">
    <sub-sub-sync :subsubValue.sync="subValue"/>
  </div>
</template>

<script>
  import SubSubSync from './sub-sub-sync';
  export default {
    name: 'sub-sync',
    props: ['value'],
    components: {
      SubSubSync,
    },
    data() {
      return {
        subValue: this.value,
      }
    },
    methods: {
      changeParentValue() {
        this.$emit('update:value', !this.value)
      }
    }
  }
</script>

<style scoped>

</style>
