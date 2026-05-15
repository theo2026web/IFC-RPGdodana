# IFC Sombrio: Batalha dos Alunos — PRD v2.0

## Implementado v2 (2026-02)
- [x] CONDICOES: 11 status (Cansado, Exausto, Atordoado, Sangrando, Em Chamas, Concentrado, Inspirado, Protegido, Confuso, Drogado, Regenerando)
- [x] Sistema de precisão por ataque (físicos 88-95%, especiais 80-92%, cura/buff 100%)
- [x] Sistema de crítico com modificadores (Concentrado +20%, ataques específicos com crit alto)
- [x] AÇÕES tipadas: ataque, buff, debuff, cura, misto
- [x] Targeting: inimigo_unico, todos_inimigos, aliado_unico, todos_aliados, self
- [x] AoE: Solo de Guitarra, Textão, Rage Quit, Prova Surpresa, etc.
- [x] Especialização por classe:
  - Nerd: dano único + debuff cansaço
  - Atleta: físico forte + multi
  - Valentão: dano único alto + crit buff
  - Músico: buff/debuff multi + cura coletiva
  - Entroza: debuff confuso/drogado multi
  - Professor: AoE + cansaço garantido
  - Woke: AoE + buff aliados
  - Estranho: confusão/drogado
  - Gamer: combo single + rage AoE + concentração
  - Gente Fina: cura única/multi + escudo defesa
- [x] Batalha até 3v3 simultâneo
- [x] Party em campo + reservas
- [x] UI de seleção de alvo
- [x] Som: Web Audio API (gerado) + override por arquivos em assets/sfx/
- [x] Botão SOM ON/OFF salvo no save
- [x] Save v2 (chave nova: ifc_sombrio_save_v2)
- [x] Confuso pode redirecionar ataque para aliado
- [x] Antídoto: novo item que limpa condições negativas
- [x] CSS antigo preservado (style.css); adições em style-v2.css

## Backlog
- P1: Adicionar imagens reais (assets/*.png) — sistema já carrega automaticamente
- P1: Adicionar arquivos de SFX (assets/sfx/*.mp3) para override
- P2: Boss fight com mecânicas únicas
- P2: Sistema de equipamentos/acessórios
- P2: Mais alunos por estereótipo
- P2: Animações de ataque (efeitos visuais)
