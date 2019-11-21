<template>
    <v-app>
        <Headerpadrao/>
        <v-card
        width="1300"
        class="mx-auto accent-3 pa-5 text-star p-5"  
        >
        <p class="headline font-color">Sua pontuação:</p>
        </v-card>
        <v-card
        width="1300"
        class="mx-auto accent-3 pa-5 text-center p-5"  
        >
        <div>
      <p class="title-banner font-weight-bold font-color">Você está realmente pronto!?</p>
      <p class="headline font-color ">No Simulando não recomendamos apenas fazer simulados,
         indicamos que você torne o habito de ler uma frequência diária, 
         afinal muitos vestibulares possuem uma redação acompanhada da prova, ter coerência ao escrever é muito importante.
         Então logo a abaixo deixamos algumas sujestões de leitura para aprimorar seus estudos.</p><br>
    </div>
    </v-card>
        <v-row class="d-flex justify-center flex-wrap">
      <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l1.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong> Machado de Assis</div>

      <div> <strong>Classe literária:</strong>Realismo.</div>

      <div><strong>Características:</strong>Linguagem direta, descrição bem detalhada, fidelidade à realidade, personagens com detalhamento psicológico e valorização da ciência como melhor forma de se obter conhecimento.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="http://machado.mec.gov.br/obra-completa-lista/itemlist/category/23-romance"
        target="_blanck"
      >
        completa em domínio público
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l2.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong> Graciliano Ramos</div>

      <div> <strong>Classe literária:</strong>Segunda fase do modernismo</div>

      <div><strong>Características:</strong>Regionalismo, naturalismo, denuncia dos problemas da sociedade e romance desmontável (Cada capítulo pode ser entendido sem os outros).</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="https://cs.ufgd.edu.br/download/Vidas%20Secas%20-%20Graciliano%20Ramos.pdf"
        target="_blanck"
      >
        PDF
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l3.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong>Jorge Amado</div>

      <div> <strong>Classe literária:</strong>Segunda geração modernista</div>

      <div><strong>Características:</strong>Trata-se de um romance proletário, no qual o autor aborda os temas do banditismo, marginalização, sensacionalismo, socialismo e faz críticas sociais. Também houve rompimento com o naturalismo.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="https://digital.bbm.usp.br/bitstream/bbm/6845/1/45000008358_Output.o.pdf"
        target="_blanck"
      >
        PDF
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l4.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong>Mário de Andrade</div>

      <div> <strong>Classe literária:</strong>Primeira fase modernista</div>

      <div><strong>Características:</strong>Movimento antropofagia (tentativa de fazer algo genuinamente brasileiro), linguagem cômica com erros propositais, o real confundido com o fantástico e a presença de um conjunto de lendas folclóricas reunidas (antologia).</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="http://bd.centro.iff.edu.br/bitstream/123456789/1031/1/Macuna%C3%ADma.pdf"
        target="_blanck"
      >
        PDF
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l5.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong> Clarice Lispector</div>

      <div> <strong>Classe literária:</strong>Terceira fase modernista</div>

      <div><strong>Características:</strong> Romance intimista, psicológico, com denuncia social, presença de narração masculina pela primeira vez e drama de linguagem.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="http://colegioplante.com.br/wp-content/uploads/2016/06/A-Hora-da-Estrela-Clarice-Lispector.pdf"
        target="_blanck"
      >
        PDF
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    <v-col
v-for="n in 1"
        :key="n"
        cols="12"
        md="4"
        sm="6" 
      >
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/l6.jpg"
    >
    </v-img>
    <v-card-text class="text--primary">
      <div><strong>Autor:</strong> José de Alencar</div>

      <div> <strong>Classe literária:</strong>Primeira geração romancista brasileira/indianismo</div>

      <div><strong>Características:</strong>Nacionalismo, exaltação da natureza, religiosidade cristã, indianismo e sentimentalismo exagerado.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        depressed
        color="primary"
        href="http://www.dominiopublico.gov.br/pesquisa/DetalheObraForm.do?select_action=&co_obra=1844"
        target="_blanck"
      >
        Completa em domínio público
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    <Footer/>
    </v-app>
</template>
<script>
import Headerpadrao from '../components/Headerpadrao';
import Footer from '../components/Footer';

export default {
  components: {
    Headerpadrao,
    Footer,
  },
};
</script>
