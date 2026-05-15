/* =================================================================
   IFC SOMBRIO: BATALHA DOS ALUNOS
   -----------------------------------------------------------------
   Arquitetura modular. Os arrays abaixo (PERSONAGENS, ATAQUES,
   ITENS, LOCAIS) são a fonte única de verdade do jogo.
   Para adicionar novos alunos basta acrescentar entradas em
   PERSONAGENS seguindo EXATAMENTE o padrão de formatação:
   um atributo por linha, com vírgula no final.
   ================================================================= */


/* =========================================================
   1) MULTIPLICADORES DE ELEMENTOS (Estereótipos)
   ========================================================= */
const VANTAGENS = {
  "Nerd":       "Valentão",
  "Valentão":   "Entroza",
  "Atleta":     "Nerd",
  "Músico":     "Atleta",
  "Entroza":    "Professor",
  "Professor":  "Valentão",
  "Woke":       "Valentão",
  "Estranho":   "Woke",
  "Gamer":      "Nerd",
  "Gente Fina": "Estranho"
};

const DESVANTAGENS = {
  "Nerd":       "Atleta",
  "Valentão":   "Professor",
  "Atleta":     "Gamer",
  "Músico":     "Nerd",
  "Entroza":    "Valentão",
  "Professor":  "Gente Fina",
  "Woke":       "Estranho",
  "Estranho":   "Gente Fina",
  "Gamer":      "Atleta",
  "Gente Fina": "Entroza"
};


/* =========================================================
   2) ATAQUES (banco de dados)
   ========================================================= */
const ATAQUES = [
  {
    id: "soco_basico",
    nome: "Soco Básico",
    poder: 10,
    custoFoco: 0,
    descricao: "Um soco direto sem floreios.",
    estereotipoDono: "*",
    nivelMinimo: 1
  },
  {
    id: "calc_brutal",
    nome: "Cálculo Brutal",
    poder: 16,
    custoFoco: 6,
    descricao: "Resolve a EDO mental do inimigo. Dano psíquico.",
    estereotipoDono: "Nerd",
    nivelMinimo: 1
  },
  {
    id: "teorema_destruidor",
    nome: "Teorema Destruidor",
    poder: 26,
    custoFoco: 14,
    descricao: "Prova um lema que invalida a existência do alvo.",
    estereotipoDono: "Nerd",
    nivelMinimo: 4
  },
  {
    id: "carrinho_violento",
    nome: "Carrinho Violento",
    poder: 18,
    custoFoco: 4,
    descricao: "Carrinho por trás. Cartão amarelo emocional.",
    estereotipoDono: "Atleta",
    nivelMinimo: 1
  },
  {
    id: "supino_de_castigo",
    nome: "Supino de Castigo",
    poder: 28,
    custoFoco: 16,
    descricao: "Levanta o inimigo e deixa cair. 80kg de queda.",
    estereotipoDono: "Atleta",
    nivelMinimo: 5
  },
  {
    id: "headbutt_idiota",
    nome: "Headbutt Idiota",
    poder: 17,
    custoFoco: 4,
    descricao: "Cabeçada sem pensar. Dor real.",
    estereotipoDono: "Valentão",
    nivelMinimo: 1
  },
  {
    id: "intimidacao",
    nome: "Intimidação",
    poder: 24,
    custoFoco: 12,
    descricao: "Encara o inimigo até o foco quebrar.",
    estereotipoDono: "Valentão",
    nivelMinimo: 4
  },
  {
    id: "solo_de_guitarra",
    nome: "Solo de Guitarra",
    poder: 17,
    custoFoco: 6,
    descricao: "Um solo tão bom que dá danos reais.",
    estereotipoDono: "Músico",
    nivelMinimo: 1
  },
  {
    id: "acorde_sombrio",
    nome: "Acorde Sombrio",
    poder: 27,
    custoFoco: 14,
    descricao: "Toca um Bm7 com peso emocional.",
    estereotipoDono: "Músico",
    nivelMinimo: 5
  },
  {
    id: "viagem_existencial",
    nome: "Viagem Existencial",
    poder: 18,
    custoFoco: 8,
    descricao: "Lança o inimigo num devaneio metafísico.",
    estereotipoDono: "Entroza",
    nivelMinimo: 1
  },
  {
    id: "cheiro_estranho",
    nome: "Cheiro Estranho",
    poder: 23,
    custoFoco: 10,
    descricao: "Uma onda de odor altera a realidade.",
    estereotipoDono: "Entroza",
    nivelMinimo: 4
  },
  {
    id: "chamada_oral",
    nome: "Chamada Oral",
    poder: 19,
    custoFoco: 6,
    descricao: "Pergunta surpresa sobre a matéria.",
    estereotipoDono: "Professor",
    nivelMinimo: 1
  },
  {
    id: "prova_surpresa",
    nome: "Prova Surpresa",
    poder: 30,
    custoFoco: 16,
    descricao: "Distribui uma prova com 0% de chance de passar.",
    estereotipoDono: "Professor",
    nivelMinimo: 5
  },
  {
    id: "textao",
    nome: "Textão",
    poder: 16,
    custoFoco: 5,
    descricao: "Posta um textão. Dano contínuo de vergonha alheia.",
    estereotipoDono: "Woke",
    nivelMinimo: 1
  },
  {
    id: "cancelar",
    nome: "Cancelar",
    poder: 28,
    custoFoco: 14,
    descricao: "Print, mídia, exposed. Reputação anulada.",
    estereotipoDono: "Woke",
    nivelMinimo: 4
  },
  {
    id: "olhar_perturbador",
    nome: "Olhar Perturbador",
    poder: 18,
    custoFoco: 4,
    descricao: "Te observa por tempo demais. Algo está errado.",
    estereotipoDono: "Estranho",
    nivelMinimo: 1
  },
  {
    id: "sussurro_incompreensivel",
    nome: "Sussurro Incompreensível",
    poder: 26,
    custoFoco: 12,
    descricao: "Diz algo que ninguém entende mas dói.",
    estereotipoDono: "Estranho",
    nivelMinimo: 5
  },
  {
    id: "combo_breaker",
    nome: "Combo Breaker",
    poder: 17,
    custoFoco: 5,
    descricao: "Interrompe o turno inimigo com um C C C+P.",
    estereotipoDono: "Gamer",
    nivelMinimo: 1
  },
  {
    id: "rage_quit",
    nome: "Rage Quit",
    poder: 32,
    custoFoco: 18,
    descricao: "Arremessa o controle. Dano massivo e auto-dano.",
    estereotipoDono: "Gamer",
    nivelMinimo: 5
  },
  {
    id: "elogio_sincero",
    nome: "Elogio Sincero",
    poder: 16,
    custoFoco: 4,
    descricao: "Diz algo gentil. O inimigo se desestrutura.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 1
  },
  {
    id: "abraco_quentinho",
    nome: "Abraço Quentinho",
    poder: 25,
    custoFoco: 12,
    descricao: "Um abraço sufocantemente afetuoso.",
    estereotipoDono: "Gente Fina",
    nivelMinimo: 4
  }
];


