<template>
  <div class="container">
    <nav>
      <router-link exact to="/">Home</router-link>
      <router-link exact to="sign-up">Sign Up</router-link>
      <router-link exact to="sign-in">Sign In</router-link>
      <router-link exact to="recover-password">Recover Password</router-link>
      <router-link exact to="about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
