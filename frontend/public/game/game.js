/* =================================================================
   IFC SOMBRIO: BATALHA DOS ALUNOS  —  v2.0
   -----------------------------------------------------------------
   Arquitetura modular. Os arrays abaixo são a fonte única de verdade.
   Para adicionar novos alunos basta acrescentar entradas em
   PERSONAGENS seguindo EXATAMENTE o padrão: um atributo por linha.
   ================================================================= */


/* =========================================================
   1) MULTIPLICADORES DE ELEMENTOS (Estereótipos)
   ========================================================= */
const VANTAGENS = {
  "Nerd":       "Valentão",
  "Valentão":   "Atleta",
  "Atleta":     "Gamer",
  "Gamer":      "Músico",
  "Músico":     "Entroza",
  "Entroza":    "Professor",
  "Professor":  "Woke",
  "Woke":       "Estranho",
  "Estranho":   "Gente Fina",
  "Gente Fina": "Nerd"
};

const DESVANTAGENS = {
  "Nerd":       "Gente Fina",
  "Valentão":   "Nerd",
  "Atleta":     "Valentão",
  "Gamer":      "Atleta",
  "Músico":     "Gamer",
  "Entroza":    "Músico",
  "Professor":  "Entroza",
  "Woke":       "Professor",
  "Estranho":   "Woke",
  "Gente Fina": "Estranho"
};

// Cores e ícones por classe (para badges visuais)
const ESTILO_CLASSE = {
  "Nerd":       { cor: "#7af0ff", icone: "📖" },
  "Valentão":   { cor: "#d62828", icone: "👊" },
  "Atleta":     { cor: "#52b788", icone: "🏃" },
  "Gamer":      { cor: "#00b4d8", icone: "🎮" },
  "Músico":     { cor: "#c77dff", icone: "🎸" },
  "Entroza":    { cor: "#ffcc4d", icone: "🌀" },
  "Professor":  { cor: "#ff8c42", icone: "📋" },
  "Woke":       { cor: "#9d4edd", icone: "📢" },
  "Estranho":   { cor: "#5a189a", icone: "👁" },
  "Gente Fina": { cor: "#90e0ef", icone: "💖" }
};


/* =========================================================
   2) CONDIÇÕES DE STATUS
   ========================================================= */
const CONDICOES = [
  {
    id: "cansado",
    nome: "Cansado",
    icone: "Z",
    cor: "#a89878",
    descricao: "Ataque reduzido em 30%.",
    duracao: 3,
    modAtk: -0.30
  },
  {
    id: "exausto",
    nome: "Exausto",
    icone: "X",
    cor: "#888",
    descricao: "30% de chance de perder o turno.",
    duracao: 3,
    chancePerderTurno: 0.30
  },
  {
    id: "atordoado",
    nome: "Atordoado",
    icone: "*",
    cor: "#ffcc4d",
    descricao: "Perde o próximo turno.",
    duracao: 1,
    chancePerderTurno: 1.0
  },
  {
    id: "sangrando",
    nome: "Sangrando",
    icone: "S",
    cor: "#ff3860",
    descricao: "Sofre 5 de dano por turno.",
    duracao: 3,
    danoPorTurno: 5
  },
  {
    id: "em_chamas",
    nome: "Em Chamas",
    icone: "F",
    cor: "#ff6b00",
    descricao: "Sofre 7 de dano por turno.",
    duracao: 2,
    danoPorTurno: 7
  },
  {
    id: "concentrado",
    nome: "Concentrado",
    icone: "+",
    cor: "#7af0ff",
    descricao: "+20% de chance crítica.",
    duracao: 3,
    modCrit: 20
  },
  {
    id: "inspirado",
    nome: "Inspirado",
    icone: "!",
    cor: "#6effb0",
    descricao: "+30% de ataque.",
    duracao: 3,
    modAtk: 0.30
  },
  {
    id: "protegido",
    nome: "Protegido",
    icone: "D",
    cor: "#90e0ef",
    descricao: "+50% de defesa.",
    duracao: 3,
    modDef: 0.50
  },
  {
    id: "confuso",
    nome: "Confuso",
    icone: "?",
    cor: "#c77dff",
    descricao: "30% de chance de atacar aliado.",
    duracao: 2,
    chanceAtacarAliado: 0.30
  },
  {
    id: "drogado",
    nome: "Drogado",
    icone: "@",
    cor: "#9d4edd",
    descricao: "Precisão reduzida em 30%.",
    duracao: 3,
    modPrecisao: -30
  },
  {
    id: "regenerando",
    nome: "Regenerando",
    icone: "+",
    cor: "#6effb0",
    descricao: "Recupera 8 HP por turno.",
    duracao: 3,
    curaPorTurno: 8
  }
];


/* =========================================================
   3) AÇÕES (ataques + habilidades)
   -----------------------------------------------------------------
   Campos:
     id, nome, poder, custoFoco, descricao, estereotipoDono,
     nivelMinimo, tipoAcao (ataque|buff|debuff|cura|misto),
     alvo (inimigo_unico|todos_inimigos|aliado_unico|todos_aliados|self),
     precisao (0-100), chanceCrit (0-100),
     efeitos [{condicao, chance, turnos, target: "alvo"|"usuario"}]
   ========================================================= */
