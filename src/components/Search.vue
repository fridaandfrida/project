<template>
    <div class="search">
        <a-input-search placeholder="input search text" @search="onSearch" enterButton />
        <a-button class="editable-add-btn">search</a-button>
    </div>
</template>

<script>
export default {
    name: 'Search',

    props: {
        msg: String
    },
    // data() {
    //   return {

    //   }
    // },
    // created() {

    // },
    methods: {
      onSearch (value) {
            console.log(value)
          },
    },
    // components: {
    //   EditableCell,
    // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
