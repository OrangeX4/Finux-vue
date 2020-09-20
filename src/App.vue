<template>
  <breadcrumb :text="currentFolder"></breadcrumb>
  <Item name=".." description="Return to parent folder" icon="folder"></Item>
  <Item name="." description="Refresh current folder" icon="folder"></Item>
  <Item v-for="dir in dirs" :key="dir.name" :name="dir.name" :description="dir.items + ' Items'" icon="folder"></Item>
  <Item v-for="file in files" :key="file.name" :name="file.name" :description="file.showSize + ' | ' + file.lastTime" icon="file"></Item>
</template>

<script>
  import Item from './components/Item.vue'
  import Breadcrumb from './components/Breadcrumb.vue'

  export default {
    name: 'App',
    components: {
      Item,
      Breadcrumb
    },
    // created () {
    // console.log(this.$store)
    // console.log(this.$store.state.current)
    // },
    computed: {
      currentFolder() {
        return this.$store.state.current
      },
      dirs() {
        return this.$store.state.dirs
      },
      files() {
        return this.$store.state.files
      },
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