const ATAQUES = [
  /* ---------- BÁSICO ---------- */
  {
    id: "soco_basico",
    nome: "Soco Básico",
    poder: 10,
    custoFoco: 0,
    descricao: "Soco direto sem floreios.",
    estereotipoDono: "*",
    nivelMinimo: 1,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 95,
    chanceCrit: 10,
    efeitos: []
  },

  /* ---------- NERD (dano único + debuff defesa) ---------- */
  {
    id: "calc_brutal",
    nome: "Cálculo Brutal",
    poder: 16,
    custoFoco: 6,
    descricao: "Resolve a EDO mental do alvo. Reduz defesa.",
    estereotipoDono: "Nerd",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 88,
    chanceCrit: 12,
    efeitos: [{condicao: "cansado", chance: 40, turnos: 2, target: "alvo"}]
  },
  {
    id: "teorema_destruidor",
    nome: "Teorema Destruidor",
    poder: 26,
    custoFoco: 14,
    descricao: "Prova um lema que invalida a existência do alvo.",
    estereotipoDono: "Nerd",
    nivelMinimo: 4,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 85,
    chanceCrit: 15,
    efeitos: []
  },
  {
    id: "explicar_tudo",
    nome: "Explicar Tudo",
    poder: 0,
    custoFoco: 8,
    descricao: "Explica em detalhes. Inimigos ficam cansados.",
    estereotipoDono: "Nerd",
    nivelMinimo: 3,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 90,
    chanceCrit: 0,
    efeitos: [{condicao: "cansado", chance: 70, turnos: 3, target: "alvo"}]
  },

  /* ---------- ATLETA (físico forte + multi) ---------- */
  {
    id: "carrinho_violento",
    nome: "Carrinho Violento",
    poder: 18,
    custoFoco: 4,
    descricao: "Carrinho por trás. Pode fazer sangrar.",
    estereotipoDono: "Atleta",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 12,
    efeitos: [{condicao: "sangrando", chance: 30, turnos: 3, target: "alvo"}]
  },
  {
    id: "supino_de_castigo",
    nome: "Supino de Castigo",
    poder: 28,
    custoFoco: 16,
    descricao: "Levanta o inimigo e deixa cair. 80kg de queda.",
    estereotipoDono: "Atleta",
    nivelMinimo: 5,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 88,
    chanceCrit: 18,
    efeitos: []
  },
  {
    id: "varrer_a_quadra",
    nome: "Varrer a Quadra",
    poder: 14,
    custoFoco: 12,
    descricao: "Atinge todos os inimigos com um carrinho duplo.",
    estereotipoDono: "Atleta",
    nivelMinimo: 4,
    tipoAcao: "ataque",
    alvo: "todos_inimigos",
    precisao: 85,
    chanceCrit: 10,
    efeitos: []
  },

  /* ---------- VALENTÃO (single target alto + crit) ---------- */
  {
    id: "headbutt_idiota",
    nome: "Headbutt Idiota",
    poder: 17,
    custoFoco: 4,
    descricao: "Cabeçada sem pensar.",
    estereotipoDono: "Valentão",
    nivelMinimo: 1,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 15,
    efeitos: []
  },
  {
    id: "intimidacao",
    nome: "Intimidação",
    poder: 0,
    custoFoco: 8,
    descricao: "Encara o alvo até paralisar.",
    estereotipoDono: "Valentão",
    nivelMinimo: 2,
    tipoAcao: "debuff",
    alvo: "inimigo_unico",
    precisao: 95,
    chanceCrit: 0,
    efeitos: [{condicao: "atordoado", chance: 55, turnos: 1, target: "alvo"}]
  },
  {
    id: "soco_brutal",
    nome: "Soco Brutal",
    poder: 32,
    custoFoco: 14,
    descricao: "Soco com força bruta. Alto dano e crítico.",
    estereotipoDono: "Valentão",
    nivelMinimo: 4,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 85,
    chanceCrit: 25,
    efeitos: [{condicao: "sangrando", chance: 25, turnos: 2, target: "alvo"}]
  },
  {
    id: "grito_de_guerra",
    nome: "Grito de Guerra",
    poder: 0,
    custoFoco: 10,
    descricao: "Inspira a si mesmo. +ATK por 3 turnos.",
    estereotipoDono: "Valentão",
    nivelMinimo: 3,
    tipoAcao: "buff",
    alvo: "self",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "inspirado", chance: 100, turnos: 3, target: "usuario"}]
  },

  /* ---------- MÚSICO (buff multi aliados / debuff multi) ---------- */
  {
    id: "solo_de_guitarra",
    nome: "Solo de Guitarra",
    poder: 14,
    custoFoco: 6,
    descricao: "Solo poderoso que atinge todos os inimigos.",
    estereotipoDono: "Músico",
    nivelMinimo: 1,
    tipoAcao: "ataque",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 10,
    efeitos: []
  },
  {
    id: "harmonia_inspiradora",
    nome: "Harmonia Inspiradora",
    poder: 0,
    custoFoco: 10,
    descricao: "Inspira todos os aliados. +ATK por 3 turnos.",
    estereotipoDono: "Músico",
    nivelMinimo: 2,
    tipoAcao: "buff",
    alvo: "todos_aliados",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "inspirado", chance: 100, turnos: 3, target: "alvo"}]
  },
  {
    id: "acorde_sombrio",
    nome: "Acorde Sombrio",
    poder: 22,
    custoFoco: 12,
    descricao: "Toca um Bm7 com peso emocional.",
    estereotipoDono: "Músico",
    nivelMinimo: 4,
    tipoAcao: "misto",
    alvo: "todos_inimigos",
    precisao: 82,
    chanceCrit: 10,
    efeitos: [{condicao: "cansado", chance: 50, turnos: 2, target: "alvo"}]
  },
  {
    id: "cancao_da_paz",
    nome: "Canção da Paz",
    poder: 0,
    custoFoco: 14,
    descricao: "Cura todos os aliados em 25 HP.",
    estereotipoDono: "Músico",
    nivelMinimo: 5,
    tipoAcao: "cura",
    alvo: "todos_aliados",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [],
    cura: 25
  },

  /* ---------- ENTROZA (debuffs estranhos + drogado) ---------- */
  {
    id: "viagem_existencial",
    nome: "Viagem Existencial",
    poder: 16,
    custoFoco: 8,
    descricao: "Lança o alvo num devaneio metafísico.",
    estereotipoDono: "Entroza",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 82,
    chanceCrit: 10,
    efeitos: [{condicao: "confuso", chance: 45, turnos: 2, target: "alvo"}]
  },
  {
    id: "cheiro_estranho",
    nome: "Cheiro Estranho",
    poder: 12,
    custoFoco: 12,
    descricao: "Onda de odor atinge todos. Drogado.",
    estereotipoDono: "Entroza",
    nivelMinimo: 3,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 0,
    efeitos: [{condicao: "drogado", chance: 60, turnos: 3, target: "alvo"}]
  },
  {
    id: "fumacinha",
    nome: "Fumacinha",
    poder: 0,
    custoFoco: 10,
    descricao: "Conjura uma fumaça que confunde inimigos.",
    estereotipoDono: "Entroza",
    nivelMinimo: 4,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 85,
    chanceCrit: 0,
    efeitos: [
      {condicao: "drogado", chance: 50, turnos: 3, target: "alvo"},
      {condicao: "confuso", chance: 30, turnos: 2, target: "alvo"}
    ]
  },

  /* ---------- PROFESSOR (aoe + cansado) ---------- */
  {
    id: "chamada_oral",
    nome: "Chamada Oral",
    poder: 17,
    custoFoco: 6,
    descricao: "Pergunta surpresa sobre a matéria.",
    estereotipoDono: "Professor",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 10,
    efeitos: [{condicao: "cansado", chance: 40, turnos: 3, target: "alvo"}]
  },
  {
    id: "prova_surpresa",
    nome: "Prova Surpresa",
    poder: 20,
    custoFoco: 16,
    descricao: "Aplica prova em todos os inimigos. Cansaço garantido.",
    estereotipoDono: "Professor",
    nivelMinimo: 4,
    tipoAcao: "misto",
    alvo: "todos_inimigos",
    precisao: 85,
    chanceCrit: 8,
    efeitos: [{condicao: "cansado", chance: 80, turnos: 3, target: "alvo"}]
  },
  {
    id: "advertencia",
    nome: "Advertência",
    poder: 0,
    custoFoco: 8,
    descricao: "Adverte o aluno. Atordoa.",
    estereotipoDono: "Professor",
    nivelMinimo: 2,
    tipoAcao: "debuff",
    alvo: "inimigo_unico",
    precisao: 92,
    chanceCrit: 0,
    efeitos: [{condicao: "atordoado", chance: 50, turnos: 1, target: "alvo"}]
  },

  /* ---------- WOKE (debuff multi + cancelar) ---------- */
  {
    id: "textao",
    nome: "Textão",
    poder: 14,
    custoFoco: 8,
    descricao: "Posta um textão que atinge todos os inimigos.",
    estereotipoDono: "Woke",
    nivelMinimo: 1,
    tipoAcao: "ataque",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 10,
    efeitos: []
  },
  {
    id: "cancelar",
    nome: "Cancelar",
    poder: 24,
    custoFoco: 14,
    descricao: "Print, mídia, exposed. Cansa o alvo.",
    estereotipoDono: "Woke",
    nivelMinimo: 4,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 85,
    chanceCrit: 12,
    efeitos: [{condicao: "cansado", chance: 80, turnos: 3, target: "alvo"}]
  },
  {
    id: "consciencia_coletiva",
    nome: "Consciência Coletiva",
    poder: 0,
    custoFoco: 10,
    descricao: "Inspira e protege todos os aliados.",
    estereotipoDono: "Woke",
    nivelMinimo: 3,
    tipoAcao: "buff",
    alvo: "todos_aliados",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "protegido", chance: 100, turnos: 3, target: "alvo"}]
  },

  /* ---------- ESTRANHO (debuff único + confusão) ---------- */
  {
    id: "olhar_perturbador",
    nome: "Olhar Perturbador",
    poder: 16,
    custoFoco: 4,
    descricao: "Te observa. Algo está errado.",
    estereotipoDono: "Estranho",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 10,
    efeitos: [{condicao: "confuso", chance: 35, turnos: 2, target: "alvo"}]
  },
  {
    id: "sussurro_incompreensivel",
    nome: "Sussurro Incompreensível",
    poder: 22,
    custoFoco: 12,
    descricao: "Diz algo que ninguém entende mas dói.",
    estereotipoDono: "Estranho",
    nivelMinimo: 4,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 85,
    chanceCrit: 15,
    efeitos: [{condicao: "drogado", chance: 50, turnos: 3, target: "alvo"}]
  },
  {
    id: "presenca_perturbadora",
    nome: "Presença Perturbadora",
    poder: 8,
    custoFoco: 10,
    descricao: "Sua presença confunde todos.",
    estereotipoDono: "Estranho",
    nivelMinimo: 3,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 0,
    efeitos: [{condicao: "confuso", chance: 50, turnos: 2, target: "alvo"}]
  },

  /* ---------- GAMER (single + multi + rage) ---------- */
  {
    id: "combo_breaker",
    nome: "Combo Breaker",
    poder: 17,
    custoFoco: 5,
    descricao: "Interrompe o turno inimigo com um C C C+P.",
    estereotipoDono: "Gamer",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 12,
    efeitos: [{condicao: "atordoado", chance: 25, turnos: 1, target: "alvo"}]
  },
  {
    id: "rage_quit",
    nome: "Rage Quit",
    poder: 18,
    custoFoco: 16,
    descricao: "Arremessa o controle. Atinge TODOS os inimigos.",
    estereotipoDono: "Gamer",
    nivelMinimo: 5,
    tipoAcao: "ataque",
    alvo: "todos_inimigos",
    precisao: 80,
    chanceCrit: 18,
    efeitos: [{condicao: "em_chamas", chance: 30, turnos: 2, target: "alvo"}]
  },
  {
    id: "estrategia",
    nome: "Estratégia",
    poder: 0,
    custoFoco: 8,
    descricao: "Concentra-se. +crit por 3 turnos.",
    estereotipoDono: "Gamer",
    nivelMinimo: 3,
    tipoAcao: "buff",
    alvo: "self",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "concentrado", chance: 100, turnos: 3, target: "usuario"}]
  },

  /* ---------- GENTE FINA (cura + buff defesa) ---------- */
  {
    id: "elogio_sincero",
    nome: "Elogio Sincero",
    poder: 12,
    custoFoco: 4,
    descricao: "Algo gentil. O inimigo se desestrutura.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 95,
    chanceCrit: 10,
    efeitos: [{condicao: "cansado", chance: 30, turnos: 2, target: "alvo"}]
  },
  {
    id: "abraco_quentinho",
    nome: "Abraço Quentinho",
    poder: 0,
    custoFoco: 8,
    descricao: "Abraço que cura um aliado em 30 HP.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 1,
    tipoAcao: "cura",
    alvo: "aliado_unico",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [],
    cura: 30
  },
  {
    id: "boa_energia",
    nome: "Boa Energia",
    poder: 0,
    custoFoco: 12,
    descricao: "Aplica regeneração em todos os aliados.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 3,
    tipoAcao: "buff",
    alvo: "todos_aliados",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "regenerando", chance: 100, turnos: 3, target: "alvo"}]
  },
  {
    id: "tentaculo_caotico",
    nome: "Tentáculo Caótico",
    poder: 22,
    custoFoco: 10,
    descricao: "Oito tentáculos atingem todos os inimigos com dano e confusão.",
    estereotipoDono: "Professor",
    nivelMinimo: 99,
    tipoAcao: "misto",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 18,
    efeitos: [{condicao: "confuso", chance: 60, turnos: 2, target: "alvo"}]
  },
  {
    id: "ira_octopus",
    nome: "Ira do Octopus",
    poder: 38,
    custoFoco: 22,
    descricao: "Dano massivo em alvo único. Causa sangramento.",
    estereotipoDono: "Professor",
    nivelMinimo: 99,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 30,
    efeitos: [{condicao: "sangrando", chance: 70, turnos: 3, target: "alvo"}]
  },

  /* ---------- HABILIDADES DOS NOVOS ALUNOS ---------- */
  {
    id: "argumento_irrefutavel",
    nome: "Argumento Irrefutável",
    poder: 10,
    custoFoco: 10,
    descricao: "Argumenta tão bem que confunde todos os inimigos.",
    estereotipoDono: "Nerd",
    nivelMinimo: 1,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 90,
    chanceCrit: 0,
    efeitos: [{condicao: "confuso", chance: 55, turnos: 2, target: "alvo"}]
  },
  {
    id: "empurrao_surdo",
    nome: "Empurrão Surdo",
    poder: 20,
    custoFoco: 6,
    descricao: "Empurrão violento que pode atordoar.",
    estereotipoDono: "Valentão",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 92,
    chanceCrit: 14,
    efeitos: [{condicao: "atordoado", chance: 40, turnos: 1, target: "alvo"}]
  },
  {
    id: "spike_aereo",
    nome: "Spike Aéreo",
    poder: 26,
    custoFoco: 12,
    descricao: "Pula e cravadinha em um alvo. Dano cirúrgico.",
    estereotipoDono: "Atleta",
    nivelMinimo: 1,
    tipoAcao: "ataque",
    alvo: "inimigo_unico",
    precisao: 88,
    chanceCrit: 20,
    efeitos: []
  },
  {
    id: "gg_ez",
    nome: "GG EZ",
    poder: 0,
    custoFoco: 8,
    descricao: "Provoca o alvo (cansado) e se autoinspira.",
    estereotipoDono: "Gamer",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 90,
    chanceCrit: 0,
    efeitos: [
      {condicao: "cansado", chance: 60, turnos: 3, target: "alvo"},
      {condicao: "inspirado", chance: 100, turnos: 2, target: "usuario"}
    ]
  },
  {
    id: "loop_hipnotico",
    nome: "Loop Hipnótico",
    poder: 8,
    custoFoco: 12,
    descricao: "Loop que esgota todos os inimigos.",
    estereotipoDono: "Músico",
    nivelMinimo: 1,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 0,
    efeitos: [{condicao: "exausto", chance: 55, turnos: 3, target: "alvo"}]
  },
  {
    id: "olhar_distante",
    nome: "Olhar Distante",
    poder: 6,
    custoFoco: 8,
    descricao: "Olha pra um ponto fixo. Confunde inimigos.",
    estereotipoDono: "Entroza",
    nivelMinimo: 1,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 90,
    chanceCrit: 0,
    efeitos: [{condicao: "confuso", chance: 50, turnos: 2, target: "alvo"}]
  },
  {
    id: "caderneta",
    nome: "Caderneta",
    poder: 18,
    custoFoco: 8,
    descricao: "Anota a falta. Marca emocional + sangramento.",
    estereotipoDono: "Professor",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 92,
    chanceCrit: 10,
    efeitos: [{condicao: "sangrando", chance: 55, turnos: 3, target: "alvo"}]
  },
  {
    id: "indireta_pesada",
    nome: "Indireta Pesada",
    poder: 16,
    custoFoco: 6,
    descricao: "Story com indireta. Drogado de tanto pensar.",
    estereotipoDono: "Woke",
    nivelMinimo: 1,
    tipoAcao: "misto",
    alvo: "inimigo_unico",
    precisao: 88,
    chanceCrit: 12,
    efeitos: [{condicao: "drogado", chance: 60, turnos: 3, target: "alvo"}]
  },
  {
    id: "habito_esquisito",
    nome: "Hábito Esquisito",
    poder: 0,
    custoFoco: 10,
    descricao: "Faz algo bizarro. Todos ficam drogados.",
    estereotipoDono: "Estranho",
    nivelMinimo: 1,
    tipoAcao: "debuff",
    alvo: "todos_inimigos",
    precisao: 88,
    chanceCrit: 0,
    efeitos: [{condicao: "drogado", chance: 55, turnos: 3, target: "alvo"}]
  },
  {
    id: "acolhimento",
    nome: "Acolhimento",
    poder: 0,
    custoFoco: 10,
    descricao: "Acolhe um aliado: cura 25 HP + protegido.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 1,
    tipoAcao: "cura",
    alvo: "aliado_unico",
    precisao: 100,
    chanceCrit: 0,
    efeitos: [{condicao: "protegido", chance: 100, turnos: 3, target: "alvo"}],
    cura: 25
  },

  {
    id: "soco_basico_end",
    nome: "_end",
    poder: 0,
    custoFoco: 0,
    descricao: "_",
    estereotipoDono: "_",
    nivelMinimo: 99,
    tipoAcao: "ataque",
    alvo: "self",
    precisao: 100,
    chanceCrit: 0,
    efeitos: []
  }
];


/* =========================================================
   4) ITENS (consumíveis)
   ========================================================= */
const ITENS = [
  {
    id: "merenda",
    nome: "Merenda da Cantina",
    tipo: "cura_hp",
    alvo: "aliado_unico",
    valor: 35,
    descricao: "Restaura 35 HP de um aliado."
  },
  {
    id: "cafezinho",
    nome: "Cafezinho do Servidor",
    tipo: "cura_foco",
    alvo: "aliado_unico",
    valor: 25,
    descricao: "Restaura 25 Foco de um aliado."
  },
  {
    id: "energetico",
    nome: "Energético Pirata",
    tipo: "buff_atk",
    alvo: "self",
    valor: 5,
    descricao: "+5 ATK até o fim da batalha."
  },
  {
    id: "amuleto",
    nome: "Amuleto do Calouro",
    tipo: "cura_total",
    alvo: "aliado_unico",
    valor: 999,
    descricao: "Restaura totalmente HP e Foco de um aliado."
  },
  {
    id: "antidoto",
    nome: "Antídoto Genérico",
    tipo: "limpar_condicoes",
    alvo: "aliado_unico",
    valor: 0,
    descricao: "Remove todas as condições negativas de um aliado."
  },
  {
    id: "salgado_veneno",
    nome: "Salgado Vencido",
    tipo: "dano_direto",
    alvo: "inimigo_unico",
    valor: 40,
    descricao: "Joga um salgado vencido. 40 de dano fixo."
  },
  {
    id: "suco_detox",
    nome: "Suco Detox",
    tipo: "cura_status_drogado",
    alvo: "aliado_unico",
    valor: 0,
    descricao: "Remove 'Drogado' e cura 15 HP."
  },
  {
    id: "capsula_foco",
    nome: "Cápsula de Foco",
    tipo: "cura_foco_alto",
    alvo: "aliado_unico",
    valor: 50,
    descricao: "Restaura 50 Foco."
  },
  {
    id: "sticker_maneiro",
    nome: "Sticker Maneiro",
    tipo: "buff_def",
    alvo: "aliado_unico",
    valor: 0,
    descricao: "Aplica Protegido em um aliado por 3 turnos."
  },
  {
    id: "bilhetinho",
    nome: "Bilhetinho da Diretoria",
    tipo: "dano_direto",
    alvo: "inimigo_unico",
    valor: 60,
    descricao: "Convocação assustadora. 60 de dano fixo."
  },
  {
    id: "biscoito_globo",
    nome: "Biscoito Globo",
    tipo: "cura_hp",
    alvo: "todos_aliados",
    valor: 20,
    descricao: "Cura 20 HP de TODOS os aliados em campo."
  }
];


