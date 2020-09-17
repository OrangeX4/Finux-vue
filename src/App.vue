<template>
  <Item name="Folder 1" description="0 items"></Item>
  <Item name="Folder 2" description="3 items"></Item>
  <Item name="Folder 3" description="2 items"></Item>
</template>

<script>
import Item from './components/Item.vue'

export default {
  name: 'App',
  components: {
    Item
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 30px;
}

/* *{border:1px solid red !important;} */

</style>
