<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {

      }
    },
    created() {

    },
    mounted() {
      console.log(api);
    }
  }
</script>
