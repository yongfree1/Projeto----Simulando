<template>
  <section class="banner">
    <div class="escuro">
      
        <div>
          <div class="my-12">
            <img class="anima" src="../../public/img/Logo_vetorizado.svg" height="130" alt="Logo Simulando - Simulados online">
          </div>
          

          <v-card-actions class="d-flex justify-center" @click="inicio">
            <button class="botao font-weight-bold">Iniciar simulado</button>
          </v-card-actions>
            
        </div>
   
    </div>
  </section>
</template>

<style>

    .banner{
    background-color: rgb(0, 0, 0, 0.6);
    background-image: url("../../public/img/prova.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center; 
    width: 100%;
    height: 100%;
  }
  .escuro{
    background-color: rgb(0, 0, 0, 0.7);
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

  .anima{
    animation-name: animacao1;
    animation-duration: 2.0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }

  @keyframes animacao1{
    0%{
      
    }
    100%{
        transform: scale(1.1);
    }
}

.botao{
  height: 80px;
  width: 250px; 
  font-size: 1.6rem;
	padding: 0.5em 1em;
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

</style>

<script>
  export default {

      methods: {

    inicio () {
      this.$router.push('/index')
    },
  },

  }
</script>