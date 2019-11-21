
    <template>

    <v-app-bar
      app
      color="purple darken-4"
      dark
      width="100%"
    >
      <div class="text-center">
    <v-menu
      v-model="menu"
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
              <img src="../../public/img/login.svg" height="25px" alt="Icone de login">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="outro">Fazer outro simulado</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/logout.svg" height="25px" width="40px" alt=" Icone EUA">
            </v-list-item-action>
            <v-list-item-title class="font-weight-bold" @click="sair">Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
      </div>
  

      <v-container 
      height="100%"
      class="central d-flex justify-center"
      color="purple darken-4"
      >
        <img @click="inicio"  src="../../public/img/logo2menor.png" height="45px" width="200px" alt="Logo Simulando - Simulados online">
      </v-container>



    </v-app-bar>
</template>

<style>
    .borda{
        border-radius: 180px;
    }
</style>

<script>
  export default {
    methods: {
      sair () {
      this.$router.push('/index')
    },
      outro () {
      this.$router.push('/vestibulares')
    },
      inicio () {
      this.$router.push('/index')
    },
    }
  }
</script>