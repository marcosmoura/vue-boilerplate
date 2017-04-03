<template>
  <div id="app" class="container">
    <nav>
      <router-link exact to="/">{{ $t('nav.home') }}</router-link>
      <router-link exact to="/about">{{ $t('nav.about') }}</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script lang="babel">
  export default {
    name: 'app'
  }
</script>
