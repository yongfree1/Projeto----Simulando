<template>
    <v-app id="inside">

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
              <img src="../../../public/img/igor.jpg" height="40px" alt="Imagem do Usuário">
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title><b>{{ user.nome }}</b></v-list-item-title>
              <v-list-item-subtitle><b>{{ user.status }}</b></v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
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
           
            <v-list-item-title>Inserir alunos</v-list-item-title>
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
        <v-container>

          <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nome"
      class="elevation-1"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Usuários</v-toolbar-title>
          <v-spacer />
          <v-btn
            color="primary"
            to="/dashboards/_id"
            class="elevation-1"
            small
            fab
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon
          color="primary"
          class="mr-2"
          @click="editar(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="pink"
          @click="excluir(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        Não há registros cadastrados!
      </template>
    </v-data-table>
            

        </v-container>
    </v-content>

    <Footer />
        
    </v-app>
</template>

<script>
import Footer from '../../components/Footer';

  export default {
    props: {
      source: String,
    },
    data  (){
      return{
        drawer: null,
      length: 3,
      onboarding: 0,

      headers: [
        { text: 'Nome do usuário', value: 'nome' },
        { text: 'Instituição de ensino', value: 'apelido' },
        { text: 'E-mail', value: 'email' },
        { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],

      usuarios: []
      }
    },

    created () {
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) this.usuarios = usuarios
  },
   
    computed: {
      user () {
        return this.$ls.get('user')
      },

    },

    components: {
    Footer,
  },

    methods: {

      editar (item) {
      this.$router.push(`/${item.id}`)
    },

    excluir (item) {
      let dados = this.$ls.get('usuarios')
      dados = dados.filter(u => u.id != item.id)
      this.$ls.set('usuarios', dados)
      this.usuarios = dados
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
    },
}
</script>
