<template>
  <button :type="type" class="ui-button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .ui-button {
    height: 36px;
    margin: 0;
    padding: 0 8px;
    border: none;
  }
</style>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>
