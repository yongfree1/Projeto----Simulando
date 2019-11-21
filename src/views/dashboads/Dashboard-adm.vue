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
           
            <v-list-item-title @click="inseriru">Inserir alunos</v-list-item-title>
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

            <v-row 
            class="flex-column"
            cols="12"
            >

            <v-card class="d-flex flex-wrap justify-space-around mx-5" >

                
                    <v-card class="elevation-0 pa-5 d-flex flex-column justify-start text-wrap" width="400" min-height="270" >
                        <v-card-title class="headline mb-4 text-wrap">Dados estatísticos Simulando</v-card-title>
                        <v-list-item-subtitle class="subtitle-1 text-wrap">Dados de acesso do simulando, indicando crescimento nos últimos meses. Total de acessos na barra de progresso circular ao lado indicando acréscimo de 75% no mês de Novembro.</v-list-item-subtitle>
                    </v-card>

                    <div>
                        <v-progress-circular
                         :rotate="-90"
                         :size="200"
                         :width="25"
                         :value="value"
                         color="orange accent-4"
                        >
                         {{ value }}
                        </v-progress-circular> 
                    </div>  
                 
            </v-card>

            <v-data-table
      :headers="headers"
      :items="comentario"
      sort-by="comente"
      class="elevation-1 mt-10"
      :hide-default-footer="true"
      width="1000"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Comentários</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
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
 

            </v-row>

        </v-container>
    </v-content>

    <Footer />
        
    </v-app>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}

 .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
import Footer from '../../components/Footer';

  export default {
    props: {
      source: String,
    },
    data (){
      return{
        drawer: null,
      length: 3,
      onboarding: 0,

      interval: {},
        value: 0,

        headers: [
        { text: 'Comentários', value: 'comente' },
        { text: 'Ações', value: 'action', sortable: false, width: 100 }
      ],

      comentario: []
      }  
    },

    created () {
    const comentario = this.$ls.get('comentario')
    if (comentario) this.comentario = comentario
  },

    beforeDestroy () {
      clearInterval(this.interval)
    },

    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value = 75
      }, 1000)
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
       excluir (item) {
      let letras = this.$ls.get('comentario')
      letras = letras.filter(c => c.id != item.id)
      this.$ls.set('comentario', letras)
      this.comentario = letras
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
