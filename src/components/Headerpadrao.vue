
    <template>
  <div>
    <v-app-bar
      color="purple darken-4"
      dark
      id="top"
    >
      <v-toolbar-title><img class="click" @click="logo" src="../../public/img/logo2menor.png" height="50px" alt="logo Simulando"></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn class="font-weight-bold" text @click="primeiro">Vestibulares</v-btn>
        <v-btn class="font-weight-bold" text @click="terceiro">Extras</v-btn>
        <v-btn class="font-weight-bold" text @click="quarto">Sobre</v-btn>
      </v-toolbar-items>

     <div class="text-center">
    <v-menu
      
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        
       <v-btn icon v-on="on">
            <img src="../../public/img/user.svg" height="40px" alt="">
          </v-btn>
      
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../../public/img/user.svg" height="40px" alt="">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Usuário</v-list-item-title>
              <v-list-item-subtitle class="font-weight-bold">Aluno indefinido</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="login">Entre</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/eua.png" height="30px" width="50px" alt="">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="login">Cadastre-se</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
      
    </v-app-bar>

    <!-- <v-app-bar
      color="purple darken-4"
      dark
      id="mobile"
    >
      <div height="100%">
              <v-toolbar-title class="d-flex justify-center"><img @click="logo" src="../../public/img/logo2menor.png" height="50px" alt="Logo Simulando - Simulados online"></v-toolbar-title>
      </div>

      <div class="flex-grow-1"></div>

      <div class="text-center">
    <v-menu
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        
       <v-btn icon v-on="on">
            <img src="../../public/img/user.svg" height="40px" alt="Imagem do usuário">
          </v-btn>
      
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../../public/img/user.svg" height="40px" alt="Imagem do usuário">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Usuário</v-list-item-title>
              <v-list-item-subtitle class="font-weight-bold">Aluno indefinido</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de entrar">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="login">Entre</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/eua.png" height="30px" width="50px" alt="Icone EUA">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="idioma">English</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de entrar">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="primeiro">Vestibulares</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de entrar">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="terceiro">Extras</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/login.svg" height="35px" alt="Icone de entrar">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="quarto">Sobre</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
        
    </v-app-bar> -->

    

  </div>
  
</template>

<style>

.fonte{
    font-family: 'Quicksand', sans-serif;
  }

.click{
  cursor: pointer;
}

@media(max-width:750px){
  #top{
    display:none;
  }
}

@media(min-width:750px){
  #mobile{
    display:none;
  }
}
</style>

<script>
import * as easings from 'vuetify/lib/services/goto/easing-patterns'

export default {
data: () => ({
      drawer: false,
      group: null,
    }),

  methods: {
    primeiro () {
      this.$router.push('/vestibulares')
    },
    terceiro () {
      this.$router.push('/extras')
    },
    quarto () {
      this.$router.push('/sobre')
    },
    logo () {
      this.$router.push('/index')
    },
    login () {
      this.$router.push('/login')
    },
    idioma () {
      this.$router.push('/ingles')
    },
  },    

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
