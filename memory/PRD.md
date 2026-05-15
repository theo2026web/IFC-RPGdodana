# IFC Sombrio: Batalha dos Alunos — PRD

## Original Problem
RPG de combate em turnos em HTML5/CSS3/Vanilla JS chamado "IFC Sombrio: Batalha dos Alunos", arquitetura modular com arrays separados (Personagens, Ataques, Itens, Locais). Sistema de elementos por estereótipos escolares com multiplicadores. Mapa do campus. Inimigos ocultos durante seleção (silhuetas). Combate por turnos, recrutamento de derrotados, XP/level up.

## User Choices
- Estrutura: arquivos separados (index.html, style.css, game.js)
- Sprites: imagens externas + fallback canvas pixel-art
- 1 personagem por estereótipo (10 total)
- Starters: Dana (Músico), Mello (Valentão), Puskás (Nerd)
- localStorage para salvar progresso

## Architecture
- Standalone web game em `/app/frontend/public/game/`
- React App redireciona para `/game/index.html`
- Sem backend; persistência em localStorage

## Implemented (2026-02)
- [x] Telas: Título, Seleção, Mapa, Locação, Batalha, Modal
- [x] Sistema de estereótipos com VANTAGENS/DESVANTAGENS (10 tipos)
- [x] 21 ataques personalizados (Combo Breaker, Rage Quit, Textão, Elogio Sincero, etc.)
- [x] 4 itens (Merenda, Cafezinho, Energético, Amuleto)
- [x] 5 locais (Cantina, Quadra, Lab, Pátio, Ponto de Ônibus)
- [x] 10 personagens (3 starters + 7 NPCs)
- [x] Silhuetas com "?" durante seleção
- [x] Sprites revelados na batalha
- [x] Combate em turnos: Atacar, Item, Trocar, Fugir
- [x] Barras HP e Foco animadas
- [x] Cálculo de dano com multiplicadores (1.5x forte, 0.5x fraco, +crit 1.5x)
- [x] XP, level up, desbloqueio de ataques
- [x] Recrutamento (40% chance, party até 6)
- [x] Pixel-art sprite generator via canvas (fallback)
- [x] localStorage save/load
- [x] CSS retrô preservado (regra estrita)

## Backlog
- P1: Música/SFX 8-bit
- P1: Adicionar mais alunos por estereótipo
- P2: Boss fight
- P2: Sistema de equipamentos
- P2: Animações de ataque mais elaboradas