/* =========================================================
   5) LOCAIS (cenários do campus)
   ========================================================= */
const LOCAIS = [
  {
    id: "patio",
    nome: "Pátio Principal",
    bg: "patio",
    icone: "P",
    descricao: "Onde tudo começa e tudo termina.",
    desbloqueioVitorias: 0,
    inimigosPossiveis: ["rosa", "bia", "tony", "rafa", "leo", "rai", "otto", "mari"]
  },
  {
    id: "cantina",
    nome: "Cantina Lotada",
    bg: "cantina",
    icone: "C",
    descricao: "O cheiro de coxinha vencida paira no ar.",
    desbloqueioVitorias: 2,
    inimigosPossiveis: ["mello", "rosa", "bia", "luna", "bruno", "fe", "mari"]
  },
  {
    id: "quadra",
    nome: "Quadra de Futsal",
    bg: "quadra",
    icone: "Q",
    descricao: "Marcações apagadas, redes rasgadas, ego inflado.",
    desbloqueioVitorias: 4,
    inimigosPossiveis: ["dana", "tony", "mello", "ana", "bruno", "kaio"]
  },
  {
    id: "lab",
    nome: "Laboratório de Informática",
    bg: "lab",
    icone: "L",
    descricao: "Monitores antigos zumbem em uma frequência estranha.",
    desbloqueioVitorias: 6,
    inimigosPossiveis: ["puskas", "kevin", "rafa", "leo", "davi", "kaio", "adriana"]
  },
  {
    id: "ponto",
    nome: "Ponto de Ônibus",
    bg: "ponto",
    icone: "O",
    descricao: "Cheira a álcool em gel e tédio.",
    desbloqueioVitorias: 9,
    inimigosPossiveis: ["kevin", "rafa", "puskas", "dana", "luna", "ze", "otto", "rai", "adriana"]
  }
];


/* =========================================================
   6) PERSONAGENS — UM ATRIBUTO POR LINHA
   ========================================================= */
const PERSONAGENS = [

  {
    id: "puskas",
    nome: "Puskás",
    estereotipo: "Nerd",
    sprite: "assets/puskas.png",
    cor: "#7af0ff",
    hpBase: 78,
    focoBase: 68,
    ataqueBase: 14,
    defesaBase: 7,
    ataques: ["calc_brutal", "teorema_destruidor", "explicar_tudo"],
    descricao: "Carrega três HDs externos só com PDFs.",
    isStarter: true
  },

  {
    id: "dana",
    nome: "Dana",
    estereotipo: "Músico",
    sprite: "assets/dana.png",
    cor: "#c77dff",
    hpBase: 82,
    focoBase: 70,
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["solo_de_guitarra", "harmonia_inspiradora", "acorde_sombrio", "cancao_da_paz"],
    descricao: "Compõe músicas no banheiro entre aulas.",
    isStarter: true
  },

  {
    id: "mello",
    nome: "Mello",
    estereotipo: "Valentão",
    sprite: "assets/mello.png",
    cor: "#ff4d6d",
    hpBase: 85,
    focoBase: 38,
    ataqueBase: 14,
    defesaBase: 8,
    ataques: ["headbutt_idiota", "intimidacao", "soco_brutal", "grito_de_guerra"],
    descricao: "Sabe seu nome, sua matrícula e seu medo.",
    isStarter: true
  },

  {
    id: "tony",
    nome: "Tony",
    estereotipo: "Atleta",
    sprite: "assets/tony.png",
    cor: "#6effb0",
    hpBase: 90,
    focoBase: 40,
    ataqueBase: 14,
    defesaBase: 8,
    ataques: ["carrinho_violento", "supino_de_castigo", "varrer_a_quadra"],
    descricao: "Faz 100 abdominais entre uma aula e outra.",
    isStarter: false
  },

  {
    id: "rosa",
    nome: "Rosa",
    estereotipo: "Entroza",
    sprite: "assets/rosa.png",
    cor: "#ffcc4d",
    hpBase: 70,
    focoBase: 65,
    ataqueBase: 11,
    defesaBase: 6,
    ataques: ["viagem_existencial", "cheiro_estranho", "fumacinha"],
    descricao: "Acredita que o IFC é uma simulação.",
    isStarter: false
  },

  {
    id: "rafa",
    nome: "Prof. Rafa",
    estereotipo: "Professor",
    sprite: "assets/rafa.png",
    cor: "#ff8c42",
    hpBase: 85,
    focoBase: 60,
    ataqueBase: 13,
    defesaBase: 9,
    ataques: ["chamada_oral", "advertencia", "prova_surpresa"],
    descricao: "Não aceita atraso e não responde no privado.",
    isStarter: false
  },

  {
    id: "bia",
    nome: "Bia",
    estereotipo: "Woke",
    sprite: "assets/bia.png",
    cor: "#9d4edd",
    hpBase: 72,
    focoBase: 60,
    ataqueBase: 12,
    defesaBase: 7,
    ataques: ["textao", "cancelar", "consciencia_coletiva"],
    descricao: "Tem 8 redes sociais e usa todas pra denunciar.",
    isStarter: false
  },

  {
    id: "kevin",
    nome: "Kevin",
    estereotipo: "Estranho",
    sprite: "assets/kevin.png",
    cor: "#5a189a",
    hpBase: 78,
    focoBase: 55,
    ataqueBase: 12,
    defesaBase: 7,
    ataques: ["olhar_perturbador", "sussurro_incompreensivel", "presenca_perturbadora"],
    descricao: "Aparece em fotos sem ter sido convidado.",
    isStarter: false
  },

  {
    id: "leo",
    nome: "Léo",
    estereotipo: "Gamer",
    sprite: "assets/leo.png",
    cor: "#00b4d8",
    hpBase: 72,
    focoBase: 60,
    ataqueBase: 13,
    defesaBase: 6,
    ataques: ["combo_breaker", "estrategia", "rage_quit"],
    descricao: "Joga ranqueada em vez de fazer trabalho.",
    isStarter: false
  },

  {
    id: "luna",
    nome: "Luna",
    estereotipo: "Gente Fina",
    sprite: "assets/luna.png",
    cor: "#90e0ef",
    hpBase: 82,
    focoBase: 60,
    ataqueBase: 11,
    defesaBase: 8,
    ataques: ["elogio_sincero", "abraco_quentinho", "boa_energia", "escudo_de_bondade"],
    descricao: "Sempre tem um chiclete pra te oferecer.",
    isStarter: false
  },

  {
    id: "davi",
    nome: "Davi",
    estereotipo: "Nerd",
    sprite: "assets/davi.png",
    cor: "#48cae4",
    hpBase: 68,
    focoBase: 72,
    ataqueBase: 13,
    defesaBase: 6,
    ataques: ["argumento_irrefutavel", "calc_brutal"],
    descricao: "Carrega 5 livros de cálculo na mochila.",
    isStarter: false
  },

  {
    id: "bruno",
    nome: "Bruno",
    estereotipo: "Valentão",
    sprite: "assets/bruno.png",
    cor: "#e63946",
    hpBase: 100,
    focoBase: 32,
    ataqueBase: 15,
    defesaBase: 10,
    ataques: ["empurrao_surdo", "headbutt_idiota"],
    descricao: "Bate primeiro, conversa depois.",
    isStarter: false
  },

  {
    id: "ana",
    nome: "Ana",
    estereotipo: "Atleta",
    sprite: "assets/ana.png",
    cor: "#52b788",
    hpBase: 92,
    focoBase: 42,
    ataqueBase: 15,
    defesaBase: 8,
    ataques: ["spike_aereo", "carrinho_violento"],
    descricao: "Capitã do time, joga limpo.",
    isStarter: false
  },

  {
    id: "kaio",
    nome: "Kaio",
    estereotipo: "Gamer",
    sprite: "assets/kaio.png",
    cor: "#0096c7",
    hpBase: 74,
    focoBase: 62,
    ataqueBase: 14,
    defesaBase: 6,
    ataques: ["gg_ez", "combo_breaker"],
    descricao: "Stream 8h por dia, não sabe sair do gás.",
    isStarter: false
  },

  {
    id: "fe",
    nome: "Fê",
    estereotipo: "Músico",
    sprite: "assets/fe.png",
    cor: "#a06cd5",
    hpBase: 78,
    focoBase: 66,
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["loop_hipnotico", "solo_de_guitarra"],
    descricao: "DJ underground, mistura tudo.",
    isStarter: false
  },

  {
    id: "ze",
    nome: "Zé",
    estereotipo: "Entroza",
    sprite: "assets/ze.png",
    cor: "#ffb703",
    hpBase: 72,
    focoBase: 60,
    ataqueBase: 12,
    defesaBase: 6,
    ataques: ["olhar_distante", "viagem_existencial"],
    descricao: "Não sabe que dia é hoje.",
    isStarter: false
  },

  {
    id: "adriana",
    nome: "Profa. Adriana",
    estereotipo: "Professor",
    sprite: "assets/adriana.png",
    cor: "#fb8500",
    hpBase: 86,
    focoBase: 62,
    ataqueBase: 14,
    defesaBase: 9,
    ataques: ["caderneta", "advertencia"],
    descricao: "Lê redação em voz alta na frente da turma.",
    isStarter: false
  },

  {
    id: "rai",
    nome: "Rai",
    estereotipo: "Woke",
    sprite: "assets/rai.png",
    cor: "#7b2cbf",
    hpBase: 74,
    focoBase: 62,
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["indireta_pesada", "textao"],
    descricao: "Faz textão a cada 2 horas.",
    isStarter: false
  },

  {
    id: "otto",
    nome: "Otto",
    estereotipo: "Estranho",
    sprite: "assets/otto.png",
    cor: "#6f2dbd",
    hpBase: 80,
    focoBase: 56,
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["habito_esquisito", "olhar_perturbador"],
    descricao: "Coleciona pedras achadas no chão.",
    isStarter: false
  },

  {
    id: "mari",
    nome: "Mari",
    estereotipo: "Gente Fina",
    sprite: "assets/mari.png",
    cor: "#ade8f4",
    hpBase: 84,
    focoBase: 58,
    ataqueBase: 11,
    defesaBase: 9,
    ataques: ["acolhimento", "elogio_sincero"],
    descricao: "Tem chá pra cada intervalo.",
    isStarter: false
  },

  {
    id: "cleber_octopus",
    nome: "Cleber Octopus",
    estereotipo: "Professor",
    sprite: "assets/cleber.png",
    cor: "#8b0000",
    hpBase: 240,
    focoBase: 120,
    ataqueBase: 22,
    defesaBase: 14,
    ataques: ["tentaculo_caotico", "ira_octopus", "prova_surpresa", "advertencia"],
    descricao: "O diretor das sombras. Oito braços, mil broncas.",
    isStarter: false,
    isBoss: true
  }

];


/* =========================================================
   7) ESTADO DO JOGO
   ========================================================= */
const SAVE_KEY = "ifc_sombrio_save_v2";

const state = {
  party: [],
  ativo: 0,
  inventario: {},
  derrotados: [],
  batalha: null,
  iniciado: false,
  somAtivo: true,
  batalhasPorLocal: {},
  stats: { acoesUsadas: {}, inimigosDerrotados: 0, batalhasVencidas: 0, criticosDados: 0 },
  bossDerrotado: false
};


/* =========================================================
   8) HELPERS
   ========================================================= */
