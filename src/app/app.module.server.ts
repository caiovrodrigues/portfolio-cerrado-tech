import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import Modulo, { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

export const MODULOS: Modulo[] = [
  {
    id: 1,
    titulo: "Introdução ao Desenvolvimento Mobile com React Native",
    objetivo: "Objetivo: Familiarizar os alunos com o ambiente de desenvolvimento e os conceitos fundamentais do React Native.",
    cards: [
      {
        titulo: "Configuração do Ambiente de Desenvolvimento",
        itens: [
          "Instalação do Node.js e NPM",
          "Configuração do Android Studio e Xcode",
          "Introdução ao Expo para desenvolvimento simplificado"
        ]
      },
      {
        titulo: "Fundamentos do React Native",
        itens: [
          "Estrutura de um projeto React Native",
          "Principais componentes do React Native",
          "Diferenças entre React e React Native"
        ]
      },
      {
        titulo: "Introdução ao JSX",
        itens: [
          "Conceito de JSX no React Native",
          "Criando componentes básicos com JSX",
          "Utilizando props e children em componentes"
        ]
      },
      {
        titulo: "Primeiro Aplicativo com React Native",
        itens: [
          "Criando uma aplicação 'Hello World'",
          "Estrutura de pastas e arquivos em um projeto",
          "Rodando a aplicação em emuladores e dispositivos reais"
        ]
      },
      {
        titulo: "Trabalhando com Estilos no React Native",
        itens: [
          "Utilizando a API de estilos do React Native",
          "Diferenças entre Flexbox no React Native e no CSS",
          "Estilizando componentes básicos"
        ]
      },
      {
        titulo: "Depuração e Testes Iniciais",
        itens: [
          "Utilizando o console.log para depuração",
          "Ferramentas de depuração no React Native",
          "Testes simples de funcionalidade"
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Componentes e Navegação",
    objetivo: "Objetivo: Ensinar como criar e gerenciar componentes reutilizáveis e implementar a navegação entre telas.",
    cards: [
      {
        titulo: "Componentes Funcionais e de Classe",
        itens: [
          "Diferenças entre componentes funcionais e de classe",
          "Quando usar cada tipo de componente",
          "Criação de componentes reutilizáveis"
        ]
      },
      {
        titulo: "Passagem de Dados entre Componentes",
        itens: [
          "Uso de props para passar dados entre componentes",
          "Estado e ciclo de vida de componentes",
          "Atualização dinâmica de componentes com state"
        ]
      },
      {
        titulo: "Navegação entre Telas",
        itens: [
          "Introdução ao React Navigation",
          "Configurando a navegação básica entre telas",
          "Passando parâmetros entre telas"
        ]
      },
      {
        titulo: "Navegação em Pilha e Tab Navigator",
        itens: [
          "Criando uma navegação em pilha (Stack Navigator)",
          "Implementando uma navegação em abas (Tab Navigator)",
          "Personalização de cabeçalhos e rodapés"
        ]
      },
      {
        titulo: "Listas e ScrollView",
        itens: [
          "Criando listas com FlatList e SectionList",
          "Diferenças entre ScrollView e FlatList",
          "Otimização de listas longas"
        ]
      },
      {
        titulo: "Gestos e Interações do Usuário",
        itens: [
          "Introdução ao React Native Gesture Handler",
          "Implementação de gestos comuns (swipe, tap)",
          "Criação de botões e interações personalizadas"
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "Acesso a Recursos Nativos",
    objetivo: "Objetivo: Capacitar alunos a integrar funcionalidades nativas do dispositivo como câmera, GPS e notificações em seus aplicativos React Native",
    cards: [
      {
        titulo: "Acesso à Câmera e Galeria de Imagens",
        itens: [
          "Uso da API de câmera com React Native",
          "Acesso à galeria de imagens do dispositivo",
          "Captura e upload de imagens"
        ]
      },
      {
        titulo: "Geolocalização e Mapas",
        itens: [
          "Obtendo a localização do dispositivo",
          "Exibindo mapas com o React Native Maps",
          "Marcação de pontos no mapa"
        ]
      },
      {
        titulo: "Notificações Push",
        itens: [
          "Configuração de notificações push em React Native",
          "Envio de notificações usando Firebase",
          "Personalização de notificações"
        ]
      },
      {
        titulo: "Armazenamento Local e Sessões",
        itens: [
          "Uso do AsyncStorage para persistência de dados",
          "Armazenamento seguro com SecureStore",
          "Gerenciamento de sessões de usuário"
        ]
      },
      {
        titulo: "Conectividade e Status da Rede",
        itens: [
          "Verificação do status da rede (online/offline)",
          "Gerenciamento de conexões instáveis",
          "Cache de dados para funcionamento offline"
        ]
      },
      {
        titulo: "Integração com APIs Externas",
        itens: [
          "Consumo de APIs REST com Fetch API e Axios",
          "Autenticação com APIs (Bearer tokens)",
          "Manipulação de dados recebidos de APIs"
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Estilização Avançada e Temas",
    objetivo: "Objetivo: Aprofundar o conhecimento sobre estilização em React Native, abordando a criação de temas e design responsivo.",
    cards: [
      {
        titulo: "Estilos Dinâmicos e Condicionais",
        itens: [
          "Aplicação de estilos com base em estados",
          "Criação de temas claros e escuros",
          "Mudança de estilos em tempo de execução"
        ]
      },
      {
        titulo: "Design Responsivo em React Native",
        itens: [
          "Uso de Flexbox para layout responsivo",
          "Dimensionamento de componentes para diferentes telas",
          "Uso de Dimensions e PixelRatio"
        ]
      },
      {
        titulo: "Criando Temas Globais",
        itens: [
          "Implementação de um sistema de temas",
          "Troca de temas dentro do aplicativo",
          "Persistência de escolha de tema"
        ]
      },
      {
        titulo: "Animações e Transições",
        itens: [
          "Introdução ao Animated API",
          "Criação de transições suaves entre telas",
          "Implementação de animações em componentes"
        ]
      },
      {
        titulo: "Usando Styled Components",
        itens: [
          "Introdução aos Styled Components em React Native",
          "Estilização de componentes com CSS-in-JS",
          "Criação de componentes reutilizáveis e temáticos"
        ]
      },
      {
        titulo: "Design Patterns em Estilização",
        itens: [
          "Adoção de padrões como Atomic Design",
          "Organização de estilos em grandes projetos",
          "Criação de bibliotecas de componentes estilizados"
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: "Gerenciamento de Estado",
    objetivo: "Objetivo: Ensinar como gerenciar o estado da aplicação de forma eficiente utilizando ferramentas e bibliotecas como Redux e Context API.",
    cards: [
      {
        titulo: "Estado Local vs Global",
        itens: [
          "Diferença entre estado local e global",
          "Quando utilizar estado local",
          "Necessidade de gerenciamento de estado global"
        ]
      },
      {
        titulo: "Introdução ao Context API",
        itens: [
          "Criação e uso de Context API",
          "Compartilhamento de estado entre componentes",
          "Limitações e boas práticas do Context API"
        ]
      },
      {
        titulo: "Gerenciamento de Estado com Redux",
        itens: [
          "Conceitos básicos do Redux (store, actions, reducers)",
          "Configuração do Redux em um projeto React Native",
          "Conectando componentes ao estado global"
        ]
      },
      {
        titulo: "Redux Thunk e Middlewares",
        itens: [
          "Uso de Redux Thunk para operações assíncronas",
          "Integração de middlewares no fluxo Redux",
          "Tratamento de erros no Redux"
        ]
      },
      {
        titulo: "Persistência de Estado",
        itens: [
          "Persistência de estado com Redux Persist",
          "Sincronização de estado entre sessões",
          "Boas práticas na persistência de dados sensíveis"
        ]
      },
      {
        titulo: "Depuração e Ferramentas de Gerenciamento de Estado",
        itens: [
          "Uso do Redux DevTools para depuração",
          "Monitoramento do estado da aplicação",
          "Otimização de performance com Redux"
        ]
      }
    ]
  },
  {
    id: 6,
    titulo: "Integração com Back-End e Serviços Externos",
    objetivo: "Objetivo: Capacitar os alunos a conectar seus aplicativos com back-ends e serviços externos, como bancos de dados e autenticação.",
    cards: [
      {
        titulo: "Integração com Firebase",
        itens: [
          "Configuração do Firebase em um projeto React Native",
          "Autenticação de usuários com Firebase Auth",
          "Uso do Firestore como banco de dados em tempo real"
        ]
      },
      {
        titulo: "Autenticação e Autorização",
        itens: [
          "Implementação de login e registro de usuários",
          "Uso de tokens JWT para autenticação",
          "Gerenciamento de sessão de usuário"
        ]
      },
      {
        titulo: "Conexão com APIs RESTful",
        itens: [
          "Criação de chamadas API com Fetch e Axios",
          "Tratamento de respostas e erros da API",
          "Paginação e filtro de dados recebidos"
        ]
      },
      {
        titulo: "Armazenamento e Sincronização de Dados",
        itens: [
          "Integração com bases de dados externas",
          "Sincronização de dados entre o cliente e o servidor",
          "Gerenciamento de conflitos de dados"
        ]
      },
      {
        titulo: "Integração com Serviços de Terceiros",
        itens: [
          "Conexão com APIs de pagamento (ex: Stripe, PayPal)",
          "Uso de SDKs de terceiros em React Native",
          "Implementação de notificações via serviços externos"
        ]
      },
      {
        titulo: "Segurança e Boas Práticas",
        itens: [
          "Criptografia de dados sensíveis",
          "Configuração de HTTPS para comunicação segura",
          "Autenticação multifator e segurança adicional"
        ]
      }
    ]
  },
  {
    id: 7,
    titulo: "Publicação e Manutenção de Aplicativos",
    objetivo: "Objetivo: Ensinar os alunos a preparar, publicar e manter seus aplicativos nas lojas de aplicativos, além de realizar atualizações e monitorar a performance.",
    cards: [
      {
        titulo: "Preparação para Publicação",
        itens: [
          "Configuração dos ícones e splash screens",
          "Ajustes finais para desempenho e segurança",
          "Criação de builds para Android (APK, AAB) e iOS (IPA)"
        ]
      },
      {
        titulo: "Publicação na Google Play Store",
        itens: [
          "Processo de registro e configuração da conta de desenvolvedor",
          "Submissão de aplicativos para a Google Play Store",
          "Gerenciamento de versões e atualizações"
        ]
      },
      {
        titulo: "Publicação na Apple App Store",
        itens: [
          "Configuração da conta de desenvolvedor Apple",
          "Processo de submissão e aprovação na App Store",
          "Gerenciamento de versões e revisões do app"
        ]
      },
      {
        titulo: "Monitoramento de Performance e Análises",
        itens: [
          "Uso de ferramentas como Firebase Analytics",
          "Monitoramento de erros e crashes com Sentry",
          "Análise de feedbacks e métricas de uso"
        ]
      },
      {
        titulo: "Atualizações e Manutenção",
        itens: [
          "Planejamento e execução de atualizações regulares",
          "Manutenção de compatibilidade com novas versões do SO",
          "Correção de bugs e melhorias contínuas"
        ]
      },
      {
        titulo: "Estratégias de Monetização",
        itens: [
          "Introdução a modelos de monetização (freemium, anúncios, compras no app)",
          "Configuração de AdMob e outras plataformas de anúncios",
          "Implementação de compras no aplicativo (in-app purchases)"
        ]
      }
    ]
  }
]