/* =========================================================
   3) ITENS (consumíveis)
   ========================================================= */
const ITENS = [
  {
    id: "merenda",
    nome: "Merenda da Cantina",
    tipo: "cura_hp",
    valor: 35,
    descricao: "Restaura 35 de HP.",
    icone: "M"
  },
  {
    id: "cafezinho",
    nome: "Cafezinho do Servidor",
    tipo: "cura_foco",
    valor: 25,
    descricao: "Restaura 25 de Foco.",
    icone: "C"
  },
  {
    id: "energetico",
    nome: "Energético Pirata",
    tipo: "buff_atk",
    valor: 5,
    descricao: "+5 ataque nesta batalha.",
    icone: "E"
  },
  {
    id: "amuleto",
    nome: "Amuleto do Calouro",
    tipo: "cura_total",
    valor: 999,
    descricao: "Restaura totalmente HP e Foco.",
    icone: "A"
  }
];


/* =========================================================
   4) LOCAIS (cenários do campus)
   ========================================================= */
const LOCAIS = [
  {
    id: "cantina",
    nome: "Cantina Lotada",
    bg: "cantina",
    icone: "C",
    descricao: "O cheiro de coxinha vencida paira no ar.",
    inimigosPossiveis: ["mello", "rosa", "bia"]
  },
  {
    id: "quadra",
    nome: "Quadra de Futsal",
    bg: "quadra",
    icone: "Q",
    descricao: "Marcações apagadas, redes rasgadas, ego inflado.",
    inimigosPossiveis: ["dana", "tony", "mello"]
  },
  {
    id: "lab",
    nome: "Laboratório de Informática",
    bg: "lab",
    icone: "L",
    descricao: "Monitores antigos zumbem em uma frequência estranha.",
    inimigosPossiveis: ["puskas", "kevin", "rafa"]
  },
  {
    id: "patio",
    nome: "Pátio Principal",
    bg: "patio",
    icone: "P",
    descricao: "Onde tudo começa e tudo termina.",
    inimigosPossiveis: ["rosa", "bia", "tony", "rafa"]
  },
  {
    id: "ponto",
    nome: "Ponto de Ônibus",
    bg: "ponto",
    icone: "O",
    descricao: "Cheira a álcool em gel e tédio.",
    inimigosPossiveis: ["kevin", "rafa", "puskas", "dana"]
  }
];


/* =========================================================
   5) PERSONAGENS — UM ATRIBUTO POR LINHA (legibilidade total)
   ========================================================= */
const PERSONAGENS = [

  {
    id: "puskas",
    nome: "Puskás",
    estereotipo: "Nerd",
    sprite: "assets/puskas.png",
    cor: "#7af0ff",
    hpBase: 70,
    focoBase: 60,
    ataqueBase: 12,
    defesaBase: 6,
    ataques: ["calc_brutal", "teorema_destruidor"],
    descricao: "Carrega três HDs externos só com PDFs.",
    isStarter: true
  },

  {
    id: "dana",
    nome: "Dana",
    estereotipo: "Músico",
    sprite: "assets/dana.png",
    cor: "#c77dff",
    hpBase: 75,
    focoBase: 55,
    ataqueBase: 13,
    defesaBase: 6,
    ataques: ["solo_de_guitarra", "acorde_sombrio"],
    descricao: "Compõe músicas no banheiro entre aulas.",
    isStarter: true
  },

  {
    id: "mello",
    nome: "Mello",
    estereotipo: "Valentão",
    sprite: "assets/mello.png",
    cor: "#ff4d6d",
    hpBase: 95,
    focoBase: 35,
    ataqueBase: 15,
    defesaBase: 9,
    ataques: ["headbutt_idiota", "intimidacao"],
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
    ataques: ["carrinho_violento", "supino_de_castigo"],
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
    ataqueBase: 12,
    defesaBase: 6,
    ataques: ["viagem_existencial", "cheiro_estranho"],
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
    ataqueBase: 14,
    defesaBase: 9,
    ataques: ["chamada_oral", "prova_surpresa"],
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
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["textao", "cancelar"],
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
    ataqueBase: 13,
    defesaBase: 7,
    ataques: ["olhar_perturbador", "sussurro_incompreensivel"],
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
    ataques: ["combo_breaker", "rage_quit"],
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
    focoBase: 55,
    ataqueBase: 12,
    defesaBase: 8,
    ataques: ["elogio_sincero", "abraco_quentinho"],
    descricao: "Sempre tem um chiclete pra te oferecer.",
    isStarter: false
  }

];

