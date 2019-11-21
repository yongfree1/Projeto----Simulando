<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense
      >
        <v-list-group value="true">
       <template v-slot:activator
       >
          <v-list-item-avatar>
              <img src="../../../public/img/murillo.jpg" height="40px" alt="Imagem do Usuário">
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title><b>{{ user.nombre }}</b></v-list-item-title>
              <v-list-item-subtitle><b>{{ user.status }}</b></v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../../public/img/account.svg" height="30px" alt=" Icone de conta">
            </v-list-item-action>
            <v-list-item-title class="pl-1" >Conta</v-list-item-title>
          </v-list-item>

          
          <v-list-item link>
            <v-list-item-action>
              <img src="../../../public/img/settings.svg" height="35px" alt=" Icone de configuração">
            </v-list-item-action>
            <v-list-item-title >Configurações</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../../public/img/logout.svg" height="30px" alt=" Icone de Sair">
            </v-list-item-action>
            <v-list-item-title @click="sair" class="pl-1">Sair</v-list-item-title>
          </v-list-item>

        </v-list>
        
           </v-list-group>

      </v-list>
      
        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
           
            <v-list-item-title @click="primeiro"> Vestibulares</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title @click="segundo">Extras</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="purple darken-4"
      dark
      width="100%"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-container 
      height="100%"
      class="central d-flex justify-center"
      color="purple darken-4"
      >
        <img @click="inicio"  src="../../../public/img/logo2menor.png" height="45px" width="200px" alt="Logo Simulando - Simulados online">
      </v-container>

      
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height flex-wrap"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          class="flex-wrap"
        >

        
         <!-- Card  -->
        
    <v-row
    align="center"
    justify="center"
    height="350px"
    width="100%"
    class="close-card"
  >
    <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto d-flex"
          height="150"
          width="1000"

        > <div class="d-flex align-center">
           <img class="ma-6" src="../../../public/img/logofat.jpg" height="50px"  alt="logo fatec taquaritinga">
        </div> 
          <div class="progresso">
            <v-card-text class="title" min-width="900px" >Seu progresso no vestibular da Fatec</v-card-text>
          <div class="prog">
            <div class="prog-qtd qtd1"></div>
          </div>
          <p class="font-weight-black porcentagem1">80%</p>
          <div class="btn mt-n10" min-width="100px">
            <div class="my-2" @click="fatec">
            <v-btn depressed color="deep-orange" class="white--text maior">Continuar</v-btn>
            </div>
          </div>
          </div>
          
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <v-row
    align="center"
    justify="center"
    height="350px"
    width="1200px"
    class="close-card"
  >
    <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto d-flex"
          height="150"
          width="1000"
        >
          <div class="d-flex align-center">
           <img src="../../../public/img/enem-logo.png" height="130px" alt="logo enem">
        </div> 
          <div class="progresso">
            <v-card-text class=" title" min-width="900px" >Seu progresso no vestibular do Enem</v-card-text>
          <div class="prog">
            <div class="prog-qtd qtd2"></div>
          </div>
          <p class="font-weight-black porcentagem1">50%</p>
          <div class="btn mt-n10" min-width="100px">
            <div class="my-2 " @click="enem">
            <v-btn depressed color="deep-orange" class="white--text maior">Continuar</v-btn>
            </div>
          </div>
          </div>
          
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <v-row
    align="center"
    justify="center"
    height="350px"
    width="1200px"
    class="close-card"
  >
    <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto d-flex"
          height="150"
          width="1000"
        >
          <div class="d-flex align-center">
           <img src="../../../public/img/logofuv.png" height="80px" alt="logo fuvest">
        </div> 
          <div class="progresso">
            <v-card-text class=" title" min-width="900px" >Seu progresso no vestibular da Fuvest</v-card-text>
          <div class="prog">
            <div class="prog-qtd qtd3"></div>
          </div>
          <p class="font-weight-black porcentagem1">0%</p>
          <div class="btn mt-n10" min-width="100px">
            <div class="my-2" @click="fuvest">
            <v-btn depressed color="deep-orange" class="white--text maior">Iniciar</v-btn>
            </div>
          </div>
          </div>
          
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <v-row
    align="center"
    justify="center"
    height="350px"
    width="1200px"
    class="close-card"
  >
    <v-col cols="12">
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto d-flex"
          height="200"
          width="1000"
        >
           <v-col cols="12" md="6">
             <v-card-title class="mt-n5">
          Deixe seu Feedback!
        </v-card-title>
        <v-textarea
          solo
          name="input-7-4"
          label="Comentário"
          min-width="50px"
        ></v-textarea>
      </v-col>
        <v-col>
          <div class="card-fed">
            <p class=""> Gostariamos que desse um FeedBack sobre o nosso sistema de simulados para estarmos sempre em dia com nossos usuários. </p>
            <div class="descri-fed d-flex justify-end mt-6">
              <div class="btn-feed" color="black">
                <v-btn depressed color="deep-orange" class="white--text maior">Enviar</v-btn>
              </div>
            </div>
          </div>
        </v-col>
          
        
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <!-- COMPONENTS OCULTOS PARA SER USADO NO MODO MOBILE -->

  <div class="mobile">
    <v-card
    class="mx-auto mt-5"
    max-width="444"

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Fatec</v-list-item-title>
        <v-list-item-subtitle>Seu progresso no vestibular da Fatec</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        width="110"
        height="70"
      ><img class="ma-6" src="../../../public/img/banner-fatec.jpg"  alt="logo fatec taquaritinga"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="d-flex justify-space-around">
      <v-btn depressed color="deep-orange" class="white--text ma-4" @click="fatec">Continuar</v-btn>

        <div class="prog2 mt-n5">
          <div class="prog-qtd2 qtd4"></div><p>30%</p> 
        </div>

        
    </v-card-actions>
  </v-card>


  <v-card
    class="mx-auto mt-5"
    max-width="444"

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Enem</v-list-item-title>
        <v-list-item-subtitle>Seu progresso no vestibular do Enem</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        width="110"
        height="70"
      ><img class="ma-6" src="../../../public/img/logoenem.png"  alt="logo Enem"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="d-flex justify-space-around">
      <v-btn depressed color="deep-orange" class="white--text ma-4" @click="enem">Continuar</v-btn>

        <div class="prog2 mt-n5">
          <div class="prog-qtd2 qtd5"></div><p>90%</p> 
        </div>

        
    </v-card-actions>
  </v-card>

  <v-card
    class="mx-auto mt-5"
    max-width="444"

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Fuvest</v-list-item-title>
        <v-list-item-subtitle>Seu progresso no vestibular da Fuvest</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        width="110"
        height="50"
      ><img class="ma-6" src="../../../public/img/logofuv.png"  alt="logo Fuvest"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="d-flex justify-space-around">
      <v-btn depressed color="deep-orange" class="white--text ma-4" @click="fuvest">Continuar</v-btn>

        <div class="prog2 mt-n5">
          <div class="prog-qtd2 qtd6"></div><p>60%</p> 
        </div>

        
    </v-card-actions>
  </v-card>

  <v-card
    class="mx-auto mt-5"
    max-width="444"
    

  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 text-center">Deixe seu Feedback!</v-list-item-title>
        <v-col cols="12" md="12">
        <v-textarea
          v-model="comente"
          solo
          name="input-7-4"
          label="Comentário"
          min-width="100px"
        ></v-textarea>

        <p class="text-center"> Gostariamos que desse um FeedBack sobre o nosso sistema de simulados para estarmos sempre em dia com nossos usuários. </p>
      </v-col>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="d-flex justify-space-around">
      <v-btn depressed color="deep-orange" class="white--text mb-5" @click="salvar" :disabled="!valid">Enviar</v-btn>
    </v-card-actions>
  </v-card>

  </div>
          
        </v-row>
      </v-container>
    </v-content>
    
  <Footer />

  </v-app>
