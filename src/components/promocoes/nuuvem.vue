<template>
  <section class="promocoes wrap">
    <div class="cards" v-for="promo in promocoes" :key="promocoes">
      <a :href="promo.url_nuuvem" target="_blank">
        <li class="card wrap">
          <img :src="promo.img" alt="" class="img-fluid rounded">
          <p class="nome">{{promo.nome}}</p>
          <div class="valores">
            <div class="desconto">{{promo.desconto}}</div>
            <div class="preco">
              <span class="antigo s">{{promo.valor.antigo}}</span>
              <span class="novo">R$ {{promo.valor.novo_integer}}{{promo.valor.novo_decimal}}</span>
            </div>
          </div>
        </li>
      </a>
    </div>
    <!-- <div class="more">
      <p class="fa fa-chevron-circle-down fa-2x"></p>
    </div> -->
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