function getPersonagem(id) { return PERSONAGENS.find(p => p.id === id); }
function getAtaque(id)     { return ATAQUES.find(a => a.id === id); }
function getItem(id)       { return ITENS.find(i => i.id === id); }
function getLocal(id)      { return LOCAIS.find(l => l.id === id); }
function getCondicao(id)   { return CONDICOES.find(c => c.id === id); }

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function instanciarPersonagem(base, nivel = 1) {
  const ataquesIniciais = ATAQUES
    .filter(a => (a.estereotipoDono === base.estereotipo || a.estereotipoDono === "*")
              && a.nivelMinimo <= nivel)
    .map(a => a.id);

  return {
    uid: base.id + "_" + Math.random().toString(36).slice(2, 7),
    id: base.id,
    nome: base.nome,
    estereotipo: base.estereotipo,
    sprite: base.sprite,
    cor: base.cor,
    nivel: nivel,
    xp: 0,
    hpMax: base.hpBase + (nivel - 1) * 10,
    hp:    base.hpBase + (nivel - 1) * 10,
    focoMax: base.focoBase + (nivel - 1) * 5,
    foco:    base.focoBase + (nivel - 1) * 5,
    ataque:  base.ataqueBase + (nivel - 1) * 2,
    defesa:  base.defesaBase + (nivel - 1) * 1,
    ataques: ataquesIniciais.length > 0 ? ataquesIniciais : ["soco_basico"],
    buffAtk: 0,
    condicoes: [],
    cooldowns: {}
  };
}

function xpParaProximoNivel(nivel) { return 30 + nivel * 20; }


/* =========================================================
   9) SOUND SYSTEM (Web Audio API + arquivos)
   ========================================================= */
const SFX = {
  ctx: null,
  cache: {},

  init() {
    if (!this.ctx) {
      try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch(e) { this.ctx = null; }
    }
  },

  beep(freq, duration, type = "square", vol = 0.08) {
    if (!state.somAtivo) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + duration);
  },

  // Tenta arquivo, senão usa beep generativo
  playOrBeep(name, fallback) {
    if (!state.somAtivo) return;
    if (this.cache[name] === false) { fallback(); return; }
    if (this.cache[name]) {
      try { this.cache[name].currentTime = 0; this.cache[name].play(); }
      catch(e) { fallback(); }
      return;
    }
    const audio = new Audio(`assets/sfx/${name}.mp3`);
    audio.volume = 0.4;
    audio.addEventListener("canplaythrough", () => {
      this.cache[name] = audio;
      try { audio.play(); } catch(e) {}
    }, { once: true });
    audio.addEventListener("error", () => {
      this.cache[name] = false;
      fallback();
    }, { once: true });
  },

  hit()      { this.playOrBeep("hit",      () => this.beep(220, 0.10, "square", 0.10)); },
  crit()     { this.playOrBeep("crit",     () => { this.beep(660, 0.08, "square"); setTimeout(()=>this.beep(880, 0.12, "square"), 80); }); },
  miss()     { this.playOrBeep("miss",     () => this.beep(160, 0.12, "sawtooth", 0.06)); },
  heal()     { this.playOrBeep("heal",     () => { this.beep(523, 0.10, "sine"); setTimeout(()=>this.beep(784, 0.14, "sine"), 80); }); },
  buff()     { this.playOrBeep("buff",     () => { this.beep(440, 0.08, "triangle"); setTimeout(()=>this.beep(660, 0.10, "triangle"), 70); }); },
  debuff()   { this.playOrBeep("debuff",   () => { this.beep(330, 0.10, "sawtooth"); setTimeout(()=>this.beep(220, 0.12, "sawtooth"), 80); }); },
  menu()     { this.playOrBeep("menu",     () => this.beep(880, 0.04, "square", 0.05)); },
  victory()  { this.playOrBeep("victory",  () => { [523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.beep(f,0.15,"triangle"), i*120)); }); },
  defeat()   { this.playOrBeep("defeat",   () => { [392,330,262,196].forEach((f,i)=>setTimeout(()=>this.beep(f,0.20,"sawtooth"), i*150)); }); },
  levelUp()  { this.playOrBeep("levelup",  () => { [523,659,784,1047,1319].forEach((f,i)=>setTimeout(()=>this.beep(f,0.10,"square"), i*80)); }); }
};


/* =========================================================
   10) PIXEL SPRITE GENERATOR (canvas) — fallback
   ========================================================= */
function gerarSpritePixel(personagem, tamanho = 96) {
  const canvas = document.createElement("canvas");
  canvas.width = 16; canvas.height = 16;
  canvas.className = "pixel-sprite";
  canvas.style.width = tamanho + "px";
  canvas.style.height = tamanho + "px";
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 16, 16);

  const cor = personagem.cor || "#f4e9d8";
  const corEscura = sombrear(cor, -40);
  const corPele = "#f3c79b";
  const corPeleEscura = "#c79468";
  const preto = "#1a0f0a";

  ctx.fillStyle = corPele;     ctx.fillRect(5, 2, 6, 5);
  ctx.fillStyle = corPeleEscura; ctx.fillRect(5, 6, 6, 1);
  ctx.fillStyle = cor;

  switch (personagem.estereotipo) {
    case "Nerd":
      ctx.fillRect(5, 1, 6, 2); ctx.fillRect(4, 2, 1, 2);
      ctx.fillStyle = preto; ctx.fillRect(5, 4, 2, 1); ctx.fillRect(9, 4, 2, 1); break;
    case "Atleta":
      ctx.fillRect(5, 1, 6, 1); ctx.fillRect(4, 2, 1, 1); ctx.fillRect(11, 2, 1, 1); break;
    case "Valentão":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = preto; ctx.fillRect(6, 4, 1, 1); ctx.fillRect(9, 4, 1, 1); break;
    case "Músico":
      ctx.fillRect(4, 1, 8, 3); ctx.fillRect(3, 2, 1, 3); ctx.fillRect(12, 2, 1, 3); break;
    case "Entroza":
      ctx.fillRect(4, 0, 8, 3); ctx.fillRect(3, 1, 1, 4); ctx.fillRect(12, 1, 1, 4); ctx.fillRect(4, 7, 8, 1); break;
    case "Professor":
      ctx.fillStyle = "#888"; ctx.fillRect(5, 1, 6, 2);
      ctx.fillStyle = preto; ctx.fillRect(5, 4, 2, 1); ctx.fillRect(9, 4, 2, 1);
      ctx.fillStyle = "#888"; ctx.fillRect(7, 5, 2, 1); break;
    case "Woke":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = "#ff4d6d"; ctx.fillRect(4, 2, 2, 1);
      ctx.fillStyle = "#7af0ff"; ctx.fillRect(10, 2, 2, 1); break;
    case "Estranho":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = "#ff0"; ctx.fillRect(6, 4, 1, 1); ctx.fillRect(9, 4, 1, 1); break;
    case "Gamer":
      ctx.fillRect(5, 1, 6, 2);
      ctx.fillStyle = preto; ctx.fillRect(4, 2, 1, 3); ctx.fillRect(11, 2, 1, 3); break;
    case "Gente Fina":
      ctx.fillRect(5, 1, 6, 2);
      ctx.fillStyle = "#ff4d6d"; ctx.fillRect(6, 6, 4, 1); break;
    default:
      ctx.fillRect(5, 1, 6, 2);
  }

  if (!["Valentão","Estranho","Nerd","Professor"].includes(personagem.estereotipo)) {
    ctx.fillStyle = preto; ctx.fillRect(6, 4, 1, 1); ctx.fillRect(9, 4, 1, 1);
  }

  ctx.fillStyle = corEscura; ctx.fillRect(4, 8, 8, 5);
  ctx.fillStyle = cor;       ctx.fillRect(5, 9, 6, 3);
  ctx.fillStyle = preto;     ctx.fillRect(5, 13, 2, 3); ctx.fillRect(9, 13, 2, 3);
  ctx.fillStyle = corPele;   ctx.fillRect(3, 9, 1, 3);  ctx.fillRect(12, 9, 1, 3);

  return canvas;
}

function sombrear(hex, amt) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const num = parseInt(h, 16);
  let r = clamp(((num >> 16) & 0xff) + amt, 0, 255);
  let g = clamp(((num >>  8) & 0xff) + amt, 0, 255);
  let b = clamp((num & 0xff) + amt, 0, 255);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function montarSprite(targetEl, personagem) {
  targetEl.innerHTML = "";
  if (personagem.sprite) {
    // Loading placeholder discreto (sem flash do canvas)
    const placeholder = document.createElement("div");
    placeholder.className = "sprite-loading";
    placeholder.textContent = "...";
    targetEl.appendChild(placeholder);

    const img = new Image();
    img.onload  = () => { targetEl.innerHTML = ""; targetEl.appendChild(img); };
    img.onerror = () => {
      targetEl.innerHTML = "";
      targetEl.appendChild(gerarSpritePixel(personagem, targetEl.clientWidth));
    };
    img.src = personagem.sprite;
    img.alt = personagem.nome;
  } else {
    targetEl.appendChild(gerarSpritePixel(personagem, targetEl.clientWidth));
  }
}


/* =========================================================
   11) SAVE / LOAD
   ========================================================= */
function salvarJogo() {
  const data = {
    party: state.party, ativo: state.ativo, inventario: state.inventario,
    derrotados: state.derrotados, iniciado: state.iniciado, somAtivo: state.somAtivo,
    batalhasPorLocal: state.batalhasPorLocal, stats: state.stats, bossDerrotado: state.bossDerrotado,
    ts: Date.now()
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
}

function carregarJogo() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    state.party = data.party || []; state.ativo = data.ativo || 0;
    state.inventario = data.inventario || {}; state.derrotados = data.derrotados || [];
    state.iniciado = data.iniciado || false;
    state.somAtivo = data.somAtivo !== undefined ? data.somAtivo : true;
    state.batalhasPorLocal = data.batalhasPorLocal || {};
    state.stats = data.stats || { acoesUsadas: {}, inimigosDerrotados: 0, batalhasVencidas: 0, criticosDados: 0 };
    state.bossDerrotado = data.bossDerrotado || false;
    return state.party.length > 0;
  } catch (e) { return false; }
}

function temSave() { return !!localStorage.getItem(SAVE_KEY); }
function apagarSave() { localStorage.removeItem(SAVE_KEY); }


/* =========================================================
   12) NAVEGAÇÃO DE TELAS
   ========================================================= */
