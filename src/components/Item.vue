<template>
  <div class="root">
    <img :src="imgStr">
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
      description: String,
      icon: String
    },
    data(){
      return{
          folder: require('../assets/folder.png'),
          file: require('../assets/file.png')
      }
    },
    computed:{
      imgStr() {
        if(this.$props.icon == "folder") return this.$data.folder
        else if(this.$props.icon == "file") return this.$data.file
        else return this.$data.file
      }
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