// Atualizar lista de inimigos no mapa para usar IDs reais
LOCAIS.forEach(loc => {
  loc.inimigosPossiveis = loc.inimigosPossiveis.filter(id =>
    PERSONAGENS.some(p => p.id === id)
  );
});
// Adicionar leo e luna em locais sem ficar todos com mesmos
LOCAIS[0].inimigosPossiveis.push("luna");
LOCAIS[2].inimigosPossiveis.push("leo");
LOCAIS[3].inimigosPossiveis.push("leo");
LOCAIS[4].inimigosPossiveis.push("luna");


/* =========================================================
   6) ESTADO DO JOGO
   ========================================================= */
const SAVE_KEY = "ifc_sombrio_save_v1";

const state = {
  party: [],          // array de instâncias de personagem (player-owned)
  ativo: 0,           // índice do personagem ativo na party
  inventario: {},     // id_item -> quantidade
  derrotados: [],     // ids de inimigos derrotados (não pode reaparecer logo)
  batalha: null,      // estado da batalha atual
  iniciado: false
};


/* =========================================================
   7) HELPERS
   ========================================================= */
function getPersonagem(id) {
  return PERSONAGENS.find(p => p.id === id);
}

function getAtaque(id) {
  return ATAQUES.find(a => a.id === id);
}

function getItem(id) {
  return ITENS.find(i => i.id === id);
}

