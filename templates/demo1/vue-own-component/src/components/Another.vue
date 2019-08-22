<template>
  <div class="another-container">
    This is Another-Container
    <router-link :to="{ name: 'Lists', params: { fromPath: '/another'}}" tag="button">GoTo-Lists</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Another'
  }
</script>

<style scoped>
  .another-container{
    margin-top: 500px;
    margin-bottom: 500px;
  }
</style>