function mostrarTela(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function abrirModal(titulo, corpo, botoes) {
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-body").textContent  = corpo;
  const actions = document.getElementById("modal-actions");
  actions.innerHTML = "";
  botoes.forEach(b => {
    const btn = document.createElement("button");
    btn.className = "pixel-btn small" + (b.danger ? " danger" : "");
    btn.textContent = b.label;
    btn.setAttribute("data-testid", b.testid || "modal-btn");
    btn.onclick = () => { fecharModal(); if (b.onClick) b.onClick(); };
    actions.appendChild(btn);
  });
  document.getElementById("modal").classList.remove("hidden");
}

function fecharModal() { document.getElementById("modal").classList.add("hidden"); }


/* =========================================================
   13) TÍTULO
   ========================================================= */
function initTitulo() {
  document.getElementById("btn-continue").disabled = !temSave();
  document.getElementById("btn-continue").style.opacity = temSave() ? "1" : "0.4";

  document.getElementById("btn-new-game").onclick = () => {
    SFX.menu();
    if (temSave()) {
      abrirModal("Apagar progresso?", "Já existe um save. Iniciar novo jogo irá apagá-lo.", [
        { label: "CANCELAR", testid: "modal-cancel" },
        { label: "APAGAR", danger: true, testid: "modal-confirm",
          onClick: () => { apagarSave(); irParaSelecaoStarter(); } }
      ]);
    } else { irParaSelecaoStarter(); }
  };

  document.getElementById("btn-continue").onclick = () => {
    SFX.menu();
    if (carregarJogo()) { renderMapa(); mostrarTela("screen-map"); }
  };
}


/* =========================================================
   14) STARTER
   ========================================================= */
function irParaSelecaoStarter() {
  const grid = document.getElementById("starter-grid");
  grid.innerHTML = "";
  PERSONAGENS.filter(p => p.isStarter).forEach(p => {
    const card = document.createElement("div");
    card.className = "starter-card";
    card.setAttribute("data-testid", `starter-${p.id}`);
    card.innerHTML = `
      <div class="sprite-box"></div>
      <h3>${p.nome}</h3>
      <div class="stereo-tag">${p.estereotipo}</div>
      <div class="stats">
        HP ${p.hpBase} · Foco ${p.focoBase}<br/>
        ATK ${p.ataqueBase} · DEF ${p.defesaBase}<br/>
        <em>"${p.descricao}"</em>
      </div>
    `;
    montarSprite(card.querySelector(".sprite-box"), p);
    card.onclick = () => { SFX.menu(); escolherStarter(p); };
    grid.appendChild(card);
  });
  mostrarTela("screen-pick-starter");
}

function escolherStarter(personagemBase) {
  state.party = [instanciarPersonagem(personagemBase, 1)];
  state.ativo = 0;
  state.inventario = { merenda: 3, cafezinho: 2, antidoto: 1, biscoito_globo: 1, suco_detox: 1 };
  state.derrotados = [];
  state.iniciado = true;
  salvarJogo();
  renderMapa();
  mostrarTela("screen-map");
}


/* =========================================================
   15) MAPA
   ========================================================= */
function renderMapa() {
  const grid = document.getElementById("map-grid");
  grid.innerHTML = "";
  const vitorias = state.stats.batalhasVencidas;
  const todosLocaisConquistados = LOCAIS.every(l => {
    const gr = state.batalhasPorLocal[l.id];
    return gr && gr.every(g => g.vencido);
  });
  LOCAIS.forEach(loc => {
    const card = document.createElement("div");
    const desbloqueado = vitorias >= (loc.desbloqueioVitorias || 0);
    card.className = "location-card" + (desbloqueado ? "" : " locked");
    card.setAttribute("data-testid", `location-${loc.id}`);
    card.setAttribute("data-bg", loc.bg);
    if (desbloqueado) {
      const gr = state.batalhasPorLocal[loc.id];
      const restantes = gr ? gr.filter(g => !g.vencido).length : 3;
      const conquistado = gr && restantes === 0;
      card.innerHTML = `
        <div class="loc-icon">${conquistado ? "✓" : loc.icone}</div>
        <h3>${loc.nome}</h3>
        <p>${loc.descricao}</p>
        <div class="loc-foes">${conquistado ? "Local conquistado" : `${restantes}/3 duelos restantes`}</div>
      `;
      card.onclick = () => { SFX.menu(); irParaLocacao(loc); };
    } else {
      const faltam = loc.desbloqueioVitorias - vitorias;
      card.innerHTML = `
        <div class="loc-icon">🔒</div>
        <h3>${loc.nome}</h3>
        <p>Vença mais ${faltam} ${faltam === 1 ? "batalha" : "batalhas"} para desbloquear.</p>
        <div class="loc-foes">Bloqueado</div>
      `;
    }
    grid.appendChild(card);
  });
  if (todosLocaisConquistados && !state.bossDerrotado) {
    const bossCard = document.createElement("div");
    bossCard.className = "location-card boss-card";
    bossCard.setAttribute("data-testid", "location-boss");
    bossCard.innerHTML = `
      <div class="loc-icon">👁</div>
      <h3>CLEBER OCTOPUS</h3>
      <p>O Diretor das Sombras te aguarda. Última batalha.</p>
      <div class="loc-foes">BOSS FINAL</div>
    `;
    bossCard.onclick = () => {
      SFX.menu();
      state.batalha_grupo_idx = 0;
      mostrarDialogoBoss(() => {
        iniciarBatalha([getPersonagem("cleber_octopus")], { id: "boss", nome: "Sala do Diretor", bg: "boss" });
      });
    };
    grid.appendChild(bossCard);
  }
  renderPlayerStatus();
}

function mostrarDialogoBoss(onFinish) {
  let overlay = document.getElementById("boss-intro");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "boss-intro";
    document.getElementById("game-container").appendChild(overlay);
  }
  overlay.innerHTML = `
    <div class="boss-intro-frame">
      <div class="boss-portrait"><img src="assets/cleber.png" alt="Cleber Octopus"/></div>
      <div class="boss-name">CLEBER OCTOPUS</div>
      <div class="boss-title">Diretor das Sombras · Mestre do ENIAC</div>
      <div class="boss-dialog" id="boss-dialog-text"></div>
      <button class="pixel-btn" data-testid="btn-boss-start" id="btn-boss-start" style="opacity:0;pointer-events:none">INICIAR BATALHA</button>
    </div>
  `;
  overlay.classList.add("active");

  const fala = '"O ENIAC é mais poderoso que todos vocês... esse é o seu fim."';
  const el = document.getElementById("boss-dialog-text");
  let i = 0;
  const typer = setInterval(() => {
    el.textContent = fala.slice(0, ++i);
    if (i % 3 === 0) SFX.beep(420, 0.02, "square", 0.04);
    if (i >= fala.length) {
      clearInterval(typer);
      const btn = document.getElementById("btn-boss-start");
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
      btn.onclick = () => {
        SFX.menu();
        overlay.classList.remove("active");
        onFinish();
      };
    }
  }, 35);
}

function mostrarTelaFinal() {
  const screen = document.getElementById("screen-final") || (() => {
    const s = document.createElement("section");
    s.id = "screen-final";
    s.className = "screen";
    document.getElementById("game-container").appendChild(s);
    return s;
  })();
  const topAcoes = Object.entries(state.stats.acoesUsadas).sort((a,b) => b[1]-a[1]).slice(0,5);
  const topChar = state.party.slice().sort((a,b) => (b.nivel*100+b.xp) - (a.nivel*100+a.xp))[0];
  screen.innerHTML = `
    <div class="final-frame">
      <h1 class="title-main" style="color:var(--accent)">VITÓRIA!</h1>
      <h2 class="title-sub">Você derrotou Cleber Octopus.</h2>
      <p class="title-flavor">O IFC Sombrio finalmente conhece a luz.</p>
      <div class="stats-grid">
        <div><strong>Batalhas vencidas:</strong> ${state.stats.batalhasVencidas}</div>
        <div><strong>Inimigos derrotados:</strong> ${state.stats.inimigosDerrotados}</div>
        <div><strong>Críticos dados:</strong> ${state.stats.criticosDados}</div>
        <div><strong>Personagem destaque:</strong> ${topChar ? `${topChar.nome} Nv${topChar.nivel}` : "—"}</div>
        <div><strong>Tamanho da party:</strong> ${state.party.length}</div>
        <div><strong>Top ações:</strong><br/>${topAcoes.map(([id,n]) => `• ${getAtaque(id)?.nome||id}: ${n}`).join("<br/>") || "—"}</div>
      </div>
      <button class="pixel-btn" data-testid="btn-final-restart" onclick="apagarSave();location.reload();">JOGAR DE NOVO</button>
    </div>
  `;
  mostrarTela("screen-final");
}

function renderPlayerStatus() {
  const el = document.getElementById("player-status");
  const ativo = state.party[state.ativo];
  if (!ativo) return;
  el.innerHTML = `
    <div class="ps-line"><strong>${ativo.nome}</strong><span>${ativo.estereotipo}</span></div>
    <div class="ps-line"><span>Nv ${ativo.nivel}</span><span>XP ${ativo.xp}/${xpParaProximoNivel(ativo.nivel)}</span></div>
    <div class="ps-line"><span>HP ${ativo.hp}/${ativo.hpMax}</span><span>Foco ${ativo.foco}/${ativo.focoMax}</span></div>
    <div class="ps-line"><span>Party</span><span>${state.party.length}/6</span></div>
  `;
}


/* =========================================================
   16) LOCAÇÃO (silhuetas)
   ========================================================= */
let locacaoAtual = null;

function irParaLocacao(loc) {
  locacaoAtual = loc;
  document.getElementById("location-title").textContent = loc.nome;
  document.getElementById("location-desc").textContent  = loc.descricao + " Veja silhuetas suspeitas por aqui:";
  const grid = document.getElementById("silhouette-grid");
  grid.innerHTML = "";

  // Inicializa duelos do local APENAS na primeira visita; mantém estado vencido entre revisitas
  if (!state.batalhasPorLocal[loc.id]) {
    const candidatos = loc.inimigosPossiveis.map(id => getPersonagem(id)).filter(p => p);
    const grupos = [];
    // Garante VARIEDADE: cada grupo sorteia personagens diferentes entre si
    for (let g = 0; g < 3; g++) {
      const tamanho = rand(1, Math.min(3, state.party.length + 1));
      const pool = [...candidatos].sort(() => Math.random() - 0.5);
      const escolhidos = [];
      const usados = new Set();
      for (const c of pool) {
        if (escolhidos.length >= tamanho) break;
        if (!usados.has(c.id)) {
          escolhidos.push(c);
          usados.add(c.id);
        }
      }
      grupos.push({ ids: escolhidos.map(p => p.id), vencido: false });
    }
    state.batalhasPorLocal[loc.id] = grupos;
    salvarJogo();
  }

  const grupos = state.batalhasPorLocal[loc.id];
  const todosVencidos = grupos.every(g => g.vencido);

  grupos.forEach((grupo, idx) => {
    const card = document.createElement("div");
    card.className = "silhouette-card" + (grupo.vencido ? " defeated" : "");
    card.setAttribute("data-testid", `silhouette-${idx}`);
    const silsHtml = grupo.ids.map(() => `<div class="silhouette-box small-sil"></div>`).join("");
    card.innerHTML = `
      <div class="silhouette-row">${silsHtml}</div>
      <div class="sil-label">${grupo.vencido ? "✓ Derrotado" : (grupo.ids.length === 1 ? "1 oponente" : `${grupo.ids.length} oponentes`)}</div>
    `;
    if (!grupo.vencido) {
      card.onclick = () => {
        SFX.menu();
        const grupoChars = grupo.ids.map(id => getPersonagem(id));
        state.batalha_grupo_idx = idx;
        iniciarBatalha(grupoChars, loc);
      };
    } else {
      card.style.pointerEvents = "none";
    }
    grid.appendChild(card);
  });

  if (todosVencidos) {
    const aviso = document.createElement("div");
    aviso.className = "all-cleared";
    aviso.innerHTML = `<strong>✓ Local Conquistado!</strong>`;
    grid.appendChild(aviso);
  }

  document.getElementById("btn-back-map").onclick = () => { SFX.menu(); mostrarTela("screen-map"); };
  mostrarTela("screen-location");
}


/* =========================================================
   17) BATALHA
   ========================================================= */
function iniciarBatalha(inimigosBases, loc) {
  const nivelMedio = state.party[state.ativo].nivel;
  const inimigos = inimigosBases.map(b => {
    const nv = Math.max(1, nivelMedio + rand(-1, 1));
    return instanciarPersonagem(b, nv);
  });
  const partyEmCampo = state.party.filter(p => p.hp > 0).slice(0, 3);

  state.batalha = {
    inimigos: inimigos,
    inimigosBaseIds: inimigosBases.map(b => b.id),
    partyEmCampo: partyEmCampo,
    local: loc,
    grupoIdx: state.batalha_grupo_idx,
    turnoAtor: 0,
    fase: "player",
    log: [],
    acabou: false,
    acaoAtual: null
  };

  document.getElementById("battle-scene").setAttribute("data-bg", loc.bg);
  document.body.classList.toggle("boss-fight", loc.bg === "boss");
  renderBatalha();
  log(`Você encontrou ${inimigos.map(i => i.nome).join(", ")} em ${loc.nome}!`, "system");
  log(`Hora da batalha!`, "system");
  mostrarTela("screen-battle");
  proximoTurno();
}

function renderBatalha() {
  const b = state.batalha;
  if (!b) return;

  // ENEMIES
  const enemyContainer = document.getElementById("enemies-container");
  enemyContainer.innerHTML = "";
  b.inimigos.forEach((inim, idx) => {
    enemyContainer.appendChild(criarCardCombatente(inim, idx, "enemy"));
  });

  // PARTY
  const partyContainer = document.getElementById("party-container");
  partyContainer.innerHTML = "";
  b.partyEmCampo.forEach((p, idx) => {
    partyContainer.appendChild(criarCardCombatente(p, idx, "player"));
  });

  // Marca quem é o ator atual
  if (b.fase === "player" && b.partyEmCampo[b.turnoAtor]) {
    const card = partyContainer.children[b.turnoAtor];
    if (card) card.classList.add("active-turn");
  }

  document.getElementById("battle-menu").classList.remove("hidden");
  document.getElementById("battle-submenu").classList.add("hidden");
  document.getElementById("battle-target").classList.add("hidden");
}

