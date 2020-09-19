<template>
  <p @click="doCopy">{{ isSpace ? showedText : text }}</p>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      text: String
    },
    data(){
      return {
        isSpace: true
      }
    },
    methods: {
      doCopy() {
        this.$data.isSpace = !this.$data.isSpace
        if(this.$data.isSpace == false)
        alert('Can not copy, please copy it by yourself.')
      }
    },
    computed: {
      showedText() {
        return this.$props.text.replace(/\//g, ' / ')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    font-size: 20px;
    font-weight: bolder;
    padding-left: 20px;
    height: 20px;
  }
</style>