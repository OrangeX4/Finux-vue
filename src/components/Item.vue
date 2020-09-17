<template>
  <div class="root">
    <img src="../assets/folder.png">
    <div class="text"> 
      <span class="name">{{ name }}</span>
      <br />
      <span class="description">{{ description }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      name: String,
      description: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .root {
    vertical-align: middle;
    height: 70px;
  }

  .text {
    padding-top: 6px;
  }

  .name {
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    padding: 10px;
    height: 15px;

  }
  .description {
    font-size: 12px;
    color: #A9A9A9;
    padding-left: 10px;
    height: 12px;
  }

  img {
    padding-left: 20px;
    float: left;
    width: 50px;
    height: 50px;
  }

</style>