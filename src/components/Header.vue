
    <template>
  <div>
    <v-app-bar
      color="purple darken-4 "
      dark
      id="top"
    >
      <v-toolbar-title><img @click="logo" src="../../public/img/logo2menor.png" height="50px" alt="Logo Simulando - Simulados online"></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn class="font-weight-bold" text @click="primeiro">Vestibulares</v-btn>
        <v-btn class="font-weight-bold" text ref="button" @click="$vuetify.goTo(target, options)">Notícias</v-btn>
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
              <img src="../../public/img/login.svg" height="35px" alt="Icone de login">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="login">Entre</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/eua.png" height="30px" width="50px" alt=" Icone EUA">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold">English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
      
    </v-app-bar>

    

  </div>
  
</template>

<style>

/* .fonte{
    font-family: 'Quicksand', sans-serif;
  } */
</style>

<script>
import * as easings from 'vuetify/lib/services/goto/easing-patterns'

export default {
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
  }, 
    data () {
      return {
        drawer: null,
        group: null,
        type: 'number',
        number: 1600,
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
      }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      },
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
