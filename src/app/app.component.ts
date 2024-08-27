import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MODULOS } from './app.module.server';

export default interface Modulo{
  id: number,
  titulo: string,
  objetivo: string,
  cards: Array<{
    titulo: string;
    itens: Array<string>
  }>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-cerrado-tech';
  moduloss: Modulo[] = MODULOS;
  // modulos: Modulo[] = [
  //   {
  //     id: 1,
  //     titulo: "Módulo 1", 
  //     cards: [
  //       {titulo: "Introdução a linguagem de programação e algoritmos", itens: ["O que é uma linguagem de programação?", "Conceitos básicos de algoritmos", "Estruturas de dados fundamentais", "Compiladores e interpretadores"]},
  //       {titulo: "Introdução ao JavaScript", itens: ["O que é JavaScript e sua importância no desenvolvimento web e mobile.", "Configuração de ambiente (VS Code, Node.js, etc.)."]},
  //       {titulo: "Sintaxe Básica e Estruturas de Controle", itens: ["Declaração de variáveis (var, let, const).", "Tipos de dados primitivos (números, strings, booleanos, etc.)", "Condicionais (if, else, switch)", "Loops (for, while, do...while)"]},
  //       {titulo: "Funções e Escopo", itens: ["Definição de funções (declaração e função de seta)", "Parâmetros, argumentos e retorno de funções", "Escopo de variáveis (local vs global)", "Funções anônimas e callbacks"]},
  //       {titulo: "Trabalhando com Arrays e Objetos", itens: ["Criação e manipulação de arrays (métodos como map, filter, reduce)", "Objetos: propriedades e métodos", "Desestruturação de arrays e objetos"]},
  //       {titulo: "Manipulação de Eventos e Funções Assíncronas", itens: ["Introdução a eventos e callbacks", "Promises e async/await", "Manipulação assíncrona de dados e simulação de chamadas a APIs"]},
  //       {titulo: "Introdução ao ES6+ e Novas Funcionalidades", itens: ["Template literals", "Operador spread e rest", "Classes e herança em JavaScript", "Módulos e import/export"]},
  //       {titulo: "Projeto Prático", itens: ["Criar um aplicativo de lista de tarefas (To-Do List) simples usando apenas HTML, CSS e JavaScript", "O projeto foca em interações básicas, manipulação de DOM e armazenamento de dados em localStorage"]},
  //     ]
  //   },
  //   {
  //     id: 2,
  //     titulo: "Módulo 2",
  //     cards: [
  //       {titulo: "Objetivo: Introduzir os conceitos básicos do desenvolvimento mobile, a diferença entre aplicativos nativos, híbridos e web apps, além de fundamentos em HTML, CSS e JavaScript.", itens: []},
  //       {titulo: "Introdução ao JavaScript", itens: ["Introdução ao desenvolvimento mobile: nativo vs híbrido vs PWA", "Configuração do ambiente de desenvolvimento", "HTML, CSS e JavaScript", "Introdução ao controle de versão com Git", "Projeto prático: Criação de um app simples em HTML5, CSS e JavaScript"]},
  //     ]
  //   },
  //   {
  //     id: 3,
  //     titulo: "Módulo 3",
  //     cards: [
  //       {titulo: "Objetivo: Introduzir os conceitos básicos do desenvolvimento mobile, a diferença entre aplicativos nativos, híbridos e web apps, além de fundamentos em HTML, CSS e JavaScript.", itens: []},
  //       {titulo: "Introdução ao JavaScript", itens: ["Introdução ao desenvolvimento mobile: nativo vs híbrido vs PWA", "Configuração do ambiente de desenvolvimento", "HTML, CSS e JavaScript", "Introdução ao controle de versão com Git", "Projeto prático: Criação de um app simples em HTML5, CSS e JavaScript"]},
  //       {titulo: "Introdução ao Desenvolvimento Mobile", itens: ["Contextualização do mercado mobile e sua evolução", "Principais plataformas: Android e iOS", "Diferença entre aplicativos nativos, híbridos e multiplataforma", "Oportunidades e desafios no desenvolvimento mobile"]},
  //       {titulo: "Arquitetura e Plataformas Mobile", itens: ["Estrutura dos sistemas operacionais Android e iOS", "Componentes principais: Activities, Fragments, ViewControllers", "Diferença entre desenvolvimento nativo e multiplataforma", "Prós e contras de cada abordagem"]},
  //       {titulo: "Ferramentas de Desenvolvimento e Ambientes de Trabalho", itens: ["Configuração do ambiente de desenvolvimento (Android Studio, Xcode)", "Emuladores e dispositivos físicos para testes", "Introdução ao uso de Git para controle de versão", "Configuração de projetos e melhores práticas para organização"]},
  //       {titulo: "Princípios de Design para Mobile", itens: ["Noções de UX e UI aplicadas ao mobile", "Guidelines de design: Material Design e Human Interface Guidelines", "Design responsivo e adaptável para diferentes telas", "Boas práticas de acessibilidade e usabilidade"]},
  //       {titulo: "Fundamentos de Programação para Mobile", itens: ["Introdução às linguagens usadas no desenvolvimento mobile", "Estrutura básica de um aplicativo (layouts, views, activities)", "Ciclo de vida de uma aplicação (activity lifecycle, view controller lifecycle)", "Noções básicas de manipulação de dados e persistência"]},
  //     ]
  //   },
  //   {
  //     id: 4,
  //     titulo: "Módulo 4",
  //     cards: [
  //       {titulo: "Objetivo: Ensinar a criar aplicativos multiplataforma utilizando React Native, focando em componentes, navegação e estilização", itens: []},
  //       {titulo: "Introdução ao React Native", itens: ["O que é React Native e como ele funciona", "Comparação com desenvolvimento nativo (Android e iOS)", "Vantagens e limitações do React Native", "Configuração inicial do ambiente de desenvolvimento"]},
  //       {titulo: "Fundamentos do React Native", itens: ["Estrutura básica de um projeto React Native", "Componentes fundamentais: View, Text, Image, ScrollView", "Estilização com Flexbox e Stylesheets", "Manipulação de eventos e navegação"]},
  //       {titulo: "Componentes e Reutilização de Código", itens: ["Criação e reutilização de componentes personalizados", "Props e State: gerenciamento de dados nos componentes", "Hooks básicos: useState e useEffect", "Práticas para organização e modularização do código"]},
  //       {titulo: "Navegação em Aplicativos React Native", itens: ["Introdução à biblioteca React Navigation", "Navegação Stack, Tab e Drawer", "Passagem de parâmetros entre telas", "Configuração e personalização da navegação"]},
  //       {titulo: "Integração com APIs e Gerenciamento de Estado", itens: ["Consumo de APIs REST com Axios ou Fetch", "Gerenciamento de estado global com Context API e Redux", "Introdução ao React Query para sincronização de dados", "Boas práticas para lidar com dados assíncronos"]},
  //       {titulo: "Publicação e Manutenção de Aplicativos", itens: ["Gerando builds para Android (APK) e iOS (IPA)", "Processo de publicação nas lojas (Google Play Store e Apple App Store)", "Configuração de atualizações Over-The-Air (OTA) com Expo ou CodePush", "Boas práticas para monitoramento e manutenção contínua"]},
  //     ]
  //   },
  //   {
  //     id: 5,
  //     titulo: "Módulo 5",
  //     cards: [
  //       {titulo: "Objetivo: Ensinar os conceitos básicos de design e estilização no React Native, permitindo que os alunos criem interfaces simples e responsivas", itens: []},
  //       {titulo: "Introdução à Estilização com React Native", itens: ["Como funciona a estilização no React Native", "Diferenças entre CSS tradicional e o StyleSheet do React Native", "Entendendo Flexbox no contexto mobile", "Configuração de estilos globais e temáticos"]},
  //       {titulo: "Estilização de Componentes e Layouts", itens: ["Estilizando View, Text e outros componentes nativos", "Criando layouts responsivos com Flexbox", "Manipulação de margens, paddings e bordas", "Controle de posicionamento e alinhamento"]},
  //       {titulo: "Estilos Dinâmicos e Tematização", itens: ["Aplicação de estilos dinâmicos com base em props", "Usando o StyleSheet API para criar temas reutilizáveis", "Alternância entre temas claro e escuro", "Integração de bibliotecas de tematização como styled-components"]},
  //       {titulo: "Fontes, Cores e Imagens", itens: ["Personalização de fontes e tamanhos de texto", "Trabalhando com paletas de cores e gradientes", "Manipulação de imagens: redimensionamento e posicionamento", "Uso de SVGs e ícones personalizados em React Native"]},
  //       {titulo: "Animações e Transições Básicas", itens: ["Introdução ao Animated API", "Criando animações simples com React Native", "Transições entre estados e componentes", "Boas práticas para garantir desempenho em animações"]},
  //       {titulo: "Boas Práticas de Design e Usabilidade", itens: ["Princípios de design mobile: simplicidade e foco no usuário", "Considerações de acessibilidade ao criar interfaces", "Testando e ajustando responsividade para diferentes dispositivos", "Implementação de feedbacks visuais (toques, estados de carregamento)"]},
  //     ]
  //   },
  //   {
  //     id: 6,
  //     titulo: "Módulo 6",
  //     cards: [
  //       {titulo: "Objetivo: Ensinar os conceitos básicos de design e estilização no React Native, permitindo que os alunos criem interfaces simples e responsivas", itens: []},
  //       {titulo: "Introdução ao Acesso a Recursos Nativos", itens: ["Entendendo a ponte JavaScript-Nativo no React Native", "Quando e por que utilizar módulos nativos", "Visão geral das APIs nativas mais usadas", "Instalação e configuração de bibliotecas nativas"]},
  //       {titulo: "Acesso a Sensores e Hardware", itens: ["Utilizando a câmera e galeria de fotos", "Acesso à geolocalização e mapas", "Manipulação do acelerômetro e giroscópio", "Controle de vibração e lanternas no dispositivo"]},
  //       {titulo: "Integração com Serviços de Terceiros", itens: ["Autenticação com Firebase e OAuth", "Integração com APIs de pagamento (Stripe, PayPal)", "Envio de notificações push com Firebase Cloud Messaging (FCM)", "Uso de bibliotecas populares para integração com APIs (React Native Firebase, etc.)"]},
  //       {titulo: "Gerenciamento de Permissões", itens: ["Solicitação de permissões para acesso a recursos", "Controle de permissões no Android e iOS", "Uso da biblioteca react-native-permissions", "Boas práticas para lidar com recusas de permissões"]},
  //       {titulo: "Armazenamento e Persistência de Dados", itens: ["Armazenamento local com AsyncStorage e SecureStore", "Banco de dados locais: SQLite e Realm", "Sincronização de dados offline com Redux Persist", "Melhores práticas para persistência e segurança de dados"]},
  //     ]
  //   },
  //   {
  //     id: 7,
  //     titulo: "Módulo 7",
  //     cards: [
  //       {titulo: "Objetivo: Consolidar os conhecimentos adquiridos no curso, desenvolver um projeto final e aprender sobre boas práticas no desenvolvimento mobile", itens: []},
  //       {titulo: "Introdução ao Acesso a Recursos Nativos", itens: ["Gerenciamento de projetos e versionamento de código avançado", "Princípios de design de interface (UI) e experiência do usuário (UX)" ,"Otimização de performance e boas práticas de desenvolvimento", "Desenvolvendo para acessibilidade", "Projeto final: Desenvolvimento completo de um aplicativo original"]},
  //     ]
  //   }
  // ];
  moduloShow!: Modulo;
  indexSlideActive = 0;

  ngOnInit(){
    this.moduloShow = this.moduloss[0];
    const numb = document.querySelector(".numb");
    let counter = 0;
    let intervalCounter1 = setInterval(()=>{
      if(counter == 5){
        clearInterval(intervalCounter1);
      }else{
        counter+=1;
        numb!.textContent = counter + " anos";
      }
    }, 200);

    const numb2 = document.querySelector(".numb2");
    let counter2 = 0;
    let intervalCounter2 = setInterval(()=>{
      if(counter2 == 600){
        clearInterval(intervalCounter2);
      }else{
        counter2+=3;
        numb2!.textContent =  "+" + counter2;
      }
    }, 1);
  }


  avancarModulo(){
    if(this.moduloShow.id == 7){
      this.moduloShow = this.moduloss[0];
      return;
    }
    this.moduloShow = this.moduloss[this.moduloShow.id];
  }

  voltarModulo(){
    if(this.moduloShow.id == 1){
      this.moduloShow = this.moduloss[this.moduloss.length - 1];
      return;
    }
    this.moduloShow = this.moduloss[this.moduloShow.id - 2];
  }
}
