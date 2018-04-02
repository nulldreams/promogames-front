<template>
  <section class="promocoes">
    <div class="box" v-for="promo in promocoes" :key="promocoes">
      <div class="card">
        {{promo.nome}}
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios'

  export default {
    name: "nuuvem",
    data() {
      return {
        promocoes: [],
        errors: []
      }
    },
    created() {
      axios
        .get("https://promogames-nuuvem.herokuapp.com/promocoes/1")
        .then(response => {
          this.promocoes = response.data.promocoes
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>