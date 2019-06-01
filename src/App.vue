<template>
  <div id="app">
    <div style="padding:20px;">
      <data-list></data-list>
      <hello-world></hello-world>
    </div>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DataList from './components/DataList.vue'
import api_server from './api/server.js'


export default {
  name: 'app',
  data() {
    return {
      
    }      
  },
  created() {
    // this.channelAjax();
  },
  methods: {
      
  },
  components: {
    HelloWorld,
    DataList,  
  }
}
</script>

<style>

</style>