</template>

<style>
  .central{
   width: 1300px;
  }

  /* Progresso Desktop  */

  .prog{
    background-color: rgb(209, 211, 212);
    width: 600px;
    height: 15px;
    margin-left: 10px;
    border-radius: 10px;
  }

  .prog-qtd{
    background-color: orangered;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }
  .qtd1{
    width: 80%;
  }

  .qtd2{
    width: 50%;
  }

  .qtd3{
    width: 0%;
  }

  /* Progresso Mobile */

    .prog2{
    background-color: rgb(209, 211, 212);
    width: 130px;
    height: 15px;
    margin-left: 10px;
    border-radius: 10px;
  }

  .prog-qtd2{
    background-color: orangered;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
  }
  .qtd4{
    width: 40%;
  }

  .qtd5{
    width: 90%;
  }

  .qtd6{
    width: 60%;
  }

  .mobile{
    display: none;
  }


  .porcentagem1{
    font-size: 1.6rem;
    margin-left: 10px;
  }

  .btn{
    width: 780px;
    display: flex;
    justify-content: flex-end;
  }
  .card-fed{
    padding: 10px;
    height: 180px;
    display: flex;
    flex-wrap: wrap;
  }
  @media(max-width: 1045px){
    .close-card{
      display: none;
    }
    .mobile{
      display: inline;
      

    }
  }
  
</style>

<script>
import Footer from '../../components/Footer';

  export default {
    props: {
      source: String,
    },
    data () {
      return{
      id: this.$route.params.id,
      modo: this.$route.params.id == 'incluir' ? 'Incluir' : 'Editar',

      drawer: null,
      length: 3,
      onboarding: 0,
      comente: '',
      valid: true,
      }
    },

    created () {
    const comentario = this.$ls.get('comentario')
    if (comentario) {
      const comentario = comentario.find(c => c.id == this.id)
      if (comentario) {
        this.comente = comentario.comente
      }
    }
  },

    computed: {
      user () {
        return this.$ls.get('user')
      }
    },

    components: {
    Footer,
    },

    methods: {
      gerarId () {
      return Math.round(Math.random() * 9999)
    },

    salvar () {
      let letras = this.$ls.get('comentario')
      if (!letras) letras = []

      if (this.modo == 'Incluir') {
        letras.push({
          id: this.gerarId(),
          comente: this.comente,
        })
      } else {
        const i = letras.findIndex(c => c.id == this.id)
        letras[i].comente = this.comente
      }

      this.$ls.set('comentario', letras)
      this.$router.push('/dashboads/dashboard-adm')
    },


      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
      sair () {
      this.$router.push('/index')
    },
      inicio () {
      this.$router.push('/index')
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

      primeiro () {
        this.$router.push('/vestibulares')
      }, 
      segundo () {
        this.$router.push('/extras')
      }, 
    },
    
    
  }
</script>
