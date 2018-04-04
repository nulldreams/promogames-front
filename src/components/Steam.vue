<template>
  <div>
    <div class="hero">
      <div class="logo">
        <img class="mx-auto d-block" src="../assets/images/steam.png">
      </div>
    </div>
    <steam/>
  </div>
</template>

<script>
  import steam from '@/components/promocoes/steam'
  
  export default {
    name: 'principal',
    components: {
      steam
    }
  }
</script>

