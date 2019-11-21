<template>
  <v-footer
    padless
    class="mt-10"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="purple darken-4">
        
        <v-row>
      <v-col
        v-for="n in 1"
        :key="n"
        color="purple darken-4"
        class="d-flex justify-space-around flex-wrap"
      >
        <v-card
          class="pa-2 elevation-0"
          tile  
          color="purple darken-4"
          width="250px"
          height="200px"
        >
          <div class="d-flex justify-center">
            <div class="d-flex flex-column">
              <img class="ma-5" src="../../public/img/facebook-box.png" alt="Icone Facebook">

              <img class="ma-5" src="../../public/img/instagram.png" alt="Icone Instagram">
            </div>

            <div class="d-flex flex-column">
              <img class="ma-5" src="../../public/img/twitter.png" alt="Icone Twitter">

              <img class="ma-5" src="../../public/img/youtube.png" alt="Icone Youtube">
            </div>
          </div>


        </v-card>

        <v-card
          class="pa-2 elevation-0"
          tile
          width="250px"
          color="purple darken-4"
        >
           <div class="d-flex justify-center mt-n3">
          <v-card-title class="white--text mb-2 font-weight-bold">
            Sobre
          </v-card-title>
        </div>
          
          
          <div class="d-flex flex-column justify-center">
           <v-card-text class="subtitle-1 mt-n4  white--text d-flex justify-center" @click="sobre">
            Quem somos
          </v-card-text>

          <v-card-text class="subtitle-1 mt-n4 white--text d-flex justify-center" >
            Perguntas frequêntes
          </v-card-text>
          <v-card-text class="subtitle-1 mt-n4 white--text d-flex justify-center" >
            Fale conosco
          </v-card-text>
          </div> 
        </v-card>

        <v-card
          class="pa-2 elevation-0"
          tile
          width="250px"
          color="purple darken-4"
        >
          <div class="d-flex justify-center mt-n3">
          <v-card-title class="white--text mb-2 font-weight-bold">
            Contatos
          </v-card-title>
        </div>
          
          
          <div class="d-flex flex-column justify-center ">

          <v-card-text class="subtitle-1 mt-n4 white--text d-flex justify-center" >
            55+ (16) 99777-7264
          </v-card-text>

          <v-card-text class="subtitle-1 mt-n4 white--text d-flex justify-center" >
            55+ (16) 99104-9763
          </v-card-text>
          
          <v-card-text class="subtitle-1 mt-n4 white--text d-flex justify-center" >
            fatectqsi2019@gmail.com
          </v-card-text>
          </div> 
        </v-card>

        <v-card
          class="pa-2 elevation-0"
          tile
          width="250px"
          color="purple darken-4"
        >
          <div class="d-flex justify-center mt-n3">
          <v-card-title class="white--text font-weight-bold">
            App Simulando
          </v-card-title>
        </div>

        <div class="d-flex flex-column justify-start mt-4">
              <img src="../../public/img/play.svg" alt="Icone Play Store">

              <img class="mt-2" src="../../public/img/store.svg" alt=" Icone Apple Store">
            </div>
        </v-card>
      </v-col>
    </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center cor">
        {{ new Date().getFullYear() }} — <strong>Simulando Company | Igor Alves, Murillo Miranda e Joice Marques.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style>
  .cor{
    background-color: rgb(48, 45, 45);
  }
</style>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),

    methods:{
      sobre () {
        this.$router.push('/sobre')
      },
    }
  }
</script>