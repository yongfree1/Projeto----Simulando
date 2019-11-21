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
              <v-list-item-title><b>{{ user.nombre }}</b></v-list-item-title>
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
           
            <v-list-item-title @click="inseriru">Inserir alunos</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Inserir notícias</v-list-item-title>
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

            <v-form v-model="valid">
      <v-card>
        <v-card-title>{{ modo }} usuário</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="nome"
            :counter="50"
            :rules="nomeRegras"
            label="Nome do Usuário"
            required />

          <v-text-field
            v-model="email"
            :counter="100"
            :rules="emailRegras"
            label="E-mail"
            autocomplete="new-password"
            required />

            <v-text-field
            v-model="apelido"
            :counter="50"
            :rules="apelidoRegras"
            label="Instituição de Ensino"
            required />

          <v-text-field
            type="password"
            v-model="senha"
            :counter="50"
            :rules="senhaValidacao"
            label="Senha"
            autocomplete="new-password"
            v-if="modo == 'Incluir'" />
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple darken-4" class="white--text" @click="salvar" :disabled="!valid">
            <v-icon small class="mr-2">mdi-content-save</v-icon>
            Salvar
          </v-btn>
          <v-btn color="secondary" text @click="cancelar">
            <v-icon small class="mr-2">mdi-undo</v-icon>
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

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
    data () {
        return{
      drawer: null,
      length: 3,
      onboarding: 0,

      id: this.$route.params.id,
      modo: this.$route.params.id == 'incluir' ? 'Incluir' : 'Editar',
      nome: '',
      apelido: '',
      email: '',
      senha: '',
      valid: true,
      nomeRegras: [
        v => !!v || 'Nome completo é obrigatório',
        v => (v && v.length <= 50) || 'Nome completo deve ter no máximo 50 caracteres'
      ],
      apelidoRegras: [
        v => !!v || 'Instituição é obrigatório',
        v => (v && v.length <= 50) || 'Instituição deve ter no máximo 50 caracteres'
      ],
      emailRegras: [
        v => !!v || 'E-mail é obrigatório',
        v => (v && v.length <= 100) || 'E-mail deve ter no máximo 100 caracteres',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ter um formato válido'
      ],
      senhaValidacao: [
        v => this.modo == 'Incluir' && (!!v || 'Senha é obrigatória'),
        v => this.modo == 'Incluir' && ((v && v.length <= 100) || 'Senha deve ter no máximo 50 caracteres')
      ]
    }},

    created () {
    const usuarios = this.$ls.get('usuarios')
    if (usuarios) {
      const usuario = usuarios.find(u => u.id == this.id)
      if (usuario) {
        this.nome = usuario.nome
        this.apelido = usuario.apelido
        this.email = usuario.email
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
      let dados = this.$ls.get('usuarios')
      if (!dados) dados = []

      if (this.modo == 'Incluir') {
        dados.push({
          id: this.gerarId(),
          nome: this.nome,
          apelido: this.apelido,
          email: this.email,
          senha: this.senha
        })
      } else {
        const i = dados.findIndex(u => u.id == this.id)
        dados[i].nome = this.nome
        dados[i].apelido = this.apelido
        dados[i].email = this.email
      }

      this.$ls.set('usuarios', dados)
      this.$router.push('/dashboards/incluir-user')
    },

    cancelar () {
      this.$router.push('/dashboards/incluir-user')
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
      inseriru () {
      this.$router.push('/dashboards/incluir-user')
        },
    },
}
</script>
