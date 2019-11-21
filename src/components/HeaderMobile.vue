<template>
  <div>
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
              <img src="../../public/img/user.svg" height="40px" alt="Imagem do Usuário">
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title><b>Usuário</b></v-list-item-title>
              <v-list-item-subtitle><b>Não conectado</b></v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="30px" alt=" Icone de conta">
            </v-list-item-action>
            <v-list-item-title class="pl-1 subtitle-1" @click="login" >Entrar</v-list-item-title>
          </v-list-item>

          
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/adduser.svg" height="30px" alt=" Icone de configuração">
            </v-list-item-action>
            <v-list-item-title @click="login" class="subtitle-1" >Cadastre-se</v-list-item-title>
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

          <v-list-item link>
            <v-list-item-title @click="terceiro">Sobre</v-list-item-title>
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
        <img src="../../public/img/logo2menor.png" height="45px" width="200px" alt="Logo Simulando - Simulados online">
      </v-container>

      
    </v-app-bar>

    
    

  </div>
</template>

<script>
  export default {
      props: {
      source: String,
    },
    
    data: () => ({
      drawer: null,
      length: 3,
      onboarding: 0,
    }),

    methods: {
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
      
      login () {
      this.$router.push('/login')
      },
      primeiro () {
        this.$router.push('/vestibulares')
      }, 
      segundo () {
        this.$router.push('/extras')
      }, 
      terceiro () {
        this.$router.push('/sobre')
      }, 
    },
    
    
  }
</script>
