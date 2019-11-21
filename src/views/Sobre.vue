<template>
    <v-app>

        <div class="aparecer">
      <HeaderMobile />
    </div>

    <div class="sumir">
      <Headerpadrao />
    </div>

        <v-container>

          <v-card class="white pa-10" outlined>
    
            <v-row 
            class="d-flex flex-wrap"
            no-gutters>
      
      <v-col
        cols="12"
        md="12"
        lg="8"
      >
        <v-card
          class="pa-2 d-flex justify-center"
          outlined
          tile
          color="transparent"
        >
           <img class="diminui" src="../../public/img/prop_img2.png" height="347px" width="560px" alt="Logo Simulando - Simulados online">
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="4"
      >
        <v-card
          class=" pt-1 mt-5"
          outlined
          tile
          color="transparent"
        >
          <v-toolbar-title class="display-1 text-wrap mb-5">Sobre o Simulando</v-toolbar-title>
          <v-toolbar-title class="d-flex text-wrap mb-3" >O Simulando, projeto criado por estudantes da Faculdade Tecnológica de Taquaritinga tem o orgulho de auxíliar estudantes
que procuram e se dedicam para passar no tão sonhado vestibular. Disponibilizamos 3 simulados onde o aluno possa ter total facilidade
para testar seus conhecimentos junto de nóticias de vestibulares e alguns extras voltado a esse contexto.</v-toolbar-title>
          
          

        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="12"
      >
        <v-card
          class=" pt-1 "
          outlined
          tile
          color="transparent"
        >
        <v-toolbar-title class="d-flex text-wrap" >O estudante poderá ficar tranquilo quanto a disponíbilidade de uso do site,sendo possível acessar onde e quando quiser podendo
salvar seu progresso e continuar uma outra hora.</v-toolbar-title>
          <v-toolbar-title class="d-flex text-wrap  mb-3">O nível de conhecimento só chega aqueles que se esforçam e se dedicam ao máximo, o Simulando está aqui para ajudar no que for 
possível a você estudante conseguir obter sucesso nos seus objetivos.</v-toolbar-title> 

          <v-toolbar-title class="d-flex  mb-3"> Bom simulado a todos e lembre-se, o seu sucesso é você quem faz! </v-toolbar-title> 


        </v-card>
      </v-col>
    </v-row>

          </v-card>
        <section class="d-flex mt-10 justify-space-around flex-wrap">

          <v-card  width="380" height="auto" class="mt-5">
            <div class="d-flex justify-center flex-column align-center mb-5">
              <v-list-item-avatar size="100" class="mt-10">
              <img src="../../public/img/igor.jpg" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Desenvolvedor
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="px-5 pt-5 mb-5">
              <v-card-text class="title text-center">
              O idealista do projeto, Igor veio da escola técnica de Matão com o técnico de informática na bagagem esperando investir cada vez mais em seus conhecimentos em Front-End. Atualmente faz estágio na empresa Focus.
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                igor.simt@gmail.com
              </v-card-text>
            </div>

            
          </v-card>

          <v-card  width="380" height="auto" class="mt-5">
            <div class="d-flex justify-center flex-column align-center mb-5">
              <v-list-item-avatar size="100" class="mt-10">
              <img src="../../public/img/murillo.jpg" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Designer
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="px-5 pt-5 mb-5">
              <v-card-text class="title text-center">
              O designer Murillo já teve outras experiências com design e foi o responsável por todo o layout do site.Fez curso de design de games na Micro Pro em Matão, e hoje em dia além dessa experiência ele também trabalha com vídeos.
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                murilloa.mirando@gmail.com
              </v-card-text>
            </div>

            <!-- <v-list-item link class="font-center" >

            <v-list-item-title class="font-weight-bold text-center" @click="login">  <img src="../../public/img/login.svg" class="mr-2 mt-2" height="25px" alt="Icone de login">igor.simt@gmail.com</v-list-item-title>
            
          </v-list-item> -->
            
            
          </v-card>

          <v-card  width="380" height="auto" class="mt-5">
            <div class="d-flex justify-center flex-column align-center mb-5" border="bottom" color="red lighten-2">
              <v-list-item-avatar size="100" border="bottom" color="red lighten-2"  class="mt-10">
              <img src="../../public/img/joice.jpg" border="bottom" color="red lighten-2" height="110px" alt="Imagem do usuário">
            </v-list-item-avatar>
            <div class="text-center mr-6">
              Desenvolvedora
            </div>
            </div>

            <v-divider class="mx-5"></v-divider>

            <div class="px-5 pt-5 mb-7">
              <v-card-text class="title text-center">
              A altruísta do projeto, Joice se formou em cursos técnicos de marketing e administração, ambos cursados na Etec em Taquaritinga-SP. Atualmente cursando Sistemas para Internet (S.I), para aprimorar seu conhecimento de área da Tecnologia.
            </v-card-text>
            </div>

            <div class="pa-5 d-flex justify-center">
              <v-card-text class="title text-center subtitle-1 purple--text">
                inara.marqs98@gmail.com
              </v-card-text>
            </div>
            
          </v-card>
        
        </section>
          
        </v-container>
       
        <Footer />
    </v-app>
</template>

<style>

/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

@media (max-width: 650px){
  .diminui{
    height: 260px;
    width: 400px;
  }
}

@media (max-width: 480px){
  .diminui{
    height: 200px;
    width: 300px;
  }
}

.aparecer{display: none;}

@media(max-width: 735px){
    .aparecer{display: flex;}

    .sumir{display: none;}
}

</style>

<script>
import HeaderMobile from '../components/HeaderMobile';
import Headerpadrao from '../components/Headerpadrao';
import Footer from '../components/Footer';

export default {
  components: {
    HeaderMobile,
    Headerpadrao,
    Footer,
  },
};
</script>