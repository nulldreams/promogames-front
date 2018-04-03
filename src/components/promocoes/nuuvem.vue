<template>
  <div>
    <section class="promocoes wrap">
      <div class="cards" v-for="promo in promocoes" :key="promo.id">
        <a :href="promo.url_nuuvem" target="_blank">
          <li class="card wrap grow">
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
    </section>
    <div class="more">
      <!-- <a class="fa fa-chevron-circle-down fa-2x"></a> -->
      <a v-show="!loading" class="rounded grow" v-on:click="loadMore(pagina)">Mais Jogos</a>
      <vue-loading v-show="loading" type="bubbles" color="#5f27cd" :size="{ width: '50px', height: '50px' }"></vue-loading>  
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import vueLoading from 'vue-loading-template'

  export default {
    name: "nuuvem",
    components: {
      vueLoading
    },
    data() {
      return {
        pagina: 2,
        loading: false,
        promocoes: [],
        errors: []
      }
    },
    created() {
      this.loading = true
      axios
        .get("https://promogames-nuuvem.herokuapp.com/promocoes/1")
        .then(response => {
          this.promocoes = response.data.promocoes
          this.loading = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      loadMore: function (page) {
      this.loading = true
      axios
        .get(`https://promogames-nuuvem.herokuapp.com/promocoes/${page}`)
        .then(response => {
          this.promocoes = this.promocoes.concat(response.data.promocoes)
          this.loading = false
          this.pagina++
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  }
</script>