function criarCardCombatente(c, idx, lado) {
  const wrap = document.createElement("div");
  wrap.className = "combatant " + (lado === "enemy" ? "is-enemy" : "is-player");
  wrap.setAttribute("data-uid", c.uid);
  wrap.setAttribute("data-testid", `combatant-${lado}-${idx}`);
  if (c.hp <= 0) wrap.classList.add("ko");

  const condBadges = c.condicoes.map(cd => {
    const def = getCondicao(cd.id);
    return `<span class="cond-badge" style="background:${def.cor}" title="${def.nome} (${cd.turnos})">${def.icone}</span>`;
  }).join("");

  const estilo = ESTILO_CLASSE[c.estereotipo] || { cor: "#888", icone: "?" };
  const forte = VANTAGENS[c.estereotipo];
  const fraco = DESVANTAGENS[c.estereotipo];

  const hasFoco = lado === "player";
  const barsHtml = `
    <div class="bar hp"><div class="bar-fill" style="width:${(c.hp/c.hpMax)*100}%"></div><span class="bar-label">${c.hp}/${c.hpMax}</span></div>
    ${hasFoco ? `<div class="bar mp"><div class="bar-fill" style="width:${(c.foco/c.focoMax)*100}%"></div><span class="bar-label">${c.foco}/${c.focoMax}</span></div>` : ""}
  `;

  wrap.innerHTML = `
    <div class="class-badge" style="background:${estilo.cor}" title="${c.estereotipo}">${estilo.icone}</div>
    <div class="sprite-box battle-sprite"></div>
    <div class="combatant-info">
      <div class="char-name">${c.nome} Nv${c.nivel}</div>
      <div class="char-stereo" style="color:${estilo.cor}">${c.estereotipo}</div>
      ${barsHtml}
      <div class="matchup-row">
        <span class="mu-strong" title="Forte contra">▲ ${forte}</span>
        <span class="mu-weak" title="Fraco contra">▼ ${fraco}</span>
      </div>
      <div class="cond-row">${condBadges}</div>
    </div>
  `;
  montarSprite(wrap.querySelector(".sprite-box"), c);
  return wrap;
}

function log(texto, tipo = "") {
  const logEl = document.getElementById("battle-log");
  const linha = document.createElement("div");
  linha.className = "log-line " + tipo;
  linha.textContent = "> " + texto;
  logEl.appendChild(linha);
  logEl.scrollTop = logEl.scrollHeight;
}


/* ---------- TURNO SYSTEM ---------- */
function proximoTurno() {
  const b = state.batalha;
  if (!b || b.acabou) return;

  // Check fim de batalha
  if (b.inimigos.every(i => i.hp <= 0)) { finalizarVitoria(); return; }
  if (b.partyEmCampo.every(p => p.hp <= 0)) { finalizarDerrota(); return; }

  if (b.fase === "player") {
    // Encontrar próximo aliado vivo
    while (b.turnoAtor < b.partyEmCampo.length && b.partyEmCampo[b.turnoAtor].hp <= 0) {
      b.turnoAtor++;
    }
    if (b.turnoAtor >= b.partyEmCampo.length) {
      // Fim da fase player → processa condições e vai pra fase enemy
      processarCondicoesTurno(b.partyEmCampo);
      b.fase = "enemy";
      b.turnoAtor = 0;
      renderBatalha();
      setTimeout(proximoTurno, 600);
      return;
    }
    // Verifica se está atordoado/exausto antes de permitir agir
    const ator = b.partyEmCampo[b.turnoAtor];
    if (checarPerderTurno(ator)) {
      b.turnoAtor++;
      setTimeout(proximoTurno, 700);
      return;
    }
    renderBatalha();
  } else {
    // ENEMY phase
    while (b.turnoAtor < b.inimigos.length && b.inimigos[b.turnoAtor].hp <= 0) {
      b.turnoAtor++;
    }
    if (b.turnoAtor >= b.inimigos.length) {
      // Fim do round completo
      processarCondicoesTurno(b.inimigos);
      b.fase = "player";
      b.turnoAtor = 0;
      renderBatalha();
      setTimeout(proximoTurno, 500);
      return;
    }
    const ator = b.inimigos[b.turnoAtor];
    if (checarPerderTurno(ator)) {
      b.turnoAtor++;
      setTimeout(proximoTurno, 700);
      return;
    }
    setTimeout(() => turnoIA(ator), 600);
  }
}

function checarPerderTurno(c) {
  for (const cd of c.condicoes) {
    const def = getCondicao(cd.id);
    if (def.chancePerderTurno && Math.random() < def.chancePerderTurno) {
      log(`${c.nome} está ${def.nome} e perdeu o turno!`, "weak");
      return true;
    }
  }
  return false;
}

function processarCondicoesTurno(combatentes) {
  combatentes.forEach(c => {
    if (c.hp <= 0) return;
    // Decrementa cooldowns
    if (c.cooldowns) {
      Object.keys(c.cooldowns).forEach(k => {
        c.cooldowns[k] = Math.max(0, c.cooldowns[k] - 1);
        if (c.cooldowns[k] === 0) delete c.cooldowns[k];
      });
    }
    const novas = [];
    c.condicoes.forEach(cd => {
      const def = getCondicao(cd.id);
      if (def.danoPorTurno) {
        c.hp = Math.max(0, c.hp - def.danoPorTurno);
        log(`${c.nome} sofre ${def.danoPorTurno} de dano por ${def.nome}.`, "weak");
        if (c.hp <= 0) log(`${c.nome} foi nocauteado!`, "weak");
      }
      if (def.curaPorTurno) {
        const cura = Math.min(def.curaPorTurno, c.hpMax - c.hp);
        if (cura > 0) {
          c.hp += cura;
          log(`${c.nome} recupera ${cura} HP por ${def.nome}.`, "system");
        }
      }
      cd.turnos--;
      if (cd.turnos > 0) novas.push(cd);
      else log(`${c.nome}: ${def.nome} terminou.`, "");
    });
    c.condicoes = novas;
  });
}


/* ---------- MENU PRINCIPAL ---------- */
function bindMenuBatalha() {
  document.querySelectorAll("#battle-menu .menu-btn").forEach(btn => {
    btn.onclick = () => {
      const b = state.batalha;
      if (!b || b.acabou || b.fase !== "player") return;
      SFX.menu();
      const action = btn.getAttribute("data-action");
      if (action === "attack") abrirSubmenuAtaques();
      else if (action === "item") abrirSubmenuItens();
      else if (action === "swap") abrirSubmenuTroca();
      else if (action === "flee") tentarFugir();
    };
  });
}

function getAtorAtual() {
  const b = state.batalha;
  return b.partyEmCampo[b.turnoAtor];
}

function abrirSubmenuAtaques() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";
  const ator = getAtorAtual();
  ator.ataques.forEach(aid => {
    const a = getAtaque(aid);
    if (!a) return;
    const item = document.createElement("div");
    const disabled = ator.foco < a.custoFoco;
    item.className = "submenu-item" + (disabled ? " disabled" : "");
    item.setAttribute("data-testid", `atk-${a.id}`);
    const tagTipo = ({
      ataque: "ATK", buff: "BUFF", debuff: "DEBUFF", cura: "CURA", misto: "MIX"
    })[a.tipoAcao] || "ATK";
    item.innerHTML = `
      <span class="sub-title">${a.nome} <span class="tag">${tagTipo}</span></span>
      <span class="sub-desc">PWR ${a.poder} · FOCO ${a.custoFoco} · PREC ${a.precisao}%${a.chanceCrit ? ` · CRIT ${a.chanceCrit}%` : ""}<br/>${a.descricao}</span>
    `;
    if (!disabled) item.onclick = () => { SFX.menu(); escolherAlvoPara(a); };
    sub.appendChild(item);
  });
  adicionarBotaoVoltar(sub);
}

function abrirSubmenuItens() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";
  let tem = false;
  Object.entries(state.inventario).forEach(([iid, qtd]) => {
    if (qtd <= 0) return;
    tem = true;
    const it = getItem(iid);
    const el = document.createElement("div");
    el.className = "submenu-item";
    el.setAttribute("data-testid", `item-${iid}`);
    el.innerHTML = `<span class="sub-title">${it.nome} ×${qtd}</span><span class="sub-desc">${it.descricao}</span>`;
    el.onclick = () => { SFX.menu(); escolherAlvoParaItem(it); };
    sub.appendChild(el);
  });
  if (!tem) {
    const v = document.createElement("div");
    v.className = "submenu-item disabled";
    v.innerHTML = `<span class="sub-title">Vazio</span><span class="sub-desc">Sem itens.</span>`;
    sub.appendChild(v);
  }
  adicionarBotaoVoltar(sub);
}

function abrirSubmenuTroca() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";
  const b = state.batalha;
  const reservas = state.party.filter(p => !b.partyEmCampo.includes(p) && p.hp > 0);
  if (reservas.length === 0) {
    const v = document.createElement("div");
    v.className = "submenu-item disabled";
    v.innerHTML = `<span class="sub-title">Sem reservas</span><span class="sub-desc">Todos já estão em campo.</span>`;
    sub.appendChild(v);
  } else {
    reservas.forEach(p => {
      const el = document.createElement("div");
      el.className = "submenu-item";
      el.setAttribute("data-testid", `swap-${p.id}`);
      el.innerHTML = `
        <span class="sub-title">${p.nome} Nv${p.nivel}</span>
        <span class="sub-desc">${p.estereotipo} · HP ${p.hp}/${p.hpMax}</span>
      `;
      el.onclick = () => { SFX.menu(); trocarPorReserva(p); };
      sub.appendChild(el);
    });
  }
  adicionarBotaoVoltar(sub);
}

function adicionarBotaoVoltar(sub) {
  const cancel = document.createElement("div");
  cancel.className = "submenu-item";
  cancel.innerHTML = `<span class="sub-title">Voltar</span><span class="sub-desc">Cancela ação.</span>`;
  cancel.onclick = () => { SFX.menu(); sub.classList.add("hidden"); };
  sub.appendChild(cancel);
}


/* ---------- TARGETING ---------- */
function escolherAlvoPara(ataque) {
  const b = state.batalha;
  const ator = getAtorAtual();

  // Auto-target casos
  if (ataque.alvo === "self") { executarAcao(ator, ataque, [ator]); return; }
  if (ataque.alvo === "todos_inimigos") { executarAcao(ator, ataque, b.inimigos.filter(i => i.hp > 0)); return; }
  if (ataque.alvo === "todos_aliados")  { executarAcao(ator, ataque, b.partyEmCampo.filter(p => p.hp > 0)); return; }

  // Single target → mostrar UI
  const targets = ataque.alvo === "aliado_unico"
    ? b.partyEmCampo.filter(p => p.hp > 0)
    : b.inimigos.filter(i => i.hp > 0);

  abrirAlvoSelector(targets, (alvo) => executarAcao(ator, ataque, [alvo]), ataque.alvo === "aliado_unico");
}

function escolherAlvoParaItem(item) {
  const b = state.batalha;
  const ator = getAtorAtual();
  if (item.alvo === "self") { usarItem(ator, item, ator); return; }
  if (item.alvo === "todos_aliados") { usarItem(ator, item, ator); return; }
  const targets = item.alvo === "inimigo_unico"
    ? b.inimigos.filter(i => i.hp > 0)
    : b.partyEmCampo.filter(p => p.hp > 0);
  abrirAlvoSelector(targets, (alvo) => usarItem(ator, item, alvo), item.alvo !== "inimigo_unico");
}

function abrirAlvoSelector(targets, callback, isAlly) {
  const sub = document.getElementById("battle-submenu");
  const tgt = document.getElementById("battle-target");
  sub.classList.add("hidden");
  tgt.classList.remove("hidden");
  tgt.innerHTML = `<div class="target-header">Escolha o alvo (${isAlly ? "aliado" : "inimigo"}):</div>`;
  const list = document.createElement("div");
  list.className = "target-list";
  targets.forEach((t, idx) => {
    const el = document.createElement("div");
    el.className = "target-card";
    el.setAttribute("data-testid", `target-${t.uid}`);
    el.innerHTML = `
      <strong>${t.nome}</strong> Nv${t.nivel} (${t.estereotipo})<br/>
      HP ${t.hp}/${t.hpMax}
    `;
    el.onclick = () => { SFX.menu(); tgt.classList.add("hidden"); callback(t); };
    list.appendChild(el);
  });
  const cancel = document.createElement("button");
  cancel.className = "pixel-btn small";
  cancel.textContent = "Voltar";
  cancel.setAttribute("data-testid", "target-cancel");
  cancel.onclick = () => { SFX.menu(); tgt.classList.add("hidden"); };
  tgt.appendChild(list);
  tgt.appendChild(cancel);
}


/* ---------- CÁLCULO DE DANO/EFEITOS ---------- */
function statsComCondicoes(c) {
  let atk = c.ataque + (c.buffAtk || 0);
  let def = c.defesa;
  let critBonus = 0;
  let precBonus = 0;
  let chanceAtacarAliado = 0;
  c.condicoes.forEach(cd => {
    const d = getCondicao(cd.id);
    if (d.modAtk)   atk *= (1 + d.modAtk);
    if (d.modDef)   def *= (1 + d.modDef);
    if (d.modCrit)  critBonus += d.modCrit;
    if (d.modPrecisao) precBonus += d.modPrecisao;
    if (d.chanceAtacarAliado) chanceAtacarAliado = Math.max(chanceAtacarAliado, d.chanceAtacarAliado);
  });
  return { atk: Math.round(atk), def: Math.round(def), critBonus, precBonus, chanceAtacarAliado };
}

