<template>
  <div id="app" class="container">
    <nav>
      <router-link exact to="/">Home</router-link>
      <router-link exact to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script lang="babel">
  export default {
    name: 'app'
  }
</script>