function getLocal(id) {
  return LOCAIS.find(l => l.id === id);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function instanciarPersonagem(base, nivel = 1) {
  const ataquesIniciais = ATAQUES
    .filter(a => (a.estereotipoDono === base.estereotipo || a.estereotipoDono === "*")
              && a.nivelMinimo <= nivel)
    .map(a => a.id);

  return {
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
    buffAtk: 0
  };
}

function xpParaProximoNivel(nivel) {
  return 30 + nivel * 20;
}


/* =========================================================
   8) PIXEL SPRITE GENERATOR (canvas) — fallback caso imagem falte
   ========================================================= */
function gerarSpritePixel(personagem, tamanho = 96) {
  const canvas = document.createElement("canvas");
  canvas.width  = 16;
  canvas.height = 16;
  canvas.className = "pixel-sprite";
  canvas.style.width  = tamanho + "px";
  canvas.style.height = tamanho + "px";
  const ctx = canvas.getContext("2d");

  // Fundo transparente
  ctx.clearRect(0, 0, 16, 16);

  const cor = personagem.cor || "#f4e9d8";
  const corEscura = sombrear(cor, -40);
  const corPele = "#f3c79b";
  const corPeleEscura = "#c79468";
  const preto = "#1a0f0a";

  // Cabeça
  ctx.fillStyle = corPele;
  ctx.fillRect(5, 2, 6, 5);
  ctx.fillStyle = corPeleEscura;
  ctx.fillRect(5, 6, 6, 1);

  // Cabelo (varia por estereótipo)
  ctx.fillStyle = cor;
  switch (personagem.estereotipo) {
    case "Nerd":
      ctx.fillRect(5, 1, 6, 2);
      ctx.fillRect(4, 2, 1, 2);
      // óculos
      ctx.fillStyle = preto;
      ctx.fillRect(5, 4, 2, 1);
      ctx.fillRect(9, 4, 2, 1);
      break;
    case "Atleta":
      ctx.fillRect(5, 1, 6, 1);
      ctx.fillRect(4, 2, 1, 1);
      ctx.fillRect(11, 2, 1, 1);
      break;
    case "Valentão":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = preto;
      ctx.fillRect(6, 4, 1, 1);
      ctx.fillRect(9, 4, 1, 1);
      break;
    case "Músico":
      ctx.fillRect(4, 1, 8, 3);
      ctx.fillRect(3, 2, 1, 3);
      ctx.fillRect(12, 2, 1, 3);
      break;
    case "Entroza":
      ctx.fillRect(4, 0, 8, 3);
      ctx.fillRect(3, 1, 1, 4);
      ctx.fillRect(12, 1, 1, 4);
      ctx.fillRect(4, 7, 8, 1);
      break;
    case "Professor":
      ctx.fillStyle = "#888";
      ctx.fillRect(5, 1, 6, 2);
      ctx.fillStyle = preto;
      ctx.fillRect(5, 4, 2, 1);
      ctx.fillRect(9, 4, 2, 1);
      ctx.fillStyle = "#888";
      ctx.fillRect(7, 5, 2, 1);
      break;
    case "Woke":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = "#ff4d6d";
      ctx.fillRect(4, 2, 2, 1);
      ctx.fillStyle = "#7af0ff";
      ctx.fillRect(10, 2, 2, 1);
      break;
    case "Estranho":
      ctx.fillRect(4, 1, 8, 2);
      ctx.fillStyle = "#ff0";
      ctx.fillRect(6, 4, 1, 1);
      ctx.fillRect(9, 4, 1, 1);
      break;
    case "Gamer":
      ctx.fillRect(5, 1, 6, 2);
      // headset
      ctx.fillStyle = preto;
      ctx.fillRect(4, 2, 1, 3);
      ctx.fillRect(11, 2, 1, 3);
      break;
    case "Gente Fina":
      ctx.fillRect(5, 1, 6, 2);
      // sorriso
      ctx.fillStyle = "#ff4d6d";
      ctx.fillRect(6, 6, 4, 1);
      break;
    default:
      ctx.fillRect(5, 1, 6, 2);
  }

  // Olhos padrão se não desenhados
  if (!["Valentão","Estranho","Nerd","Professor"].includes(personagem.estereotipo)) {
    ctx.fillStyle = preto;
    ctx.fillRect(6, 4, 1, 1);
    ctx.fillRect(9, 4, 1, 1);
  }

  // Corpo
  ctx.fillStyle = corEscura;
  ctx.fillRect(4, 8, 8, 5);
  ctx.fillStyle = cor;
  ctx.fillRect(5, 9, 6, 3);

  // Pernas
  ctx.fillStyle = preto;
  ctx.fillRect(5, 13, 2, 3);
  ctx.fillRect(9, 13, 2, 3);

  // Braços
  ctx.fillStyle = corPele;
  ctx.fillRect(3, 9, 1, 3);
  ctx.fillRect(12, 9, 1, 3);

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
  // tenta carregar imagem real; se falhar, gera sprite pixel
  if (personagem.sprite) {
    const img = new Image();
    img.onload  = () => { targetEl.innerHTML = ""; targetEl.appendChild(img); };
    img.onerror = () => {
      targetEl.innerHTML = "";
      targetEl.appendChild(gerarSpritePixel(personagem, targetEl.clientWidth));
    };
    img.src = personagem.sprite;
    img.alt = personagem.nome;
    // se a imagem nunca carregar, fallback após pequeno delay
    setTimeout(() => {
      if (!targetEl.querySelector("img") && !targetEl.querySelector("canvas")) {
        targetEl.appendChild(gerarSpritePixel(personagem, targetEl.clientWidth));
      }
    }, 80);
  } else {
    targetEl.appendChild(gerarSpritePixel(personagem, targetEl.clientWidth));
  }
}


/* =========================================================
   9) SAVE / LOAD (localStorage)
   ========================================================= */
function salvarJogo() {
  const data = {
    party: state.party,
    ativo: state.ativo,
    inventario: state.inventario,
    derrotados: state.derrotados,
    iniciado: state.iniciado,
    ts: Date.now()
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Falha ao salvar:", e);
    return false;
  }
}

function carregarJogo() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    state.party       = data.party       || [];
    state.ativo       = data.ativo       || 0;
    state.inventario  = data.inventario  || {};
    state.derrotados  = data.derrotados  || [];
    state.iniciado    = data.iniciado    || false;
    return state.party.length > 0;
  } catch (e) {
    return false;
  }
}

function temSave() {
  return !!localStorage.getItem(SAVE_KEY);
}

function apagarSave() {
  localStorage.removeItem(SAVE_KEY);
}


/* =========================================================
   10) NAVEGAÇÃO DE TELAS
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
    btn.onclick = () => {
      fecharModal();
      if (b.onClick) b.onClick();
    };
    actions.appendChild(btn);
  });
  document.getElementById("modal").classList.remove("hidden");
}

function fecharModal() {
  document.getElementById("modal").classList.add("hidden");
}


/* =========================================================
   11) TELA TÍTULO
   ========================================================= */
function initTitulo() {
  document.getElementById("btn-continue").disabled = !temSave();
  document.getElementById("btn-continue").style.opacity = temSave() ? "1" : "0.4";

  document.getElementById("btn-new-game").onclick = () => {
    if (temSave()) {
      abrirModal("Apagar progresso?",
        "Já existe um save. Iniciar novo jogo irá apagá-lo.",
        [
          { label: "CANCELAR", testid: "modal-cancel" },
          { label: "APAGAR E COMEÇAR", danger: true, testid: "modal-confirm",
            onClick: () => { apagarSave(); irParaSelecaoStarter(); } }
        ]
      );
    } else {
      irParaSelecaoStarter();
    }
  };

  document.getElementById("btn-continue").onclick = () => {
    if (carregarJogo()) {
      renderMapa();
      mostrarTela("screen-map");
    }
  };
}


/* =========================================================
   12) SELEÇÃO DO STARTER
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
    card.onclick = () => escolherStarter(p);
    grid.appendChild(card);
  });
  mostrarTela("screen-pick-starter");
}

function escolherStarter(personagemBase) {
  state.party = [instanciarPersonagem(personagemBase, 1)];
  state.ativo = 0;
  state.inventario = { merenda: 2, cafezinho: 1 };
  state.derrotados = [];
  state.iniciado = true;
  salvarJogo();
  renderMapa();
  mostrarTela("screen-map");
}


/* =========================================================
   13) MAPA DO CAMPUS
   ========================================================= */