function calcularDano(atacante, alvo, ataque) {
  const s = statsComCondicoes(atacante);
  const sa = statsComCondicoes(alvo);

  // Precisão
  const precisao = clamp(ataque.precisao + s.precBonus, 5, 100);
  if (Math.random() * 100 > precisao) {
    return { errou: true };
  }

  let multi = 1.0; let tipoEf = "normal";
  if (VANTAGENS[atacante.estereotipo] === alvo.estereotipo) { multi = 1.5; tipoEf = "forte"; }
  else if (DESVANTAGENS[atacante.estereotipo] === alvo.estereotipo) { multi = 0.5; tipoEf = "fraco"; }

  const base = ataque.poder + s.atk;
  const bruto = Math.max(1, base - sa.def);
  const variancia = rand(-2, 3);
  const critFinal = clamp(ataque.chanceCrit + s.critBonus, 0, 100);
  const critico = Math.random() * 100 < critFinal;
  let dano = Math.round(bruto * multi) + variancia;
  if (critico) dano = Math.round(dano * 1.5);

  return { dano: Math.max(1, dano), tipoEf, critico };
}

function aplicarEfeitos(usuario, alvo, ataque) {
  if (!ataque.efeitos) return;
  ataque.efeitos.forEach(e => {
    if (Math.random() * 100 > e.chance) return;
    const target = e.target === "usuario" ? usuario : alvo;
    if (target.hp <= 0) return;
    // Evita stack do mesmo
    const existente = target.condicoes.find(c => c.id === e.condicao);
    if (existente) { existente.turnos = Math.max(existente.turnos, e.turnos); }
    else target.condicoes.push({ id: e.condicao, turnos: e.turnos });
    const def = getCondicao(e.condicao);
    log(`${target.nome} agora está ${def.nome}.`, "system");
  });
}


/* ---------- EXECUTAR AÇÃO ---------- */
function executarAcao(ator, ataque, alvos) {
  if (ataque.custoFoco > 0) ator.foco = Math.max(0, ator.foco - ataque.custoFoco);
  state.stats.acoesUsadas[ataque.id] = (state.stats.acoesUsadas[ataque.id] || 0) + 1;
  // Cooldown em cura/buff: 1 turno de bloqueio após uso
  if (ataque.tipoAcao === "cura" || ataque.tipoAcao === "buff") {
    if (!ator.cooldowns) ator.cooldowns = {};
    ator.cooldowns[ataque.id] = 2;
  }
  log(`${ator.nome} usou ${ataque.nome}!`);

  // Confuso pode redirecionar para aliado
  const s = statsComCondicoes(ator);
  if (s.chanceAtacarAliado && ataque.tipoAcao !== "cura" && ataque.tipoAcao !== "buff" && Math.random() < s.chanceAtacarAliado) {
    const b = state.batalha;
    const aliadosVivos = (b.partyEmCampo.includes(ator) ? b.partyEmCampo : b.inimigos).filter(x => x.hp > 0 && x !== ator);
    if (aliadosVivos.length > 0) {
      const novoAlvo = aliadosVivos[rand(0, aliadosVivos.length - 1)];
      log(`Está confuso e atacou ${novoAlvo.nome}!`, "weak");
      alvos = [novoAlvo];
    }
  }

  alvos.forEach(alvo => {
    if (alvo.hp <= 0 && ataque.tipoAcao !== "cura") return;

    if (ataque.tipoAcao === "cura") {
      const cura = Math.min(ataque.cura || 0, alvo.hpMax - alvo.hp);
      alvo.hp += cura;
      log(`${alvo.nome} recupera ${cura} HP.`, "system");
      SFX.heal();
      aplicarEfeitos(ator, alvo, ataque);
      return;
    }
    if (ataque.tipoAcao === "buff") {
      log(`${alvo.nome} foi fortalecido!`, "system");
      SFX.buff();
      aplicarEfeitos(ator, alvo, ataque);
      return;
    }
    if (ataque.tipoAcao === "debuff") {
      const acertou = Math.random() * 100 <= clamp(ataque.precisao + statsComCondicoes(ator).precBonus, 5, 100);
      if (!acertou) { log(`Errou em ${alvo.nome}!`, "weak"); SFX.miss(); return; }
      SFX.debuff();
      aplicarEfeitos(ator, alvo, ataque);
      return;
    }
    // ataque ou misto
    const r = calcularDano(ator, alvo, ataque);
    if (r.errou) { log(`Errou ${alvo.nome}!`, "weak"); SFX.miss(); return; }
    alvo.hp = Math.max(0, alvo.hp - r.dano);
    if (r.critico)            { log(`CRÍTICO! ${r.dano} em ${alvo.nome}.`, "crit"); SFX.crit(); }
    else if (r.tipoEf === "forte") { log(`Super eficaz! ${r.dano} em ${alvo.nome}.`, "strong"); SFX.hit(); }
    else if (r.tipoEf === "fraco") { log(`Pouco eficaz... ${r.dano} em ${alvo.nome}.`, "weak"); SFX.hit(); }
    else                      { log(`${r.dano} em ${alvo.nome}.`); SFX.hit(); }
    if (alvo.hp <= 0) log(`${alvo.nome} foi nocauteado!`, "weak");
    aplicarEfeitos(ator, alvo, ataque);
  });

  renderBatalha();
  avancarAtor();
}

function usarItem(ator, item, alvo) {
  log(`${ator.nome} usou ${item.nome} em ${alvo.nome}.`, "system");
  if (item.tipo === "cura_hp") {
    if (item.alvo === "todos_aliados") {
      const b = state.batalha;
      const aliados = b ? b.partyEmCampo.filter(p => p.hp > 0) : state.party.filter(p => p.hp > 0);
      aliados.forEach(a => {
        const c = Math.min(item.valor, a.hpMax - a.hp);
        a.hp += c;
        log(`${a.nome} recupera ${c} HP.`, "system");
      });
    } else {
      const cura = Math.min(item.valor, alvo.hpMax - alvo.hp);
      alvo.hp += cura;
      log(`${alvo.nome} recupera ${cura} HP.`, "system");
    }
    SFX.heal();
  } else if (item.tipo === "cura_foco" || item.tipo === "cura_foco_alto") {
    const cura = Math.min(item.valor, alvo.focoMax - alvo.foco);
    alvo.foco += cura;
    log(`${alvo.nome} recupera ${cura} Foco.`, "system");
    SFX.heal();
  } else if (item.tipo === "buff_atk") {
    ator.buffAtk += item.valor;
    log(`${ator.nome}: +${item.valor} ATK.`, "system");
    SFX.buff();
  } else if (item.tipo === "cura_total") {
    alvo.hp = alvo.hpMax; alvo.foco = alvo.focoMax;
    log(`${alvo.nome} totalmente restaurado!`, "system");
    SFX.heal();
  } else if (item.tipo === "limpar_condicoes") {
    const negativas = ["cansado","exausto","atordoado","sangrando","em_chamas","confuso","drogado"];
    alvo.condicoes = alvo.condicoes.filter(c => !negativas.includes(c.id));
    log(`${alvo.nome}: condições negativas removidas.`, "system");
    SFX.buff();
  } else if (item.tipo === "dano_direto") {
    alvo.hp = Math.max(0, alvo.hp - item.valor);
    log(`${alvo.nome} sofre ${item.valor} de dano direto!`, "weak");
    SFX.hit();
    if (alvo.hp <= 0) log(`${alvo.nome} foi nocauteado!`, "weak");
  } else if (item.tipo === "cura_status_drogado") {
    alvo.condicoes = alvo.condicoes.filter(c => c.id !== "drogado");
    const cura = Math.min(15, alvo.hpMax - alvo.hp);
    alvo.hp += cura;
    log(`${alvo.nome}: Drogado removido + ${cura} HP.`, "system");
    SFX.heal();
  } else if (item.tipo === "buff_def") {
    const existente = alvo.condicoes.find(c => c.id === "protegido");
    if (existente) existente.turnos = 3;
    else alvo.condicoes.push({ id: "protegido", turnos: 3 });
    log(`${alvo.nome} agora está Protegido.`, "system");
    SFX.buff();
  }
  state.inventario[item.id]--;
  if (state.inventario[item.id] <= 0) delete state.inventario[item.id];
  if (state.batalha) {
    renderBatalha();
    avancarAtor();
  }
}

function trocarPorReserva(reserva) {
  const b = state.batalha;
  const ator = getAtorAtual();
  const idx = b.partyEmCampo.indexOf(ator);
  b.partyEmCampo[idx] = reserva;
  log(`${ator.nome} sai. ${reserva.nome} entra em campo!`, "system");
  renderBatalha();
  avancarAtor();
}

function tentarFugir() {
  const b = state.batalha;
  if (b.fugindo) return;
  b.fugindo = true;
  if (Math.random() < 0.55) {
    log("Você fugiu da batalha!", "system");
    b.acabou = true;
    setTimeout(() => { renderMapa(); mostrarTela("screen-map"); }, 900);
  } else {
    log("Não conseguiu fugir! Você perdeu o turno.", "weak");
    b.fugindo = false;
    avancarAtor();
  }
}

function avancarAtor() {
  const b = state.batalha;
  if (b.inimigos.every(i => i.hp <= 0)) { finalizarVitoria(); return; }
  if (b.partyEmCampo.every(p => p.hp <= 0)) { finalizarDerrota(); return; }
  b.turnoAtor++;
  setTimeout(proximoTurno, 600);
}


/* ---------- IA INIMIGO ---------- */
function turnoIA(inimigo) {
  const b = state.batalha;
  if (!inimigo.cooldowns) inimigo.cooldowns = {};
  const acoesPossiveis = inimigo.ataques.map(id => getAtaque(id)).filter(a =>
    a && inimigo.foco >= a.custoFoco && !(inimigo.cooldowns[a.id] > 0));
  const escolhido = acoesPossiveis.length > 0
    ? acoesPossiveis[rand(0, acoesPossiveis.length - 1)]
    : getAtaque("soco_basico");

  let alvos;
  const aliadosInimigos = b.inimigos.filter(i => i.hp > 0);
  const adversarios   = b.partyEmCampo.filter(p => p.hp > 0);

  if (escolhido.alvo === "self") alvos = [inimigo];
  else if (escolhido.alvo === "todos_inimigos") alvos = adversarios; // do ponto de vista do inimigo, "inimigo" = player
  else if (escolhido.alvo === "todos_aliados")  alvos = aliadosInimigos;
  else if (escolhido.alvo === "aliado_unico")   alvos = [aliadosInimigos[rand(0, aliadosInimigos.length - 1)]];
  else                                          alvos = [adversarios[rand(0, adversarios.length - 1)]];

  // Inverte log perspectiva: o IA usa player como "alvo inimigo"
  // Mas executarAcao já trata genérico — só precisa garantir alvos certos.
  // Vamos imitar executarAcao mas considerando ator=inimigo, alvos podem ser player ou inimigo aliado
  executarAcaoIA(inimigo, escolhido, alvos);
}

function executarAcaoIA(ator, ataque, alvos) {
  if (ataque.custoFoco > 0) ator.foco = Math.max(0, ator.foco - ataque.custoFoco);
  if (ataque.tipoAcao === "cura" || ataque.tipoAcao === "buff") {
    if (!ator.cooldowns) ator.cooldowns = {};
    ator.cooldowns[ataque.id] = 2;
  }
  log(`${ator.nome} usou ${ataque.nome}!`);

  alvos.forEach(alvo => {
    if (!alvo || alvo.hp <= 0 && ataque.tipoAcao !== "cura") return;
    if (ataque.tipoAcao === "cura") {
      const cura = Math.min(ataque.cura || 0, alvo.hpMax - alvo.hp);
      alvo.hp += cura;
      log(`${alvo.nome} recupera ${cura} HP.`, "system");
      SFX.heal(); aplicarEfeitos(ator, alvo, ataque); return;
    }
    if (ataque.tipoAcao === "buff") {
      log(`${alvo.nome} foi fortalecido!`, "system");
      SFX.buff(); aplicarEfeitos(ator, alvo, ataque); return;
    }
    if (ataque.tipoAcao === "debuff") {
      SFX.debuff(); aplicarEfeitos(ator, alvo, ataque); return;
    }
    const r = calcularDano(ator, alvo, ataque);
    if (r.errou) { log(`Errou ${alvo.nome}!`, "weak"); SFX.miss(); return; }
    alvo.hp = Math.max(0, alvo.hp - r.dano);
    if (r.critico)            { log(`CRÍTICO! ${r.dano} em ${alvo.nome}.`, "crit"); SFX.crit(); }
    else if (r.tipoEf === "forte") { log(`Super eficaz! ${r.dano} em ${alvo.nome}.`, "strong"); SFX.hit(); }
    else if (r.tipoEf === "fraco") { log(`Pouco eficaz... ${r.dano} em ${alvo.nome}.`, "weak"); SFX.hit(); }
    else                      { log(`${r.dano} em ${alvo.nome}.`); SFX.hit(); }
    if (alvo.hp <= 0) log(`${alvo.nome} foi nocauteado!`, "weak");
    aplicarEfeitos(ator, alvo, ataque);
  });

  renderBatalha();
  avancarAtor();
}


