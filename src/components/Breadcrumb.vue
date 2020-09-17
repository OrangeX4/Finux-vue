<template>
  <p>{{ text }}</p>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
        text: String
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