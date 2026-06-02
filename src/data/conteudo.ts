import type { CategoriaProjeto, Indicador, Projeto } from "../types";

export const menu = [
  { label: "Início", href: "#inicio" },
  { label: "Coleção", href: "#colecao" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Jornadas", href: "#jornadas" },
  { label: "Contato", href: "#contato" },
];

export const faixas = [
  "paisagismo sensorial",
  "arquitetura natural",
  "folhagem em movimento",
  "refúgios contemporâneos",
  "materiais honestos",
  "luz, sombra e respiro",
];

export const categorias: CategoriaProjeto[] = [
  "Todos",
  "Residencial",
  "Hospitalidade",
  "Bem-estar",
  "Refúgios",
];

export const indicadores: Indicador[] = [
  {
    rotulo: "Espaços vivos",
    valor: "26",
    detalhe: "Projetos onde paisagem, matéria e percurso foram desenhados como uma única experiência.",
  },
  {
    rotulo: "Presença natural",
    valor: "91%",
    detalhe: "Média de áreas verdes ou respiros biofílicos integrados a cada jornada.",
  },
  {
    rotulo: "Tempo de permanência",
    valor: "+37%",
    detalhe: "Aumento médio de permanência em ambientes com camadas sensoriais e sombra viva.",
  },
  {
    rotulo: "Estações pensadas",
    valor: "4",
    detalhe: "Cada espaço é desenhado para envelhecer com beleza ao longo do ano.",
  },
];

export const projetos: Projeto[] = [
  {
    id: "p-1",
    nome: "Casa Horizonte Verde",
    categoria: "Residencial",
    cidade: "Campos do Jordão",
    resumo: "Uma casa que dissolve limite entre estar, jardim e neblina da montanha.",
    impacto: "Interior e paisagem desenhados como um percurso respirável.",
    destaque: "Volumes leves, madeira aquecida e camadas de folhagem emoldurando a luz da tarde.",
    paleta: "from-salvia/[0.30] via-folha/[0.10] to-transparent",
    topicos: ["claraboias", "piso mineral", "vegetação nativa"],
    texto: [
      "A casa nasce do gesto de abrir o cotidiano para o relevo. Em vez de janelas que apenas enquadram, criamos passagens que deixam o verde circular pelo corpo.",
      "A vegetação não foi pensada como decoração. Ela atua como filtro de luz, camada de privacidade e respiração visual ao longo do dia.",
      "O resultado é um ambiente que muda com a sombra, com a umidade e com o ritmo de quem habita.",
    ],
  },
  {
    id: "p-2",
    nome: "Pavilhão Cedro",
    categoria: "Hospitalidade",
    cidade: "Gramado",
    resumo: "Recepção e lounge desenhados para acolher como uma clareira protegida.",
    impacto: "Hospitalidade menos cenográfica e mais sensorial.",
    destaque: "Tons terrosos, curvas suaves, tecidos naturais e folhagens altas em primeiro plano.",
    paleta: "from-terracota/[0.22] via-areia/[0.18] to-transparent",
    topicos: ["lobby vivo", "texturas naturais", "percurso de chegada"],
    texto: [
      "No Cedro, o primeiro contato com o espaço precisava desacelerar o visitante sem parecer silencioso demais.",
      "Criamos uma chegada em camadas: sombra, matéria, perfume verde e um campo de visão que convida a permanecer.",
      "A experiência acontece tanto na arquitetura quanto nos intervalos entre ela.",
    ],
  },
  {
    id: "p-3",
    nome: "Jardim de Bruma",
    categoria: "Bem-estar",
    cidade: "Nova Friburgo",
    resumo: "Um circuito de respiro e pausa para um centro de bem-estar entre bosque e pedra.",
    impacto: "Percurso meditativo que organiza corpo, silêncio e temperatura.",
    destaque: "Passarelas baixas, som de água e vegetação em movimento constante ao fundo.",
    paleta: "from-folha/[0.24] via-salvia/[0.10] to-transparent",
    topicos: ["espelho d'água", "sombra filtrada", "ritual de chegada"],
    texto: [
      "O projeto parte da ideia de que descanso não acontece apenas dentro de uma sala, mas entre uma transição e outra.",
      "Por isso, o paisagismo assume o protagonismo do percurso: folhas, texturas, brisa e ruína controlada.",
      "Cada curva foi desenhada para criar pequenos desvios de atenção e recolhimento.",
    ],
  },
  {
    id: "p-4",
    nome: "Refúgio da Encosta",
    categoria: "Refúgios",
    cidade: "Monte Verde",
    resumo: "Cabana contemporânea com volumes baixos e integração profunda com o terreno.",
    impacto: "Um refúgio onde interior e exterior parecem continuar um ao outro.",
    destaque: "Decks sobre o solo, marcenaria escura e um pano de fundo vegetal sempre em movimento.",
    paleta: "from-musgo/[0.26] via-pinho/[0.14] to-transparent",
    topicos: ["cabana premium", "paisagem viva", "fogo e sombra"],
    texto: [
      "O Refúgio da Encosta explora proximidade, não monumentalidade. A arquitetura se comprime para que a mata ganhe escala.",
      "Usamos superfícies de baixa refletância e materiais que aceitam o tempo como parte do desenho.",
      "Tudo foi pensado para que a experiência principal não seja olhar o bosque, mas sentir que se está dentro dele.",
    ],
  },
];