/* ---------- FIM DE BATALHA ---------- */
function finalizarVitoria() {
  const b = state.batalha;
  if (b.acabou) return;
  b.acabou = true;
  SFX.victory();

  // Marca grupo como vencido
  if (b.local && b.grupoIdx !== undefined && state.batalhasPorLocal[b.local.id]) {
    state.batalhasPorLocal[b.local.id][b.grupoIdx].vencido = true;
  }
  state.stats.batalhasVencidas++;
  state.stats.inimigosDerrotados += b.inimigos.length;
  if (b.inimigos.some(i => i.id === "cleber_octopus")) {
    state.bossDerrotado = true;
  }

  const xpTotal = b.inimigos.reduce((s, i) => s + (20 + i.nivel * 10), 0);
  const vivos = b.partyEmCampo.filter(p => p.hp > 0);
  const xpPorAluno = vivos.length > 0 ? Math.floor(xpTotal / vivos.length) : xpTotal;
  log(`Vitória! +${xpPorAluno} XP para cada aluno em campo.`, "system");
  vivos.forEach(p => ganharXp(p, xpPorAluno));
  state.party.forEach(p => { p.condicoes = []; p.buffAtk = 0; });
  b.inimigosBaseIds.forEach(id => { if (!state.derrotados.includes(id)) state.derrotados.push(id); });

  if (Math.random() < 0.6) {
    const drop = ITENS[rand(0, ITENS.length - 2)];
    state.inventario[drop.id] = (state.inventario[drop.id] || 0) + 1;
    log(`Você encontrou: ${drop.nome}!`, "system");
  }

  // Boss check: se for boss, vai pra tela final
  if (state.bossDerrotado) {
    salvarJogo();
    setTimeout(() => mostrarTelaFinal(), 1800);
    return;
  }

  const podeRecrutar = state.party.length < 6;
  const candidato = podeRecrutar ? b.inimigosBaseIds.find(id => !state.party.some(p => p.id === id) && id !== "cleber_octopus") : null;

  if (candidato && Math.random() < 0.4) {
    const base = getPersonagem(candidato);
    setTimeout(() => {
      abrirModal("Recrutar aluno?",
        `${base.nome} (${base.estereotipo}) parece disposto a se juntar à party.`,
        [
          { label: "RECUSAR", testid: "recruit-no", onClick: () => voltarAoMapa() },
          { label: "RECRUTAR", testid: "recruit-yes", onClick: () => {
              const novo = instanciarPersonagem(base, Math.max(1, state.party[state.ativo].nivel - 1));
              state.party.push(novo); salvarJogo(); voltarAoMapa();
            } }
        ]);
    }, 800);
  } else {
    setTimeout(voltarAoMapa, 1400);
  }
  salvarJogo();
}

function ganharXp(p, xp) {
  p.xp += xp;
  while (p.xp >= xpParaProximoNivel(p.nivel)) {
    p.xp -= xpParaProximoNivel(p.nivel);
    p.nivel++;
    p.hpMax  += 10; p.hp = p.hpMax;
    p.focoMax += 5; p.foco = p.focoMax;
    p.ataque += 2;  p.defesa += 1;
    log(`${p.nome} subiu para nível ${p.nivel}!`, "crit");
    SFX.levelUp();
    const base = getPersonagem(p.id);
    if (base) {
      const novos = ATAQUES.filter(a =>
        (a.estereotipoDono === base.estereotipo || a.estereotipoDono === "*") &&
        a.nivelMinimo <= p.nivel && !p.ataques.includes(a.id)
      );
      novos.forEach(a => { p.ataques.push(a.id); log(`Aprendeu: ${a.nome}!`, "crit"); });
    }
  }
}

function finalizarDerrota() {
  state.batalha.acabou = true;
  SFX.defeat();
  log("Sua party foi derrotada...", "weak");
  setTimeout(() => {
    abrirModal("Você apagou.",
      "Toda sua party foi nocauteada. Você acorda na enfermaria.",
      [{ label: "VOLTAR AO MAPA", testid: "defeat-back",
         onClick: () => {
           state.party.forEach(p => { p.hp = p.hpMax; p.foco = p.focoMax; p.condicoes = []; p.buffAtk = 0; });
           state.ativo = 0; salvarJogo(); renderMapa(); mostrarTela("screen-map");
         } }]);
  }, 900);
}

function voltarAoMapa() {
  document.body.classList.remove("boss-fight");
  // Cura leve (20%) na party em campo
  const b = state.batalha;
  if (b) {
    b.partyEmCampo.forEach(p => {
      p.hp = Math.min(p.hpMax, p.hp + Math.floor(p.hpMax * 0.20));
      p.foco = Math.min(p.focoMax, p.foco + Math.floor(p.focoMax * 0.20));
      p.condicoes = [];
    });
  }
  salvarJogo();
  renderMapa();
  mostrarTela("screen-map");
}


/* =========================================================
   18) PARTY MODAL
   ========================================================= */
function abrirParty() {
  let screen = document.getElementById("screen-party");
  if (!screen) {
    screen = document.createElement("section");
    screen.id = "screen-party";
    screen.className = "screen";
    screen.setAttribute("data-testid", "screen-party");
    document.getElementById("game-container").appendChild(screen);
  }

  const renderPartyTela = () => {
    const itensHtml = Object.entries(state.inventario).filter(([,q]) => q > 0).map(([id, qtd]) => {
      const it = getItem(id);
      if (!it) return "";
      return `<button class="pixel-btn small item-btn" data-item="${id}" data-testid="party-item-${id}">${it.nome} ×${qtd}</button>`;
    }).join("") || `<span class="party-empty">Sem itens.</span>`;

    const membrosHtml = state.party.map((p, idx) => {
      const emCampo = idx < 3;
      return `
        <div class="party-row ${emCampo ? "em-campo" : "reserva"}" data-testid="party-row-${p.id}">
          <div class="party-pos">${emCampo ? "EM CAMPO" : "RESERVA"}</div>
          <div class="party-info">
            <strong>${p.nome}</strong> Nv${p.nivel} · ${p.estereotipo}<br/>
            HP ${p.hp}/${p.hpMax} · Foco ${p.foco}/${p.focoMax}
            <div class="party-bars">
              <div class="bar hp"><div class="bar-fill" style="width:${(p.hp/p.hpMax)*100}%"></div></div>
              <div class="bar mp"><div class="bar-fill" style="width:${(p.foco/p.focoMax)*100}%"></div></div>
            </div>
          </div>
          <div class="party-actions">
            <button class="pixel-btn small" data-action="up" data-idx="${idx}" data-testid="party-up-${p.id}" ${idx === 0 ? "disabled" : ""}>↑</button>
            <button class="pixel-btn small" data-action="down" data-idx="${idx}" data-testid="party-down-${p.id}" ${idx === state.party.length - 1 ? "disabled" : ""}>↓</button>
          </div>
        </div>
      `;
    }).join("");

    screen.innerHTML = `
      <div class="party-header">
        <h2 class="screen-title">Gerenciar Party</h2>
        <button class="pixel-btn small" id="party-back" data-testid="party-back">VOLTAR</button>
      </div>
      <p class="screen-sub">Os 3 primeiros entram em campo. Use ↑/↓ pra reordenar. Selecione um item e depois um aliado pra usar.</p>
      <div class="party-list">${membrosHtml}</div>
      <div class="party-inventory">
        <h3>Inventário</h3>
        <div id="party-items">${itensHtml}</div>
        <div id="party-item-hint" class="party-hint"></div>
      </div>
    `;

    screen.querySelector("#party-back").onclick = () => { SFX.menu(); fecharParty(); };

    screen.querySelectorAll("[data-action='up']").forEach(b => {
      b.onclick = () => {
        const i = parseInt(b.getAttribute("data-idx"));
        if (i > 0) { [state.party[i-1], state.party[i]] = [state.party[i], state.party[i-1]]; SFX.menu(); salvarJogo(); renderPartyTela(); }
      };
    });
    screen.querySelectorAll("[data-action='down']").forEach(b => {
      b.onclick = () => {
        const i = parseInt(b.getAttribute("data-idx"));
        if (i < state.party.length - 1) { [state.party[i], state.party[i+1]] = [state.party[i+1], state.party[i]]; SFX.menu(); salvarJogo(); renderPartyTela(); }
      };
    });

    let itemSelecionado = null;
    screen.querySelectorAll(".item-btn").forEach(b => {
      b.onclick = () => {
        SFX.menu();
        itemSelecionado = b.getAttribute("data-item");
        const it = getItem(itemSelecionado);
        if (it.alvo === "self" || it.tipo === "buff_atk") {
          aplicarItemForaBatalha(it, state.party[0]);
          return;
        }
        if (it.alvo === "todos_aliados") {
          aplicarItemForaBatalha(it, state.party[0]);
          return;
        }
        if (it.alvo === "inimigo_unico") {
          screen.querySelector("#party-item-hint").textContent = "Esse item só funciona em batalha.";
          return;
        }
        screen.querySelector("#party-item-hint").textContent = `Selecione o aliado para receber ${it.nome}.`;
        screen.querySelectorAll(".party-row").forEach((row, i) => {
          row.classList.add("selectable");
          row.onclick = () => {
            aplicarItemForaBatalha(it, state.party[i]);
          };
        });
      };
    });
  };

  const aplicarItemForaBatalha = (item, alvo) => {
    const tiposPermitidos = ["cura_hp","cura_foco","cura_foco_alto","cura_total","limpar_condicoes","cura_status_drogado"];
    if (!tiposPermitidos.includes(item.tipo)) {
      screen.querySelector("#party-item-hint").textContent = "Esse item só funciona em batalha.";
      return;
    }
    SFX.heal();
    if (item.tipo === "cura_hp") {
      if (item.alvo === "todos_aliados") {
        state.party.forEach(p => { p.hp = Math.min(p.hpMax, p.hp + item.valor); });
      } else { alvo.hp = Math.min(alvo.hpMax, alvo.hp + item.valor); }
    } else if (item.tipo === "cura_foco" || item.tipo === "cura_foco_alto") {
      alvo.foco = Math.min(alvo.focoMax, alvo.foco + item.valor);
    } else if (item.tipo === "cura_total") {
      alvo.hp = alvo.hpMax; alvo.foco = alvo.focoMax;
    } else if (item.tipo === "limpar_condicoes") {
      alvo.condicoes = [];
    } else if (item.tipo === "cura_status_drogado") {
      alvo.condicoes = alvo.condicoes.filter(c => c.id !== "drogado");
      alvo.hp = Math.min(alvo.hpMax, alvo.hp + 15);
    }
    state.inventario[item.id]--;
    if (state.inventario[item.id] <= 0) delete state.inventario[item.id];
    salvarJogo();
    renderPartyTela();
  };

  renderPartyTela();
  mostrarTela("screen-party");
}

function fecharParty() {
  renderMapa();
  mostrarTela("screen-map");
}


/* =========================================================
   19) BOOT
   ========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  initTitulo();
  bindMenuBatalha();

  document.getElementById("btn-party").onclick = () => { SFX.menu(); abrirParty(); };
  document.getElementById("btn-save").onclick = () => {
    SFX.menu();
    if (salvarJogo()) abrirModal("Salvo!", "Progresso salvo no navegador.", [{ label: "OK", testid: "modal-saved-ok" }]);
  };
  document.getElementById("btn-quit").onclick = () => {
    SFX.menu();
    abrirModal("Sair para o título?", "O progresso é mantido (já salvo automaticamente).", [
      { label: "CANCELAR", testid: "modal-quit-cancel" },
      { label: "SAIR", danger: true, testid: "modal-quit-confirm",
        onClick: () => { salvarJogo(); mostrarTela("screen-title"); initTitulo(); } }
    ]);
  };

  // Botão de som no canto
  const somBtn = document.getElementById("btn-sound");
  if (somBtn) {
    const atualizar = () => somBtn.textContent = state.somAtivo ? "♪ SOM ON" : "♪ SOM OFF";
    atualizar();
    somBtn.onclick = () => {
      state.somAtivo = !state.somAtivo;
      atualizar(); salvarJogo();
      if (state.somAtivo) SFX.menu();
    };
  }

  // Inicializa contexto de áudio na primeira interação
  document.addEventListener("click", () => SFX.init(), { once: true });

  mostrarTela("screen-title");
});
