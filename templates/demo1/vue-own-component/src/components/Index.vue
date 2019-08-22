<template>
  <div class="container">
    <div>This is Index Page {{value}}</div>
    <router-link :to="{ name: 'Lists', params: {fromPath: '/index'}}" tag="button" class="button">进入列表页{{value}}</router-link>
    <router-link :to="{ name: 'Another', params: { fromPath: '/index'}}" tag="button">toAnother</router-link>
    <h1>{{ msg }}</h1>
    <h2>val 当前值为 {{val}} </h2>
    <h3> val 被 vue 修改了 {{count }} 次</h3>
    <textarea rows="10" cols="10" placeholder="请输入" class="textarea" v-model="textarea"></textarea>
    <button @click="buttonClick">滚动测试</button>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    watch: {
      val(newVal, oldVal) {
        this.count += 1;
        console.log("val  is changed")
      }
    },
    computed: {
      value() {
        return this.$store.state.selectedItem;
      }
    },
    beforeMount() {
      this.val = 111;
      this.$nextTick(_ => {
        console.log(222)
        this.val = 222;
      })
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        val: 0,
        count: 0,
        timerId: null,
        textarea: '',
      }
    },
    mounted() {
      window.addEventListener('resize', function() {
        if(
          document.activeElement.tagName === 'INPUT' ||
          document.activeElement.tagName === 'TEXTAREA'
        ) {
          window.setTimeout(function() {
            if('scrollIntoView' in document.activeElement) {
              document.activeElement.scrollIntoView();
            } else {
              document.activeElement.scrollIntoViewIfNeeded();
            }
          }, 0);
        }
      });
    },
    methods: {
      buttonClick() {
        const textAreaLen = this.textarea;
        var newLines = x.match(/(\r\n|\n|\r)/g);
        var additon = 0;
        if (newLines != null) {
            additon = newLines.length;
        }
        alert(textAreaLen.length + additon)
      }
    }
  }
</script>

<style scoped>
  .container{
    height: 1000px;
  }
  .button{
    margin-top: 500px;
  }
  .textarea{
    margin-top: 300px;
    position: absolute;
    bottom: 0;

  }
</style>
