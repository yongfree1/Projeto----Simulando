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
              <img src="../../public/img/igor.jpg" height="40px" alt="Imagem do Usuário">
            </v-list-item-avatar>

            <v-list-item-content >
              <v-list-item-title><b>{{ user.nome }}</b></v-list-item-title>
              <v-list-item-subtitle><b>{{ user.status }}</b></v-list-item-subtitle>
            </v-list-item-content>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/settings.svg" height="35px" alt=" Icone de configuração">
            </v-list-item-action>
            <v-list-item-title >Configurações</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-action>
              <img src="../../public/img/logout.svg" height="30px" alt=" Icone de Sair">
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
        <img @click="inicio"  src="../../public/img/logo2menor.png" height="45px" width="200px" alt="Logo Simulando - Simulados online">
      </v-container>

      
    </v-app-bar>
    </div>
</template>