function renderMapa() {
  const grid = document.getElementById("map-grid");
  grid.innerHTML = "";
  LOCAIS.forEach(loc => {
    const card = document.createElement("div");
    card.className = "location-card";
    card.setAttribute("data-testid", `location-${loc.id}`);
    card.innerHTML = `
      <div class="loc-icon">${loc.icone}</div>
      <h3>${loc.nome}</h3>
      <p>${loc.descricao}</p>
      <div class="loc-foes">??? alunos suspeitos vistos por aqui</div>
    `;
    card.onclick = () => irParaLocacao(loc);
    grid.appendChild(card);
  });
  renderPlayerStatus();
}

function renderPlayerStatus() {
  const ativo = state.party[state.ativo];
  if (!ativo) return;
  const el = document.getElementById("player-status");
  el.innerHTML = `
    <div class="ps-line"><strong>${ativo.nome}</strong><span>${ativo.estereotipo}</span></div>
    <div class="ps-line"><span>Nv ${ativo.nivel}</span><span>XP ${ativo.xp}/${xpParaProximoNivel(ativo.nivel)}</span></div>
    <div class="ps-line"><span>HP ${ativo.hp}/${ativo.hpMax}</span><span>Foco ${ativo.foco}/${ativo.focoMax}</span></div>
    <div class="ps-line"><span>Party</span><span>${state.party.length}/6</span></div>
  `;
}


/* =========================================================
   14) LOCAÇÃO (escolha do inimigo — sprites OCULTOS)
   ========================================================= */
let locacaoAtual = null;

function irParaLocacao(loc) {
  locacaoAtual = loc;
  document.getElementById("location-title").textContent = loc.nome;
  document.getElementById("location-desc").textContent  = loc.descricao + " Veja silhuetas suspeitas por aqui:";

  const grid = document.getElementById("silhouette-grid");
  grid.innerHTML = "";

  // Sortear 3 silhuetas (alguns inimigos possíveis)
  const candidatos = loc.inimigosPossiveis
    .map(id => getPersonagem(id))
    .filter(p => p);

  // Embaralhar e pegar até 3
  const escolhidos = [...candidatos].sort(() => Math.random() - 0.5).slice(0, 3);

  escolhidos.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "silhouette-card";
    card.setAttribute("data-testid", `silhouette-${idx}`);
    card.innerHTML = `
      <div class="silhouette-box"></div>
      <div class="sil-label">??? — alvo nº ${idx + 1}</div>
    `;
    card.onclick = () => iniciarBatalha(p, loc);
    grid.appendChild(card);
  });

  document.getElementById("btn-back-map").onclick = () => mostrarTela("screen-map");
  mostrarTela("screen-location");
}


/* =========================================================
   15) BATALHA
   ========================================================= */
function iniciarBatalha(inimigoBase, loc) {
  // Nível inimigo proporcional ao nível do player ativo
  const nivelInimigo = Math.max(1, state.party[state.ativo].nivel + rand(-1, 1));
  const inimigo = instanciarPersonagem(inimigoBase, nivelInimigo);

  state.batalha = {
    inimigo: inimigo,
    inimigoBaseId: inimigoBase.id,
    local: loc,
    turno: "player",
    log: [],
    acabou: false
  };

  // Cenário
  const cena = document.getElementById("battle-scene");
  cena.setAttribute("data-bg", loc.bg);

  renderBatalha();
  log(`Você encontrou ${inimigo.nome} (${inimigo.estereotipo}) em ${loc.nome}!`, "system");
  log(`É hora da batalha!`, "system");
  mostrarTela("screen-battle");
}

function renderBatalha() {
  const b = state.batalha;
  if (!b) return;
  const player = state.party[state.ativo];
  const inimigo = b.inimigo;

  // sprites
  montarSprite(document.getElementById("player-sprite"), player);
  montarSprite(document.getElementById("enemy-sprite"),  inimigo);

  // nomes e estereotipos
  document.getElementById("player-name").textContent = `${player.nome} Nv${player.nivel}`;
  document.getElementById("player-stereo").textContent = player.estereotipo;
  document.getElementById("enemy-name").textContent = `${inimigo.nome} Nv${inimigo.nivel}`;
  document.getElementById("enemy-stereo").textContent = inimigo.estereotipo;

  // barras
  setBar("player-hp", player.hp, player.hpMax);
  setBar("player-mp", player.foco, player.focoMax);
  setBar("enemy-hp",  inimigo.hp, inimigo.hpMax);

  // menu principal visível, submenu oculto
  document.getElementById("battle-menu").classList.remove("hidden");
  document.getElementById("battle-submenu").classList.add("hidden");
}

function setBar(prefix, val, max) {
  const fill  = document.getElementById(prefix + "-fill");
  const label = document.getElementById(prefix + "-label");
  const pct = clamp((val / max) * 100, 0, 100);
  fill.style.width = pct + "%";
  label.textContent = `${val}/${max}`;
}

function log(texto, tipo = "") {
  const logEl = document.getElementById("battle-log");
  const linha = document.createElement("div");
  linha.className = "log-line " + tipo;
  linha.textContent = "> " + texto;
  logEl.appendChild(linha);
  logEl.scrollTop = logEl.scrollHeight;
}


