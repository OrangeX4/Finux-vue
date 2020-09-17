<template>
  <Item msg="Item 1"></Item>
  <Item msg="Item 2"></Item>
  <Item msg="Item 3"></Item>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,body {
  width: 100%;
  height: 100%
}
</style>
