<template>
  <h1 class="say-hello">{{ sayHello() }}</h1>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    name: 'blank-component',
    methods: {
      sayHello() {
        return 'Hello'
      }
    }
  }
</script>
