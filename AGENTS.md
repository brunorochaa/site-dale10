# AGENTS.md

> **Sincronia obrigatória:** `CLAUDE.md` e `AGENTS.md` devem ter o mesmo conteúdo (só o título muda). Sempre que um for alterado, atualize o outro.

## O que é

Site estático de fã do jogador D'Alessandro (sem ligação oficial), em pt, en e es. Projeto final de Web 1 do curso técnico da QI (Bruno Rocha e Thiago Dias, 2020), reorganizado em 2026. Detalhes no `README.md`.

## Stack

HTML, CSS e JavaScript puros, sem bibliotecas nem build. Abre direto pelo `index.html`.

## Estrutura

- `index.html` e `perfil.html` (português) na raiz; `en/` e `es/` têm **só** os dois HTML traduzidos e apontam para `../css`, `../js` e `../img`. Não copiar CSS, JS ou imagens para dentro das pastas de idioma.
- `css/estilo.css`: único CSS, tema claro nas cores do Inter (creme, vinho, vermelho e o dourado da estrela do logo; topo, capa, números e rodapé em vinho). Nunca usar azul: o Bruno é colorado e o site é para o Inter, **mobile first** (regras base para celular; `@media (min-width: 640px)` e `(min-width: 960px)`), cores e fontes em variáveis no `:root`, layout com grid/flexbox. Fontes do Google Fonts: Oswald no menu, Barlow Condensed nos títulos e Inter no texto. Largura máxima do conteúdo em `--largura` (1600px).
- `js/site.js`: menu do celular (`.botao-menu` com `aria-expanded`, fecha com Esc), botão `.voltar-topo` e formulário de contato demonstrativo, com textos por idioma (`TEXTOS`, escolhidos pelo `lang` do `<html>`).
- `img/`: fundos em JPEG (`background1.jpg` na capa, `background3.jpg` nos números, `cabecalho.jpg` no perfil); ícones em PNG.

## Convenções

- Toda alteração de estrutura vale para as 6 páginas (3 idiomas × início/perfil); só o texto muda entre elas. `<html lang>` correto em cada uma (`pt-BR`, `en`, `es`).
- Arquivos e classes em `kebab-case`, nomes em pt-BR; sem CSS ou JS dentro do HTML (nada de `<style>`, `<script>` inline ou `onclick`).
- Rolagem suave por CSS (`scroll-behavior`), sem jQuery.
- Links externos com `target="_blank"` levam `rel="noopener"`; iframes com `title` e `loading="lazy"`.
- Imagens grandes em JPEG/WebP, não PNG.
- Formatação: `.editorconfig` (4 espaços, LF, UTF-8).

## README com prints

- O `README.md` mostra o projeto com prints em `docs/imagens/` (PNG; 1280 de largura no computador, 500 no celular; poucos, só as telas principais), em tabelas lado a lado.
- Só dados fictícios nas imagens: nada de nome, telefone, e-mail ou chave reais, e nada do serviço na tela.
- Refaça os prints só quando a tela mudar de verdade: gere de novo e compare o tamanho do arquivo; se for idêntico, mantenha o antigo (evita inchar o repositório).
- Como tirar: Chrome sem janela, `chrome.exe --headless=new --hide-scrollbars --window-size=1280,900 --virtual-time-budget=10000 --screenshot=<arquivo> <url>`, com um `--user-data-dir=<pasta temporária>` para cada print. Site estático abre por `file:///`; PHP sobe com `C:\Users\bruno\php\php.exe -S localhost:8000 -t public` (o PHP não está no PATH). O Chrome sem janela não passa de uns 500 de largura.
- A rotina completa está na skill `/readme` do Claude Code.
- Neste projeto: `index.html` e `perfil.html` por `file:///` (as versões `en/` e `es/` têm o mesmo visual).

## Notas para futuros agentes

- Reorganizado em 2026-11-06: removidas as cópias de CSS/JS/25 imagens em `en/` e `es/`, jQuery 3.1.1, `npm.js` e o `bootsfake.css` (recorte do Bootstrap 4, depois incorporado ao `estilo.css`); fundos convertidos de PNG (~6 MB) para JPEG (~0,5 MB); corrigidos `lang="en"` na página em português, links das bandeiras, `css/button.css` inexistente no perfil, caixa do Instagram que mostrava o Facebook, "More than GOALS" sem o número e formulário que enviava POST para a página estática.
- Redesenhado em 2026-11-06 a pedido do Bruno ("tá bem ruim, melhora o responsivo e o design"): HTML semântico igual nas 6 páginas, CSS refeito do zero (sem `float`), menu ☰ no celular, cartões de números e de redes sociais (os widgets do Facebook/Twitter e o vídeo do YouTube, que tinha saído do ar, viraram links). Testado em 390px e 1366px sem rolagem horizontal. Depois, a pedido do Bruno: conteúdo mais largo (até 1600px), logo maior no topo, fontes novas e texto em português revisado (frases mais curtas, menos vírgulas). Por fim, visual escuro e moderno: cartões translúcidos, rótulos numerados (01 a 04) e cada seção da página inicial com pelo menos a altura da tela (`.secao` com `min-height: calc(100svh - var(--altura-topo))`). Depois o Bruno não gostou do preto e vermelho: a primeira tentativa em azul-marinho e celeste também foi recusada ("sou colorado"), então a paleta final é creme, vinho, vermelho e dourado, com faixa vermelho-branco-vermelho na capa. Os escudos `inter.png`, `arg.png` e `river.png` e os ícones dos números são brancos, então precisam de fundo escuro (o cartão `.clubes` é vinho); os ícones das redes são pretos.

## Regras gerais

- Use português do Brasil (pt-BR) nas respostas ao usuário e na documentação.
- Prefira soluções simples; não adicione bibliotecas sem necessidade.
- Não altere arquivos ou funcionalidades fora do escopo da tarefa sem explicar o motivo.
- Atualize o `README.md` quando mudar estrutura ou comportamento importante.
