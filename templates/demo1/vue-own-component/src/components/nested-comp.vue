<template>
  <div class="nested-comp">
    This is Nested-Comp
    {{localModal}}
    <button @click="changeModalValue">子组件的方法</button>
  </div>
</template>

<script>
  import NestedComp from './nested-comp'
  export default {
    name: 'nested-comp',
    components: {
      NestedComp,
    },
    props: ['modal'],
    data(){
      return {
        localModal: this.modal,
      }
    },
    methods: {
      changeModalValue() {

      },
      trigger() {
        alert('子组件被父组件触发了')
      }
    }
  }
</script>

<style scoped>

</style>
