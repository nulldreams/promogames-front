<template>
  <div class="principal">
    <div class="logo">
      <img class="mx-auto d-block" src="./assets/logo.png">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/style.css";
  @import "./assets/css/animations.css";
</style>
