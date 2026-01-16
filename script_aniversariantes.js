<div id="app-aniversariantes-es">
    <div id="confetti-container"></div>
    <div class="lista-aniversariantes-container">
        <div id="view-inicial">
            <div id="mensagem-principal" class="mensagem-box animate-slide-up" style="display: none;"></div>
            <div class="tabela-unica animate-slide-up" id="container-tabela-hoje" style="display: none;">
                <div class="accordion-header-fake">
                    <div class="titulo-flex"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"> <path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.56l2.14-2.13 2.13 2.13c.74.74 1.96.74 2.7 0l2.14-2.13 2.13 2.13c.37.37.87.56 1.39.56 1.08 0 1.96-.88 1.96-1.96V12c0-1.66-1.34-3-3-3z"></path> </svg> <span id="texto-titulo-hoje">Aniversariantes de Hoje</span></div>
                </div>
                <div class="table-wrapper">
                    <table class="tabela-grade">
                        <thead>
                            <tr class="linha-cabecalho-azul">
                                <th>Dia</th>
                                <th>Nome</th>
                                <th>Setor</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-hoje"></tbody>
                    </table>
                </div>
            </div>
            <div id="card-sem-aniversariantes" class="empty-state-card animate-fade-in" style="display: none;">
                <div class="empty-icon-wrapper"><svg class="swing-icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"> <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"></path> </svg></div>
                <h3 class="empty-title">Nenhum aniversariante hoje (<span id="data-hoje-vazio"></span>)</h3>
                <p class="empty-text">Hoje n&atilde;o temos celebra&ccedil;&otilde;es, mas desejamos um dia de trabalho produtivo e excelente a todos!</p>
            </div>
            <div class="container-botao"><button id="btn-ver-todos" class="btn-padrao-azul"> <span>Ver aniversariantes do m&ecirc;s</span> <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"> <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path> </svg> </button></div>
        </div>
        <div id="view-completa" style="display: none;">
            <div id="sentinela-topo"></div>
            <div class="barra-controle-sticky">
                <div class="controle-wrapper">
                    <div class="grupo-controle flex-grow"><label for="seletor-mes">Selecione o M&ecirc;s:</label><select id="seletor-mes"></select></div>
                    <div class="grupo-controle"><label class="label-invisible">&nbsp;</label> <button id="btn-voltar-topo" class="btn-padrao-azul"> <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"> <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path> </svg> Voltar para Hoje </button></div>
                </div>
            </div>
            <div id="loader-tabela" class="loader-wrapper" style="display: none;">
                <div class="spinner"></div>
                <p>Buscando aniversariantes...</p>
            </div>
            <div class="tabela-unica animate-slide-up" id="container-tabela-mes">
                <div class="accordion-header-fake">
                    <div class="titulo-flex"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor"> <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path> </svg> <span id="titulo-dinamico-mes">Aniversariantes do M&ecirc;s</span></div>
                </div>
                <div class="table-wrapper">
                    <table class="tabela-grade">
                        <thead>
                            <tr class="linha-cabecalho-azul">
                                <th>Dia</th>
                                <th>Nome</th>
                                <th>Setor</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-mes"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <table id="tabela-fonte-dados" style="display: none;">
        <tbody>
            <tr data-mes="1"><td>01</td><td>Fulano da Silva</td><td>GABINETE</td></tr>
        </tbody>
    </table>
    <script>
        (function() {
            // --- CSS ---
            const styleAniversario = document.createElement('style');
            styleAniversario.innerHTML = `
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
                
                /* RESET GERAL LOCAL */
                #app-aniversariantes-es * { border-radius: 0 !important; box-sizing: border-box; }
                
                /* CONFIGURAÇÃO GERAL E MARGEM NEGATIVA TOPO */
                #app-aniversariantes-es { 
                    width: 100%; 
                    font-family: 'Open Sans', 'Arial', sans-serif; 
                    font-size: 16px; 
                    line-height: 1.4; 
                    color: #333; 
                    margin-top: -60px; /* Ajuste para subir a página */
                }

                #app-aniversariantes-es .lista-aniversariantes-container {
                    background-color: #fff;
                    padding: 0;
                    width: 100%;
                }

                /* ÍCONES */
                #app-aniversariantes-es svg { width: 1.2em; height: 1.2em; display: block; fill: currentColor; }
                #app-aniversariantes-es .empty-icon-wrapper svg { width: 4em !important; height: 4em !important; }
                #app-aniversariantes-es .swing-icon { color: #C86673; animation: swing 3s ease-in-out infinite; transform-origin: top center; }

                /* ANIMAÇÕES */
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes confettiFall { 0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @keyframes swing { 0% { transform: rotate(0deg); } 20% { transform: rotate(10deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }

                .animate-slide-up { animation: fadeInUp 0.6s ease-out forwards; }
                .animate-fade-in { animation: fadeInUp 0.8s ease-out forwards; }

                /* BARRA STICKY (CONTROLES) */
                #app-aniversariantes-es .barra-controle-sticky {
                    position: sticky; 
                    top: 0px; 
                    z-index: 490;
                    background-color: #f7f7f7; 
                    border: 1px solid #e0e0e0;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    padding: 8px; /* Reduzido padding */
                    margin-bottom: 10px;
                }
                body.admin-bar #app-aniversariantes-es .barra-controle-sticky { top: 32px; }

                #app-aniversariantes-es .controle-wrapper { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; }
                #app-aniversariantes-es .grupo-controle { display: flex; flex-direction: column; flex-grow: 1; }
                #app-aniversariantes-es .flex-grow { flex-grow: 1; }
                
                #app-aniversariantes-es label { 
                    font-weight: 700; margin-bottom: 2px; font-size: 0.9em; 
                    text-transform: uppercase; color: #444; display: block; line-height: 1.2;
                }
                #app-aniversariantes-es .label-invisible { visibility: hidden; margin-bottom: 2px; display: block; height: auto; width: 100%; content: "&nbsp;"; }

                /* SELECT PADRONIZADO */
                #app-aniversariantes-es select { 
                    padding: 0 10px; border: 1px solid #bbb; 
                    font-size: 0.9em; /* Tamanho da fonte ajustado */
                    height: 35px !important; /* Altura fixa igual ramais */
                    width: 100%; background-color: #fff; color: #333; cursor: pointer; 
                    transition: border-color 0.2s;
                }
                #app-aniversariantes-es select:focus { border-color: #C86673; outline: none; }

                /* BOTÕES PADRONIZADOS */
                #app-aniversariantes-es .btn-padrao-azul { 
                    background-color: #366C88; color: white; border: 1px solid transparent; padding: 0 20px; 
                    cursor: pointer; font-size: 0.85em; /* Fonte ajustada */
                    font-weight: 600; transition: all 0.2s ease; 
                    height: 35px !important; /* Altura fixa */
                    display: flex; align-items: center; justify-content: center; gap: 8px; 
                    white-space: nowrap;
                }
                #app-aniversariantes-es .btn-padrao-azul:hover { 
                    background-color: #2b566d; 
                }
                #app-aniversariantes-es .container-botao { text-align: center; margin-top: 1.5em; display: flex; justify-content: center; }

                /* CONTAINER TABELA (ACORDEON) */
                #app-aniversariantes-es .tabela-unica {
                    border: 1px solid #ddd;
                    margin-bottom: 10px; /* Espaço entre blocos */
                    overflow: hidden;
                    background-color: #fff;
                }

                /* HEADER FALSO (TÍTULO DO ACORDEON) */
                #app-aniversariantes-es .accordion-header-fake {
                    width: 100%; background-color: #C86673; border: none; padding: 10px 13px;
                    text-align: left; 
                    font-size: 1em; /* Ajustado */
                    font-weight: 700; /* Peso ajustado */
                    color: #ffffff !important; 
                    display: flex; justify-content: space-between; align-items: center;
                    text-transform: uppercase; 
                }
                #app-aniversariantes-es .titulo-flex { display: flex; align-items: center; gap: 10px; }

                /* TABELA */
                #app-aniversariantes-es .table-wrapper { overflow-x: auto; width: 100%; }
                
                #app-aniversariantes-es table.tabela-grade {
                    width: 100% !important; border-collapse: collapse; table-layout: fixed !important; margin: 0;
                }
                
                /* CABEÇALHO TABELA */
                #app-aniversariantes-es .linha-cabecalho-azul th {
                    background-color: #366C88; color: #ffffff !important; 
                    font-weight: 700; 
                    font-size: 1em; /* Fonte ajustada */
                    padding: 10px; /* Padding ajustado */
                    text-align: left; border: 1px solid #ccc; vertical-align: middle;
                }
                
                /* CÉLULAS TABELA */
                #app-aniversariantes-es table.tabela-grade td {
                    padding: 10px; /* Padding ajustado */
                    text-align: left; border: 1px solid #ddd; color: #333;
                    vertical-align: middle; 
                    font-size: 1em; /* Fonte ajustada */
                    word-wrap: break-word; font-weight: 400;
                    white-space: normal; 
                }
                #app-aniversariantes-es table.tabela-grade tr:nth-child(even) { background-color: #f9f9f9; }
                #app-aniversariantes-es table.tabela-grade tr:nth-child(odd) { background-color: #ffffff; }
                
                /* Desktop - Estilos Específicos */
                @media (min-width: 769px) {
                    #app-aniversariantes-es table.tabela-grade tbody tr:hover { background-color: #fff0f3 !important; transition: background-color 0.2s; }
                    
                    #app-aniversariantes-es table.tabela-grade th:nth-child(1),
                    #app-aniversariantes-es table.tabela-grade td:nth-child(1) { width: 15% !important; text-align: center; }

                    #app-aniversariantes-es table.tabela-grade th:nth-child(2),
                    #app-aniversariantes-es table.tabela-grade td:nth-child(2) { width: 55% !important; font-weight: 600; color: #333; }

                    #app-aniversariantes-es table.tabela-grade th:nth-child(3),
                    #app-aniversariantes-es table.tabela-grade td:nth-child(3) { width: 30% !important; color: #555; }
                    
                    #app-aniversariantes-es .dia-badge {
                        display: inline; background-color: transparent; color: inherit;
                        width: auto; height: auto; padding: 0; margin: 0; border: none !important;
                    }
                }
                
                /* MENSAGEM BOX E EMPTY STATE */
                #app-aniversariantes-es .mensagem-box { 
                    text-align: center; font-size: 1.1em; color: #444; margin-bottom: 15px; padding: 15px; 
                    background-color: #fff5f7; border-left: 5px solid #C86673; 
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05); 
                }
                #app-aniversariantes-es .empty-state-card { 
                    text-align: center; padding: 3em; color: #666; 
                    border: 1px solid #e0e0e0; margin-bottom: 2em; background: #fff;
                    display: flex; flex-direction: column; align-items: center;
                }
                #app-aniversariantes-es .empty-title { font-size: 1.2em; font-weight: 700; color: #333; margin: 0 0 0.5em 0; }
                #app-aniversariantes-es .empty-text { font-size: 1em; color: #666; margin: 0 auto; max-width: 600px; }
                
                /* LOADER */
                #app-aniversariantes-es .loader-wrapper { text-align: center; padding: 2.5em; }
                #app-aniversariantes-es .spinner { 
                    border: 4px solid #f3f3f3; border-top: 4px solid #C86673; border-radius: 50%; 
                    width: 2.5em; height: 2.5em; animation: spin 1s linear infinite; margin: 0 auto 1em auto;
                }

                .confetti { position: fixed; width: 10px; height: 10px; z-index: 9999; animation: confettiFall 5s linear forwards; }

                /* --- ALTO CONTRASTE BLINDADO --- */
                body[class*="contrast"] #app-aniversariantes-es .lista-aniversariantes-container,
                body[class*="alto-contraste"] #app-aniversariantes-es .lista-aniversariantes-container,
                body[class*="contrast"] #app-aniversariantes-es .table-wrapper,
                body[class*="alto-contraste"] #app-aniversariantes-es .table-wrapper {
                    background-color: #000 !important; color: #fff !important;
                }

                body[class*="contrast"] #app-aniversariantes-es select,
                body[class*="alto-contraste"] #app-aniversariantes-es select {
                    background-color: #000 !important; color: #fff !important; border: 2px solid #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es .barra-controle-sticky,
                body[class*="alto-contraste"] #app-aniversariantes-es .barra-controle-sticky {
                    background-color: #222 !important; border-color: #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es .accordion-header-fake,
                body[class*="alto-contraste"] #app-aniversariantes-es .accordion-header-fake {
                    background-color: #333 !important; color: #fff !important; border: 1px solid #fff !important; border-left: 5px solid #ff0 !important;
                }
                body[class*="contrast"] #app-aniversariantes-es table.tabela-grade th,
                body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade th {
                    background-color: #333 !important; color: #ff0 !important; border: 1px solid #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es table.tabela-grade td,
                body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade td {
                    background-color: #000 !important; color: #fff !important; border: 1px solid #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es .empty-state-card,
                body[class*="alto-contraste"] #app-aniversariantes-es .empty-state-card {
                    background-color: #000 !important; color: #fff !important; border: 1px solid #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es .mensagem-box,
                body[class*="alto-contraste"] #app-aniversariantes-es .mensagem-box {
                    background-color: #222 !important; color: #fff !important; border-left-color: #ff0 !important;
                }
                body[class*="contrast"] #app-aniversariantes-es svg,
                body[class*="alto-contraste"] #app-aniversariantes-es svg {
                    fill: #ff0 !important; color: #ff0 !important;
                }
                body[class*="contrast"] #app-aniversariantes-es .empty-title,
                body[class*="alto-contraste"] #app-aniversariantes-es .empty-title,
                body[class*="contrast"] #app-aniversariantes-es .empty-text,
                body[class*="alto-contraste"] #app-aniversariantes-es .empty-text {
                    color: #fff !important;
                }
                
                body[class*="contrast"] #app-aniversariantes-es label,
                body[class*="alto-contraste"] #app-aniversariantes-es label {
                    color: #ff0 !important;
                }

                /* --- CORREÇÃO DO HOVER NO CONTRASTE --- */
                body[class*="contrast"] #app-aniversariantes-es table.tabela-grade tbody tr:hover,
                body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade tbody tr:hover {
                    background-color: #000 !important; 
                    color: #ff0 !important; 
                    border-color: #fff !important;
                }
                body[class*="contrast"] #app-aniversariantes-es table.tabela-grade tbody tr:hover td,
                body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade tbody tr:hover td {
                    background-color: #000 !important;
                    color: #ff0 !important;
                }

                /* CORREÇÃO MOBILE CONTRASTE */
                @media (max-width: 768px) {
                    
                    body[class*="contrast"] #app-aniversariantes-es table.tabela-grade td,
                    body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade td {
                        border: none !important;
                        background-color: transparent !important;
                    }
                    
                    body[class*="contrast"] #app-aniversariantes-es table.tabela-grade tr,
                    body[class*="alto-contraste"] #app-aniversariantes-es table.tabela-grade tr {
                        background-color: #000 !important;
                        border: 2px solid #fff !important;
                        box-shadow: none !important;
                    }

                    body[class*="contrast"] #app-aniversariantes-es .dia-badge,
                    body[class*="alto-contraste"] #app-aniversariantes-es .dia-badge {
                        background-color: #ff0 !important; 
                        color: #000 !important; 
                        border: 2px solid #ff0 !important;
                    }
                    
                    /* MOBILE (DESIGN DE CARTÃO - REGRAS GERAIS) */
                    #app-aniversariantes-es thead { display: none; }
                    #app-aniversariantes-es table.tabela-grade, 
                    #app-aniversariantes-es table.tabela-grade tbody { display: block; width: 100%; min-width: 0; }
                    
                    #app-aniversariantes-es table.tabela-grade tr { 
                        margin-bottom: 10px; /* Ajuste */
                        background-color: #fff;
                        border: 1px solid #e0e0e0; 
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                        display: grid;
                        grid-template-columns: 80px 1fr;
                        grid-template-rows: auto auto;
                        grid-template-areas: "date name" "date sector";
                        align-items: center;
                        padding: 10px;
                        position: relative;
                    }

                    #app-aniversariantes-es table.tabela-grade td {
                        padding: 0 !important; border: none !important;
                    }

                    #app-aniversariantes-es table.tabela-grade td:nth-child(1) { 
                        grid-area: date;
                    }
                    
                    /* BADGE ATIVO NO MOBILE */
                    #app-aniversariantes-es .dia-badge {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 60px;
                        height: 60px;
                        background-color: #eef4f7;
                        border-radius: 50%; 
                        color: #366C88; 
                        font-weight: 800;
                        font-size: 0.95em;
                        margin: 0 auto;
                    }
                    
                    #app-aniversariantes-es table.tabela-grade td:nth-child(2) { 
                        grid-area: name;
                        font-size: 1.1em; /* Ajuste leve */
                        font-weight: 700; color: #333; text-align: left; align-self: end;
                    }

                    #app-aniversariantes-es table.tabela-grade td:nth-child(3) { 
                        grid-area: sector;
                        margin-top: 2px !important; font-size: 0.9em; 
                        color: #666; text-align: left; align-self: start;
                    }

                    #app-aniversariantes-es .controle-wrapper { flex-direction: column; align-items: stretch; }
                    #app-aniversariantes-es .btn-padrao-azul { width: 100%; justify-content: center; }
                    #app-aniversariantes-es .barra-controle-sticky { top: 0px; padding: 10px; }
                }
            `;
            document.head.appendChild(styleAniversario);

            // --- LÓGICA ---
            const nomesDosMeses = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            const frasesDeParabens = [
                "🎉 Um dia fantástico e um novo ciclo repleto de alegria para os nossos aniversariantes! Parabéns!",
                "🎂 Muitas felicidades e sucesso aos nossos talentos que celebram mais um ano de vida! Parabéns!",
                "🥳 Hoje o dia é de festa! Desejamos a todos os aniversariantes muita paz, saúde e realizações!",
                "🎈 Que este novo ano de vida traga ainda mais conquistas e momentos felizes! Parabéns a todos!",
                "🎊 Um feliz aniversário para os nossos colaboradores! Que a alegria deste dia se estenda por todo o ano!"
            ];

            const todosAniversariantes = [];
            const container = document.getElementById('app-aniversariantes-es');
            
            // Leitura dos dados
            const linhasDados = container ? container.querySelectorAll('#tabela-fonte-dados tbody tr') : [];
            for (let i = 0; i < linhasDados.length; i++) {
                const linha = linhasDados[i];
                const celulas = linha.querySelectorAll('td');
                if (celulas.length >= 3) {
                    todosAniversariantes.push({
                        mes: parseInt(linha.dataset.mes, 10),
                        dia: parseInt(celulas[0].textContent.trim(), 10),
                        nome: formatarNome(celulas[1].textContent.trim()),
                        setor: celulas[2].textContent.trim()
                    });
                }
            }

            const hoje = new Date();
            const diaSemana = hoje.getDay();
            const diaMes = hoje.getDate();
            const mesAtual = hoje.getMonth() + 1;
            const dataHojeFormatada = hoje.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

            const elTextoHoje = document.getElementById('texto-titulo-hoje');
            if (elTextoHoje) elTextoHoje.textContent = `Aniversariantes de Hoje, ${dataHojeFormatada}`;
            const elDataVazio = document.getElementById('data-hoje-vazio');
            if (elDataVazio) elDataVazio.textContent = dataHojeFormatada;

            function soltarConfete() {
                const cores = ['#C86673', '#366C88', '#e0e0e0', '#FFD700'];
                const containerConfete = document.getElementById('confetti-container');
                if (!containerConfete) return;
                for (let i = 0; i < 30; i++) {
                    const confete = document.createElement('div');
                    confete.classList.add('confetti');
                    confete.style.left = Math.random() * 100 + 'vw';
                    confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                    confete.style.animationDuration = (Math.random() * 2 + 3) + 's';
                    containerConfete.appendChild(confete);
                    setTimeout(() => { confete.remove(); }, 5000);
                }
            }

            // --- FUNÇÕES AUXILIARES PARA DATAS FESTIVAS ---
            function obterSegundaFeira(d) {
                d = new Date(d);
                var day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6 : 1); // ajusta se for domingo
                return new Date(d.setDate(diff));
            }

            function obterAniversariantesPorIntervalo(inicio, fim) {
                let datasAlvo = [];
                let curr = new Date(inicio);
                while (curr <= fim) {
                    datasAlvo.push({d: curr.getDate(), m: curr.getMonth() + 1});
                    curr.setDate(curr.getDate() + 1);
                }
                // Filtra a lista principal comparando dia e mês
                return todosAniversariantes.filter(p => 
                    datasAlvo.some(t => t.d === p.dia && t.m === p.mes)
                ).sort((a,b) => {
                    // Ordenar por mês e depois por dia para viradas de ano
                    if (a.mes !== b.mes) return a.mes - b.mes;
                    return a.dia - b.dia;
                });
            }
            // ----------------------------------------------

            function exibirAniversariantesIniciais() {
                if (!container) return;
                
                let listaParaExibir = [];
                let tituloEspecial = null;
                let isModoFestivo = false;

                // --- LÓGICA DE FESTAS DE FIM DE ANO ---
                const anoAtual = hoje.getFullYear();
                const hojeMeioDia = new Date(hoje);
                hojeMeioDia.setHours(12, 0, 0, 0); // Normalizar hora para evitar problemas de fuso

                // Definição Semana Natal: Segunda da semana do dia 25 Dez
                const dataNatal = new Date(anoAtual, 11, 25);
                const inicioSemanaNatal = obterSegundaFeira(dataNatal);
                inicioSemanaNatal.setHours(0,0,0,0);
                const fimSemanaNatal = new Date(inicioSemanaNatal);
                fimSemanaNatal.setDate(inicioSemanaNatal.getDate() + 6);
                fimSemanaNatal.setHours(23,59,59,999);

                // Definição Semana Ano Novo: Segunda da semana do dia 01 Jan
                // Se estamos em Dezembro, olhamos pro Jan do próximo ano. Se estamos em Jan, olhamos pro atual.
                let anoNovoRef = new Date(anoAtual, 0, 1);
                if (hoje.getMonth() === 11) { // Se é Dezembro
                    anoNovoRef = new Date(anoAtual + 1, 0, 1);
                }
                const inicioSemanaAnoNovo = obterSegundaFeira(anoNovoRef);
                inicioSemanaAnoNovo.setHours(0,0,0,0);
                const fimSemanaAnoNovo = new Date(inicioSemanaAnoNovo);
                fimSemanaAnoNovo.setDate(inicioSemanaAnoNovo.getDate() + 6);
                fimSemanaAnoNovo.setHours(23,59,59,999);

                // Verificação
                if (hojeMeioDia >= inicioSemanaNatal && hojeMeioDia <= fimSemanaNatal) {
                    isModoFestivo = true;
                    tituloEspecial = "Aniversariantes da semana do Natal";
                    listaParaExibir = obterAniversariantesPorIntervalo(inicioSemanaNatal, fimSemanaNatal);
                } else if (hojeMeioDia >= inicioSemanaAnoNovo && hojeMeioDia <= fimSemanaAnoNovo) {
                    isModoFestivo = true;
                    tituloEspecial = "Aniversariantes da semana do Ano Novo";
                    listaParaExibir = obterAniversariantesPorIntervalo(inicioSemanaAnoNovo, fimSemanaAnoNovo);
                } else {
                    // --- MODO PADRÃO (DIA/FIM DE SEMANA) ---
                    let diasParaMostrar = [diaMes];
                    if (diaSemana === 5) { diasParaMostrar.push(diaMes + 1, diaMes + 2); }
                    listaParaExibir = todosAniversariantes.filter(p => p.mes === mesAtual && diasParaMostrar.includes(p.dia));
                }

                const divMensagem = container.querySelector('#mensagem-principal');
                const divTabela = container.querySelector('#container-tabela-hoje');
                const cardVazio = container.querySelector('#card-sem-aniversariantes');
                const tbody = container.querySelector('#tbody-hoje');

                // Atualiza Título
                if (isModoFestivo && tituloEspecial && elTextoHoje) {
                    elTextoHoje.textContent = tituloEspecial;
                } else if (!isModoFestivo && elTextoHoje) {
                    // Se não é feriado, verifica se é sexta-feira (dia 5)
                    if (diaSemana === 5) {
                        elTextoHoje.textContent = "Aniversariantes do final de semana";
                    } else {
                        elTextoHoje.textContent = `Aniversariantes de Hoje, ${dataHojeFormatada}`;
                    }
                }

                if (listaParaExibir.length > 0) {
                    const indiceDaFrase = (diaMes - 1) % frasesDeParabens.length;
                    if (divMensagem) { 
                        divMensagem.textContent = frasesDeParabens[indiceDaFrase]; 
                        divMensagem.style.display = 'block'; 
                    }
                    
                    // Passamos isModoFestivo como quarto argumento
                    if (tbody) popularTabela(tbody, listaParaExibir, true, isModoFestivo);
                    
                    if (divTabela) divTabela.style.display = 'block';
                    if (cardVazio) cardVazio.style.display = 'none';
                    setTimeout(soltarConfete, 500);
                } else {
                    if (divMensagem) divMensagem.style.display = 'none';
                    if (divTabela) divTabela.style.display = 'none';
                    if (cardVazio) cardVazio.style.display = 'block';
                }
            }

            const btnVerTodos = container ? container.querySelector('#btn-ver-todos') : null;
            const btnVoltarTopo = container ? container.querySelector('#btn-voltar-topo') : null;
            const viewInicial = container ? container.querySelector('#view-inicial') : null;
            const viewCompleta = container ? container.querySelector('#view-completa') : null;
            const seletorMes = container ? container.querySelector('#seletor-mes') : null;

            if (btnVerTodos) {
                btnVerTodos.addEventListener('click', function(e) {
                    e.preventDefault(); 
                    viewInicial.style.display = 'none';
                    viewCompleta.style.display = 'block';
                    popularSeletorDeMes();
                    atualizarTabelaCompleta();
                    window.scrollTo(0, 0);
                });
            }

            if (btnVoltarTopo) {
                btnVoltarTopo.addEventListener('click', function(e) {
                    e.preventDefault();
                    viewCompleta.style.display = 'none';
                    viewInicial.style.display = 'block';
                });
            }

            if (seletorMes) {
                seletorMes.addEventListener('change', () => {
                    const tabelaMes = container.querySelector('#container-tabela-mes');
                    const loader = container.querySelector('#loader-tabela');
                    tabelaMes.style.display = 'none';
                    loader.style.display = 'block';
                    setTimeout(() => {
                        atualizarTabelaCompleta();
                        loader.style.display = 'none';
                        tabelaMes.style.display = 'block';
                        tabelaMes.classList.remove('animate-slide-up');
                        void tabelaMes.offsetWidth; 
                        tabelaMes.classList.add('animate-slide-up');
                    }, 400);
                });
            }

            function popularSeletorDeMes() {
                if (!seletorMes) return;
                const mesesComAniversariantes = [...new Set(todosAniversariantes.map(p => p.mes))].sort((a,b) => a - b);
                seletorMes.innerHTML = '';
                mesesComAniversariantes.forEach(mesNum => {
                    const option = document.createElement('option');
                    option.value = mesNum;
                    option.textContent = nomesDosMeses[mesNum];
                    if (mesNum === mesAtual) option.selected = true;
                    seletorMes.appendChild(option);
                });
                if (!mesesComAniversariantes.includes(mesAtual) && mesesComAniversariantes.length > 0) {
                    seletorMes.value = mesesComAniversariantes[0];
                }
            }

            function atualizarTabelaCompleta() {
                if (!seletorMes) return;
                const mesSelecionado = parseInt(seletorMes.value, 10);
                const tituloDinamico = document.getElementById('titulo-dinamico-mes');
                if (tituloDinamico && mesSelecionado) {
                    tituloDinamico.textContent = 'Aniversariantes de ' + nomesDosMeses[mesSelecionado];
                }
                const aniversariantesDoMes = todosAniversariantes.filter(p => p.mes === mesSelecionado);
                aniversariantesDoMes.sort((a,b) => a.dia - b.dia);
                const tbody = container.querySelector('#tbody-mes');
                if (tbody) popularTabela(tbody, aniversariantesDoMes, false);
            }
            
            function popularTabela(tbodyElement, lista, modoFiltrado, isFestivo = false) {
                tbodyElement.innerHTML = '';
                lista.forEach(pessoa => {
                    const linha = document.createElement('tr');
                    let textoDia = pessoa.dia;
                    
                    if (modoFiltrado) {
                        if (isFestivo) {
                            // Formato DD/MM para semanas festivas
                            const d = pessoa.dia.toString().padStart(2, '0');
                            const m = pessoa.mes.toString().padStart(2, '0');
                            textoDia = `${d}/${m}`;
                        } else {
                            // Lógica padrão para dias comuns
                            if (pessoa.dia === diaMes && pessoa.mes === mesAtual) textoDia = 'Hoje';
                            else if (diaSemana === 5 && pessoa.dia === diaMes + 1 && pessoa.mes === mesAtual) textoDia = 'Sáb';
                            else if (diaSemana === 5 && pessoa.dia === diaMes + 2 && pessoa.mes === mesAtual) textoDia = 'Dom';
                        }
                    }
                    
                    // Fallback para formatação simples se textoDia ainda for numérico puro (ex: tabela mensal)
                    let diaVisual = textoDia;
                    if (!isNaN(textoDia)) {
                        diaVisual = textoDia.toString().padStart(2, '0');
                    }

                    linha.innerHTML = `<td><div class="dia-badge">${diaVisual}</div></td><td>${pessoa.nome}</td><td>${pessoa.setor}</td>`;
                    tbodyElement.appendChild(linha);
                });
            }

            function formatarNome(nome) {
                const preposicoes = ['da', 'de', 'do', 'das', 'dos', 'e'];
                return nome.toLowerCase().split(' ').map(palavra => 
                    preposicoes.includes(palavra) ? palavra : palavra.charAt(0).toUpperCase() + palavra.slice(1)
                ).join(' ');
            }

            exibirAniversariantesIniciais();

        })(); 
    </script>
</div>