/* ----- Cálculo de dano ----- */
function calcularDano(atacante, alvo, ataque) {
  let multi = 1.0;
  let tipoEf = "normal";

  if (VANTAGENS[atacante.estereotipo] === alvo.estereotipo) {
    multi = 1.5;
    tipoEf = "forte";
  } else if (DESVANTAGENS[atacante.estereotipo] === alvo.estereotipo) {
    multi = 0.5;
    tipoEf = "fraco";
  }

  const base   = ataque.poder + (atacante.ataque + atacante.buffAtk);
  const def    = alvo.defesa;
  const bruto  = Math.max(1, base - def);
  const variancia = rand(-2, 3);
  const critico = Math.random() < 0.12;
  let dano = Math.round(bruto * multi) + variancia;
  if (critico) dano = Math.round(dano * 1.5);

  return {
    dano: Math.max(1, dano),
    tipoEf: tipoEf,
    critico: critico
  };
}


/* ----- Menu principal ----- */
function bindMenuBatalha() {
  document.querySelectorAll("#battle-menu .menu-btn").forEach(btn => {
    btn.onclick = () => {
      if (state.batalha.acabou || state.batalha.turno !== "player") return;
      const action = btn.getAttribute("data-action");
      if (action === "attack") abrirSubmenuAtaques();
      else if (action === "item") abrirSubmenuItens();
      else if (action === "swap") abrirSubmenuTroca();
      else if (action === "flee") tentarFugir();
    };
  });
}


function abrirSubmenuAtaques() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";
  const player = state.party[state.ativo];
  player.ataques.forEach(aid => {
    const a = getAtaque(aid);
    if (!a) return;
    const item = document.createElement("div");
    item.className = "submenu-item" + (player.foco < a.custoFoco ? " disabled" : "");
    item.setAttribute("data-testid", `atk-${a.id}`);
    item.innerHTML = `
      <span class="sub-title">${a.nome}</span>
      <span class="sub-desc">PWR ${a.poder} · FOCO ${a.custoFoco}<br/>${a.descricao}</span>
    `;
    if (player.foco >= a.custoFoco) {
      item.onclick = () => executarAtaque(a);
    }
    sub.appendChild(item);
  });

  const cancel = document.createElement("div");
  cancel.className = "submenu-item";
  cancel.innerHTML = `<span class="sub-title">Voltar</span><span class="sub-desc">Cancela ação.</span>`;
  cancel.onclick = () => sub.classList.add("hidden");
  sub.appendChild(cancel);
}

function abrirSubmenuItens() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";

  let temItem = false;
  Object.entries(state.inventario).forEach(([iid, qtd]) => {
    if (qtd <= 0) return;
    temItem = true;
    const it = getItem(iid);
    const el = document.createElement("div");
    el.className = "submenu-item";
    el.setAttribute("data-testid", `item-${iid}`);
    el.innerHTML = `
      <span class="sub-title">${it.nome} ×${qtd}</span>
      <span class="sub-desc">${it.descricao}</span>
    `;
    el.onclick = () => usarItem(it);
    sub.appendChild(el);
  });

  if (!temItem) {
    const vazio = document.createElement("div");
    vazio.className = "submenu-item disabled";
    vazio.innerHTML = `<span class="sub-title">Vazio</span><span class="sub-desc">Você não tem itens.</span>`;
    sub.appendChild(vazio);
  }

  const cancel = document.createElement("div");
  cancel.className = "submenu-item";
  cancel.innerHTML = `<span class="sub-title">Voltar</span><span class="sub-desc">Cancela ação.</span>`;
  cancel.onclick = () => sub.classList.add("hidden");
  sub.appendChild(cancel);
}

function abrirSubmenuTroca() {
  const sub = document.getElementById("battle-submenu");
  sub.classList.remove("hidden");
  sub.innerHTML = "";

  if (state.party.length <= 1) {
    const v = document.createElement("div");
    v.className = "submenu-item disabled";
    v.innerHTML = `<span class="sub-title">Sem aliados</span><span class="sub-desc">Você está sozinho.</span>`;
    sub.appendChild(v);
  } else {
    state.party.forEach((p, idx) => {
      if (idx === state.ativo) return;
      const el = document.createElement("div");
      el.className = "submenu-item" + (p.hp <= 0 ? " disabled" : "");
      el.setAttribute("data-testid", `swap-${p.id}`);
      el.innerHTML = `
        <span class="sub-title">${p.nome} Nv${p.nivel}</span>
        <span class="sub-desc">${p.estereotipo} · HP ${p.hp}/${p.hpMax}</span>
      `;
      if (p.hp > 0) {
        el.onclick = () => trocarAluno(idx);
      }
      sub.appendChild(el);
    });
  }

  const cancel = document.createElement("div");
  cancel.className = "submenu-item";
  cancel.innerHTML = `<span class="sub-title">Voltar</span><span class="sub-desc">Cancela ação.</span>`;
  cancel.onclick = () => sub.classList.add("hidden");
  sub.appendChild(cancel);
}


