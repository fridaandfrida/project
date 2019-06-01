<template>
  <div class="hello">
   
    <a-button @click="success">Success</a-button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    success () {
        this.$message.success('This is a message of success');
      },
      error () {
        this.$message.error('This is a message of error');
      },
      warning () {
        this.$message.warning('This is message of warning');
      },
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
