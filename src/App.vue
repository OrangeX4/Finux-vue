<template>
  <breadcrumb text="/home"></breadcrumb>
  <Item name=".." description="Return to parent" icon="folder"></Item>
  <Item name="Folder 2" description="3 Items" icon="folder"></Item>
  <Item name="File 1" description="233 KiB" icon="file"></Item>
</template>

<script>
import Item from './components/Item.vue'
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  name: 'App',
  components: {
    Item,
    Breadcrumb
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