/* ----- Ações de batalha ----- */
function executarAtaque(ataque) {
  const b = state.batalha;
  if (!b || b.acabou) return;
  const player = state.party[state.ativo];

  if (player.foco < ataque.custoFoco) {
    log("Foco insuficiente.", "weak");
    return;
  }
  player.foco -= ataque.custoFoco;

  const r = calcularDano(player, b.inimigo, ataque);
  b.inimigo.hp = Math.max(0, b.inimigo.hp - r.dano);

  log(`${player.nome} usou ${ataque.nome}!`);
  if (r.critico) log(`CRÍTICO! ${r.dano} de dano em ${b.inimigo.nome}.`, "crit");
  else if (r.tipoEf === "forte") log(`Super eficaz! ${r.dano} de dano.`, "strong");
  else if (r.tipoEf === "fraco") log(`Pouco eficaz... ${r.dano} de dano.`, "weak");
  else log(`${r.dano} de dano.`);

  shakeSprite("enemy-sprite");
  document.getElementById("battle-submenu").classList.add("hidden");
  renderBatalha();

  if (b.inimigo.hp <= 0) {
    finalizarVitoria();
    return;
  }
  setTimeout(turnoInimigo, 700);
}

function usarItem(item) {
  const b = state.batalha;
  if (!b || b.acabou) return;
  const player = state.party[state.ativo];

  if (item.tipo === "cura_hp") {
    const cura = Math.min(item.valor, player.hpMax - player.hp);
    player.hp += cura;
    log(`${player.nome} usou ${item.nome} e recuperou ${cura} HP.`, "system");
  } else if (item.tipo === "cura_foco") {
    const cura = Math.min(item.valor, player.focoMax - player.foco);
    player.foco += cura;
    log(`${player.nome} usou ${item.nome} e recuperou ${cura} Foco.`, "system");
  } else if (item.tipo === "buff_atk") {
    player.buffAtk += item.valor;
    log(`${player.nome} usou ${item.nome}. +${item.valor} ATK nesta batalha.`, "system");
  } else if (item.tipo === "cura_total") {
    player.hp = player.hpMax;
    player.foco = player.focoMax;
    log(`${player.nome} usou ${item.nome}. Totalmente restaurado!`, "system");
  }
  state.inventario[item.id]--;
  if (state.inventario[item.id] <= 0) delete state.inventario[item.id];

  document.getElementById("battle-submenu").classList.add("hidden");
  renderBatalha();
  setTimeout(turnoInimigo, 700);
}

function trocarAluno(idx) {
  state.ativo = idx;
  log(`Você trocou para ${state.party[idx].nome}!`, "system");
  document.getElementById("battle-submenu").classList.add("hidden");
  renderBatalha();
  setTimeout(turnoInimigo, 700);
}

function tentarFugir() {
  const b = state.batalha;
  if (!b || b.acabou) return;
  const chance = 0.6;
  if (Math.random() < chance) {
    log("Você fugiu da batalha covardemente!", "system");
    b.acabou = true;
    setTimeout(() => {
      renderMapa();
      mostrarTela("screen-map");
    }, 1000);
  } else {
    log("Não conseguiu fugir!", "weak");
    setTimeout(turnoInimigo, 700);
  }
}

function turnoInimigo() {
  const b = state.batalha;
  if (!b || b.acabou) return;
  const player  = state.party[state.ativo];
  const inimigo = b.inimigo;

  // IA simples: usa um ataque aleatório que tenha foco
  const disponiveis = inimigo.ataques
    .map(id => getAtaque(id))
    .filter(a => a && inimigo.foco >= a.custoFoco);

  const escolhido = disponiveis.length > 0
    ? disponiveis[rand(0, disponiveis.length - 1)]
    : getAtaque("soco_basico");

  inimigo.foco = Math.max(0, inimigo.foco - escolhido.custoFoco);
  const r = calcularDano(inimigo, player, escolhido);
  player.hp = Math.max(0, player.hp - r.dano);

  log(`${inimigo.nome} usou ${escolhido.nome}!`);
  if (r.critico) log(`CRÍTICO! ${r.dano} de dano em você.`, "crit");
  else if (r.tipoEf === "forte") log(`Super eficaz! ${r.dano} de dano.`, "strong");
  else if (r.tipoEf === "fraco") log(`Pouco eficaz... ${r.dano} de dano.`, "weak");
  else log(`${r.dano} de dano.`);

  shakeSprite("player-sprite");
  renderBatalha();

  if (player.hp <= 0) {
    log(`${player.nome} foi nocauteado!`, "weak");
    // tentar trocar automaticamente
    const proximoVivo = state.party.findIndex(p => p.hp > 0);
    if (proximoVivo === -1) {
      finalizarDerrota();
    } else {
      state.ativo = proximoVivo;
      log(`${state.party[proximoVivo].nome} entra em campo!`, "system");
      renderBatalha();
    }
  }
}

function shakeSprite(id) {
  const el = document.getElementById(id);
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
}


