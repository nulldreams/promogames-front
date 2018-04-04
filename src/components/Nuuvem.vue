<template>
  <div>
    <div class="hero">
      <div class="logo">
        <img class="mx-auto d-block" src="https://assets.nuuvem.com/assets/fe/images/logo-nuuvem-contrast-28c4275a3339894d051da6dc86486708.svg">
      </div>
    </div>
    <nuuvem/>
  </div>
</template>

<script>
  import nuuvem from '@/components/promocoes/nuuvem'
  
  export default {
    name: 'principal',
    components: {
      nuuvem
    }
  }
</script>

