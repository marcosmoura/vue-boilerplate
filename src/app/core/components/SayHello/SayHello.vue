<template>
  <h1 class="say-hello">{{ sayHello() }}</h1>
</template>

<style lang="scss" scoped>

</style>

<script lang="babel">
  export default {
    name: 'say-hello',
    methods: {
      sayHello() {
        return 'Hello'
      }
    }
  }
</script>
