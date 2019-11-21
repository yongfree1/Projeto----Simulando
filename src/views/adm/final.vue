<template>
  <section class="banner">
    <div class="escuro">
      
        <v-card class="estilo">
            <div class="mx-5 mt-5">
                <v-card-title class="display-2 font-weight-black cor ">Simulado finalizado</v-card-title>
                <v-card-text class="mb-n10 ml-2 mt-10">O que deseja fazer agora?</v-card-text>
            <div class="d-flex flex-wrap justify-center">
                <div class=" my-10">
                    <v-btn color="purple darken-4 white--text" @click="outro">Fazer outro simulado</v-btn>
                </div>

                <div class="ml-5 my-10">
                    <v-btn color="purple darken-4 white--text" @click="inicio">Voltar ao início</v-btn>
                </div>
            </div> 
            </div>
           
            
        </v-card>
   
    </div>
  </section>
</template>

<style>

    .banner{
    background-color: rgb(0, 0, 0, 0.6);
    background-image: url("../../../public/img/prova.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; 
    width: 100%;
    height: 100%;
  }
  .escuro{
    background-color: rgb(0, 0, 0, 0.6);
    height: 100%;
    padding: 50px;
    display:flex;
    flex-wrap: wrap;
    align-items: center;
      justify-content: space-around;
      align-items: center;    
  }

  .estilo{ border-radius: 10px 60px;}

  .cor{color: #2f0763; background-color: white}

</style>

<script>
  export default {

      methods: {
    outro () {
      this.$router.push('/vestibulares')
    },

    inicio () {
      this.$router.push('/index')
    },
  },

  }
</script>