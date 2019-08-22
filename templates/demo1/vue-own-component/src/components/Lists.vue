<template>
  <div class="lists-container">
    <div>
      <input type="text">
    </div>
    <ul>
      <li class="item" v-for="(item, index) in counts" @click="itemClick(index)">测试{{index}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Lists',
    mounted() {
      console.log(11);
    },
    data() {
      return {
        counts: 30,
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        // console.log(vm);
      })
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      console.log('update');
    },
    activated(...args) {
      console.log(args);
    },
    deactivated() {
      console.log('deactivated');
    },
    methods: {
      itemClick(index) {
        this.$store.commit('setSelectedItem', index)
        const  { fromPath } = this.$route.params;
        console.log(fromPath);
        this.$router.push({ path: fromPath })
      }
    }
  }
</script>

<style scoped>
  ul, li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .item{
    width: 100%;
    box-sizing: border-box;
    height: 50px;
    display: block;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }
</style>