/* ----- Fim de batalha ----- */
function finalizarVitoria() {
  const b = state.batalha;
  b.acabou = true;
  const player = state.party[state.ativo];
  const ganhoXp = 20 + b.inimigo.nivel * 10;
  log(`Vitória! +${ganhoXp} XP para ${player.nome}.`, "system");
  player.xp += ganhoXp;

  // Level up
  while (player.xp >= xpParaProximoNivel(player.nivel)) {
    player.xp -= xpParaProximoNivel(player.nivel);
    player.nivel++;
    player.hpMax  += 10; player.hp = player.hpMax;
    player.focoMax += 5; player.foco = player.focoMax;
    player.ataque += 2;
    player.defesa += 1;
    log(`${player.nome} subiu para o nível ${player.nivel}!`, "crit");

    // Desbloquear novos ataques
    const base = getPersonagem(player.id);
    if (base) {
      const novos = ATAQUES.filter(a =>
        (a.estereotipoDono === base.estereotipo || a.estereotipoDono === "*") &&
        a.nivelMinimo <= player.nivel &&
        !player.ataques.includes(a.id)
      );
      novos.forEach(a => {
        player.ataques.push(a.id);
        log(`Novo ataque aprendido: ${a.nome}!`, "crit");
      });
    }
  }

  // Buff de itens reseta
  player.buffAtk = 0;

  state.derrotados.push(b.inimigoBaseId);

  // Chance de recrutar (40%)
  const podeRecrutar = state.party.length < 6
    && !state.party.some(p => p.id === b.inimigoBaseId);

  if (podeRecrutar && Math.random() < 0.4) {
    setTimeout(() => {
      abrirModal(
        "Recrutar aluno?",
        `${b.inimigo.nome} (${b.inimigo.estereotipo}) parece disposto a se juntar à sua party. Aceitar?`,
        [
          { label: "RECUSAR", testid: "recruit-no",
            onClick: () => voltarAoMapa() },
          { label: "RECRUTAR", testid: "recruit-yes",
            onClick: () => {
              const base = getPersonagem(b.inimigoBaseId);
              const novo = instanciarPersonagem(base, b.inimigo.nivel);
              state.party.push(novo);
              salvarJogo();
              voltarAoMapa();
            } }
        ]
      );
    }, 800);
  } else {
    // Loot aleatório
    if (Math.random() < 0.5) {
      const drop = ITENS[rand(0, ITENS.length - 2)]; // exclui amuleto raro
      state.inventario[drop.id] = (state.inventario[drop.id] || 0) + 1;
      log(`Você encontrou: ${drop.nome}!`, "system");
    }
    setTimeout(voltarAoMapa, 1400);
  }

  salvarJogo();
}

function finalizarDerrota() {
  state.batalha.acabou = true;
  log("Você foi derrotado...", "weak");
  setTimeout(() => {
    abrirModal(
      "Você apagou.",
      "Toda a sua party foi nocauteada. Você acorda na enfermaria. Toda a party é restaurada, mas o save permanece.",
      [
        { label: "VOLTAR AO MAPA", testid: "defeat-back",
          onClick: () => {
            // restaurar HP/foco
            state.party.forEach(p => { p.hp = p.hpMax; p.foco = p.focoMax; });
            state.ativo = 0;
            salvarJogo();
            renderMapa();
            mostrarTela("screen-map");
          } }
      ]
    );
  }, 800);
}

function voltarAoMapa() {
  // Curar 25% após batalha
  const player = state.party[state.ativo];
  player.hp = Math.min(player.hpMax, player.hp + Math.floor(player.hpMax * 0.25));
  player.foco = Math.min(player.focoMax, player.foco + Math.floor(player.focoMax * 0.25));
  salvarJogo();
  renderMapa();
  mostrarTela("screen-map");
}


/* =========================================================
   16) PARTY VIEW (modal)
   ========================================================= */
function abrirParty() {
  const lista = state.party.map((p, i) =>
    `${i === state.ativo ? "→ " : "  "}${p.nome} Nv${p.nivel} (${p.estereotipo}) — HP ${p.hp}/${p.hpMax} · Foco ${p.foco}/${p.focoMax}`
  ).join("\n");

  const itensTxt = Object.entries(state.inventario)
    .map(([id, qtd]) => `${getItem(id)?.nome} ×${qtd}`)
    .join(" · ") || "Nenhum item";

  abrirModal(
    "Sua Party",
    `${lista}\n\nItens: ${itensTxt}`,
    [
      { label: "TROCAR ATIVO", testid: "modal-swap-active",
        onClick: () => trocarAtivoMapa() },
      { label: "FECHAR", testid: "modal-party-close" }
    ]
  );
}

function trocarAtivoMapa() {
  if (state.party.length <= 1) return;
  state.ativo = (state.ativo + 1) % state.party.length;
  // pular nocauteados
  let safety = 0;
  while (state.party[state.ativo].hp <= 0 && safety < state.party.length) {
    state.ativo = (state.ativo + 1) % state.party.length;
    safety++;
  }
  salvarJogo();
  renderMapa();
}


/* =========================================================
   17) BOOT
   ========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  initTitulo();
  bindMenuBatalha();

  document.getElementById("btn-party").onclick = abrirParty;
  document.getElementById("btn-save").onclick = () => {
    if (salvarJogo()) {
      abrirModal("Salvo!", "Seu progresso foi salvo no navegador.", [
        { label: "OK", testid: "modal-saved-ok" }
      ]);
    }
  };
  document.getElementById("btn-quit").onclick = () => {
    abrirModal("Sair para o título?",
      "O progresso é mantido (já salvo automaticamente).",
      [
        { label: "CANCELAR", testid: "modal-quit-cancel" },
        { label: "SAIR", danger: true, testid: "modal-quit-confirm",
          onClick: () => { salvarJogo(); mostrarTela("screen-title"); initTitulo(); } }
      ]
    );
  };

  mostrarTela("screen-title");
});
