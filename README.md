# Widget de Aniversariantes - Intranet PGE

Este repositório/bloco contém o código fonte para o **Módulo de Aniversariantes** utilizado no portal interno da Procuradoria Geral do Estado (PGE). O componente é "Self-Contained", ou seja, inclui HTML, CSS e JavaScript em um único bloco para facilitar a inserção em CMS ou widgets de HTML puro.

## 📋 Visão Geral

O script exibe os aniversariantes do dia de forma destacada, com animações de confete e suporte a visualização mobile. Além disso, permite a consulta de aniversariantes de qualquer mês através de uma interface de abas.

### Funcionalidades Principais

1. **Visualização Diária ("Hoje"):** Exibe automaticamente quem faz aniversário na data atual.
2. **Lógica de Fim de Semana:** Se hoje for sexta-feira, o sistema exibe automaticamente os aniversariantes de **Sexta, Sábado e Domingo**.
3. **Modo Festivo (Natal e Ano Novo):** Durante as semanas do Natal e do Ano Novo, o widget altera seu comportamento para exibir os aniversariantes da **semana inteira**, garantindo que ninguém seja esquecido durante o recesso.
4. **Lista Completa:** Botão "Ver aniversariantes do mês" permite filtrar e buscar colegas por mês.
5. **Acessibilidade:** Suporte nativo a ferramentas de **Alto Contraste** (detecta classes no `body` como `contrast` ou `alto-contraste`).
6. **Responsividade:** No desktop exibe uma tabela; no mobile (celulares) transforma-se em "cards" para melhor leitura.

---

## ⚙️ Como Atualizar a Lista de Aniversariantes

A base de dados deste widget é uma tabela HTML oculta (`display: none`) localizada no próprio código. **Não é necessário mexer no JavaScript** para atualizar os nomes.

### Passo a Passo

1. Localize a tag `<table id="tabela-fonte-dados">` dentro do código.
2. Dentro de `<tbody>`, cada linha (`<tr>`) representa um aniversariante.
3. Insira ou remova linhas seguindo o modelo abaixo:

```html
<tr data-mes="10">
    <td>15</td> <td>Fulano da Silva</td> <td>GABINETE</td> </tr>

```

### Regras de Preenchimento

* **`data-mes`:** O atributo na tag `<tr>` deve conter o número do mês (1 a 12).
* **Coluna 1 (`<td>`):** O dia do aniversário (apenas números).
* **Coluna 2 (`<td>`):** O nome do servidor. *Nota: O script formata automaticamente para "Iniciais Maiúsculas", então você pode colar o texto tudo em maiúsculo que ele corrigirá na exibição.*
* **Coluna 3 (`<td>`):** A sigla ou nome do setor.

---

## 🛠️ Detalhes Técnicos

### Estrutura do Código

O código é envelopado em uma `div` principal com ID `#app-aniversariantes-es`. Isso garante que o CSS interno não afete o restante do site da PGE (CSS Scoped via ID).

* **HTML:** Estrutura das views (Inicial e Completa) e a tabela de dados oculta.
* **CSS:** Injetado via JavaScript (`styleAniversario`) para garantir que os estilos carreguem junto com o bloco. Utiliza Flexbox e Grid Layout.
* **JavaScript:**
* Pure JavaScript (Vanilla), sem dependências externas (como jQuery).
* Utiliza `IntersectionObserver` ou manipulação direta de DOM para alternar as views.
* Calcula datas automaticamente baseadas no relógio do navegador do usuário.



### Lógica de Datas Festivas

O script possui uma função interna `exibirAniversariantesIniciais()` que verifica datas específicas:

* **Natal:** Verifica se a data atual está na semana do dia 25/12.
* **Ano Novo:** Verifica se a data atual está na semana do dia 01/01.
* **Ação:** Nestes casos, o título muda e a lista exibe todos os aniversariantes daquela semana (Segunda a Domingo).

---

## 🎨 Personalização (CSS)

Caso seja necessário alterar cores institucionais, procure no bloco de `<script>` a constante `styleAniversario` e altere as variáveis ou classes hardcoded:

* **Cor Principal (Vinho/Vermelho):** `#C86673` (Usado em títulos e detalhes).
* **Cor Secundária (Azul):** `#366C88` (Usado em botões e cabeçalhos).
* **Ícones:** Os ícones são SVGs inline. Para trocar, substitua o código dentro das tags `<svg>`.

## ⚠️ Resolução de Problemas Comuns

* **O confete não aparece:** Verifique se o navegador não está com "Redução de movimento" ativada ou se há alguma z-index sobrepondo o `#confetti-container`.
* **Nomes duplicados:** Verifique a tabela oculta `#tabela-fonte-dados`. O script não remove duplicatas automaticamente; a limpeza deve ser feita no HTML.
* **Layout quebrado no Mobile:** O script foi desenhado para containers de largura total. Se o widget for colocado em uma coluna lateral muito estreita (sidebar), o layout de tabela do desktop pode quebrar. O ideal é que ele fique na área de conteúdo principal.
