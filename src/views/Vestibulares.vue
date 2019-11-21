<template>
    <v-app>
        

        <div class="aparecer">
      <HeaderMobile />
    </div>

    <div class="sumir">
      <Headerpadrao />
    </div>

    <div class="mt-5">

    </div>

        <div class="mt-12 mx-10 d-flex justify-space-between align-center">
          <div class="headline">
            Vestibulares disponíveis
          </div>

          <div class="font-italic font-weight-light ml-4">
            Atualizado 18/10/2019
          </div>
        </div>

    <div class="d-flex justify-center flex-wrap pt-2 px-10">
        <v-card
    :loading="loading"
    class="my-5"
    min-width="274"
    max-width="374"
  >
    <v-img
      class="img-size"
      src="../../public/img/banner-enem.jpg"
      alt="Logo Enem"
    ></v-img>

    <v-card-title class="headline font-weight-bold">Vestibular Enem</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4"></div>
      </v-row>

      <div class="my-4 title black--text">
        Todo o Brasil
      </div>

      <div class="subtitle-1 black--text">Principal vestibular do país, sendo possível ingressar tanto em universidade públicas quanto em particulares.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="black--text">Escolha o Modo</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="purple darken-4 white--text"
        column
      >
        <v-chip>Fácil</v-chip>

        <v-chip>Normal</v-chip>

        <v-chip>Difícil</v-chip>

        <v-chip>Completo</v-chip>
      </v-chip-group>
    </v-card-text>

      <v-card-actions class="d-flex justify-center mt-n12 mb-5" @click="enem">
      <button class="botao font-weight-bold">Iniciar simulado</button>
    </v-card-actions>
  </v-card>


  <v-card
    :loading="loading"
    class="mx-auto my-5"
    min-width="274"
    max-width="374"
  >
    <v-img
      class="img-size"
      src="../../public/img/banner-fatec.jpg"
      alt="logo Fatec"
    ></v-img>

    <v-card-title class="headline font-weight-bold">Vestibular Fatec</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4"></div>
      </v-row>

      <div class="my-4 title black--text">
        Estado de São Paulo
      </div>

      <div class="subtitle-1 black--text">Faculdade voltada para tecnologia formando tecnólogos preparados para o mercado de trabalho.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="black--text">Escolha o Modo</v-card-title>

    <v-card-text>
      <v-chip-group

        active-class="purple darken-4 white--text"
        column
      >
        <v-chip>Fácil</v-chip>

        <v-chip>Normal</v-chip>

        <v-chip>Difícil</v-chip>

        <v-chip>Completo</v-chip>
      </v-chip-group>
    </v-card-text>

    
      <v-card-actions class="d-flex justify-center mt-n12 mb-5" @click="fatec">
      <button class="botao font-weight-bold">Iniciar simulado</button>
    </v-card-actions>
  </v-card>

  <v-card
    :loading="loading"
    class="my-5"
    min-width="274"
    max-width="374"
  >
    <v-img
      height="200"
      src="../../public/img/banner-fuvest.jpg"
      alt="Logo Fuvest"
    ></v-img>

    <v-card-title class="headline font-weight-bold">Vestibular Fuvest</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4"></div>
      </v-row>

      <div class="my-4 title black--text">
        Estado de São Paulo
      </div>

      <div class="subtitle-1 black--text">Vestibular para ingressar na Universidade de São Paulo (USP), possuí mais de uma fase e é muito concorrido.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="black--text">Escolha o Modo</v-card-title>

    <v-card-text>
      <v-chip-group
        active-class="purple darken-4 white--text"
        column
      >
        <v-chip>Fácil</v-chip>

        <v-chip>Normal</v-chip>

        <v-chip>Difícil</v-chip>

        <v-chip>Completo</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="d-flex justify-center mt-n12 mb-5" @click="fuvest">
      <button class="botao font-weight-bold">Iniciar simulado</button>
    </v-card-actions>
  </v-card>
  </div>

  <v-card

  class="mx-10 d-flex justify-center align-center flex-wrap pa-5"
  
  >
  <div class="mx-5 my-5 title text-center">
    Já tem uma conta e que dar continuação ao simulado em que parou? Clique em logar e veja seu progresso!
  </div>

  <div class="mx-5">
    <v-btn depressed color="purple darken-4 white--text" @click="logar">Logar</v-btn>
  </div>

  </v-card>

        <Footer />
    </v-app>
</template>

<style>

/* botões */

@media(max-width: 390px){
  .img-size{
    height: 150px;
  }
}


.botao{
  height: 50px;
  font-size: 1.2rem;
  margin-top: 50px;
	color: #FFF;
	background: rgb(124, 21, 219);
	text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
	border-radius: 0.5em;
	box-shadow: 3px 3px 0 3px rgb(61, 5, 126);
	transition: box-shadow 0.3s ease, transform 0.3s ease;
  border: 0 none;
    outline: 0
}
.botao:active {
    box-shadow: 0 0 0 0 #333,
    inset 4px 4px 4px #333;
    transform: translate(6px, 6px);
    border: 0 none;
    outline: 0
}

.aparecer{display: none;}

@media(max-width: 735px){
    .aparecer{display: flex;}

    .sumir{display: none;}
}

</style>

<script>
import HeaderMobile from '../components/HeaderMobile';
import Headerpadrao from '../components/Headerpadrao';
import Footer from '../components/Footer';

export default {
  components: {
    HeaderMobile,
    Headerpadrao,
    Footer,
  },
  data: () => ({
      loading: false,
      selection: 1,
      selection: 2,
      selection: 3,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      logar () {
      this.$router.push('/login')
    },
      enem () {
        this.$router.push('/adm/enem')
      }, 
      fatec () {
        this.$router.push('/adm/fatec')
      }, 
      fuvest () {
        this.$router.push('/adm/fuvest')
      }, 
    },
};
</script>