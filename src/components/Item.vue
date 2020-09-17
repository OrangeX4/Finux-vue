<template>
  <div>
    <img src="../assets/folder-close.png" width="50" height="50">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div * {
    vertical-align: middle;
  }

  div {
    padding: 0;
    margin: 0;
    width: 100%
  }
</style>