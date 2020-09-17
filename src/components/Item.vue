<template>
  <div class="root">
    <img src="../assets/folder.png" width="50" height="50">
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
  .root {
    vertical-align: middle;
    height: 50px;
  }

  span {
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    padding-top: 10px;
    height: 15px;
    float: left;
  }

  img {
    padding-left: 20px;
    float: left;
  }

</style>