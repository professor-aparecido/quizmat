// Referências aos elementos do HTML
const filterContainer = document.getElementById("filter-container");
const unidadeOptions = document.getElementById("unidade-options");
const anoOptions = document.getElementById("ano-options");
const buscaInput = document.getElementById("busca-input");
const startButton = document.getElementById("start-quiz-button");

const quizContainer = document.getElementById("quiz-container");
const quizActiveContent = document.getElementById("quiz-active-content");
const quizFinalScreen = document.getElementById("quiz-final-screen");
const finalScoreText = document.getElementById("final-score-text");
const finalAnswerKey = document.getElementById("final-answer-key");
const restartButton = document.getElementById("restart-button");

const perguntaEl = document.getElementById("quiz-question");
const opcoesEl = document.getElementById("quiz-options");
const resultadoEl = document.getElementById("quiz-result");
const proximoBtn = document.getElementById("next-button");
const confirmButton = document.getElementById("confirm-button");
const perguntaNumeroEl = document.getElementById("quiz-question-number");

// Referências aos metadados do quiz
const metaUnidade = document.getElementById("meta-unidade");
const metaAno = document.getElementById("meta-ano");
const metaBncc = document.getElementById("meta-bncc");
const metaSaeb = document.getElementById("meta-saeb");
const metaAssunto = document.getElementById("meta-assunto");
const metaInstituicao = document.getElementById("meta-instituicao");

let perguntaAtualIndex = 0;
let pontuacao = 0;
let questoesFiltradas = [];
let respostasUsuario = [];
let quizData = {}; // Objeto que armazena as questões de cada unidade

// Funções para som de ACERTO (geradas via Web Audio API)
function somAcerto(){
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const t=audioCtx.currentTime;
    const g=audioCtx.createGain();
    g.gain.setValueAtTime(0.0001,t);
    g.gain.exponentialRampToValueAtTime(0.18,t+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001,t+0.35);
    const o1=audioCtx.createOscillator();
    const o2=audioCtx.createOscillator();
    o1.type="sine"; o2.type="sine";
    o1.frequency.setValueAtTime(660,t);
    o2.frequency.setValueAtTime(880,t+0.02);
    o1.connect(g); o2.connect(g); g.connect(audioCtx.destination);
    o1.start(t); o2.start(t+0.36);
    o1.stop(t+0.36); o2.stop(t+0.36);
}

// Função para som de ERRO (gerada via Web Audio API)
function somErro() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime;
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.01, t);
    gainNode.gain.exponentialRampToValueAtTime(0.1, t + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
    const osc = audioCtx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, t);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.2);
}

// NOVA FUNÇÃO: Normaliza uma string para comparação
function normalizeString(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/º/g, 'o').replace(/ /g, '');
}

// FUNÇÃO PARA EMBARALHAR: algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Eventos de clique nos botões de filtro
unidadeOptions.addEventListener("click", (e) => handleFilterClick(e, unidadeOptions));
anoOptions.addEventListener("click", (e) => handleFilterClick(e, anoOptions));

function handleFilterClick(event, container) {
    if (event.target.classList.contains('filter-button')) {
        container.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
}

// Evento para o botão Iniciar
startButton.addEventListener("click", iniciarQuiz);

// Evento para o botão Próxima Pergunta
proximoBtn.addEventListener("click", () => {
    perguntaAtualIndex++;
    if (perguntaAtualIndex < questoesFiltradas.length) {
        carregarPergunta();
        proximoBtn.style.display = "none";
    } else {
        exibirResultadoFinal();
    }
});

// Evento para o botão Confirmar Resposta
confirmButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".option-button.selected");
    if (selectedOption) {
        verificarResposta(selectedOption.textContent, selectedOption);
    } else {
        alert("Por favor, selecione uma opção.");
    }
});

async function iniciarQuiz() {
    filterContainer.style.display = "none";
    quizContainer.style.display = "block";
    quizActiveContent.style.display = "block";
    quizFinalScreen.style.display = "none";
    
    // Pega os valores dos filtros
    const unidadeEscolhida = unidadeOptions.querySelector('.filter-button.active').dataset.value;
    const anoEscolhido = anoOptions.querySelector('.filter-button.active').dataset.value;
    const busca = buscaInput.value.trim().toLowerCase();

    let todasAsQuestoes = [];
    if (unidadeEscolhida === 'todos') {
        const unidades = ["numeros", "algebra", "geometria", "grandezasemedidas", "probabilidadeeestatistica"];
        for (const unidade of unidades) {
            try {
                if (!quizData[unidade]) {
                    const response = await fetch(`data/${unidade}.json`);
                    quizData[unidade] = await response.json();
                }
                todasAsQuestoes.push(...quizData[unidade]);
            } catch (error) {
                console.error(`Erro ao carregar questões de ${unidade}:`, error);
                alert(`Erro ao carregar o quiz de ${unidade}. Por favor, tente novamente.`);
                filterContainer.style.display = "flex";
                quizContainer.style.display = "none";
                return;
            }
        }
    } else {
        try {
            if (!quizData[unidadeEscolhida]) {
                const response = await fetch(`data/${unidadeEscolhida}.json`);
                quizData[unidadeEscolhida] = await response.json();
            }
            todasAsQuestoes.push(...quizData[unidadeEscolhida]);
        } catch (error) {
                console.error(`Erro ao carregar questões de ${unidadeEscolhida}:`, error);
                alert(`Erro ao carregar o quiz de ${unidadeEscolhida}. Por favor, tente novamente.`);
                filterContainer.style.display = "flex";
                quizContainer.style.display = "none";
                return;
        }
    }
    
    // Filtra as questões com base nas opções
    let questoesBase = todasAsQuestoes.filter(questao => {
        const porUnidade = unidadeEscolhida === 'todos' || normalizeString(questao.unidade) === normalizeString(unidadeEscolhida);
        const porAno = anoEscolhido === 'todos' || normalizeString(questao.ano) === normalizeString(anoEscolhido);
        
        const porBusca = busca === '' || questao.assunto.toLowerCase().includes(busca) || questao.habilidadeBncc.toLowerCase().includes(busca) || questao.habilidadeSaeb.toLowerCase().includes(busca);
        
        return porUnidade && porAno && porBusca;
    });

    // Embaralha a lista antes de selecionar as questões
    shuffleArray(questoesBase);

    // Limita o número de questões para 10
    questoesFiltradas = questoesBase.slice(0, 10);
    
    if (questoesFiltradas.length === 0) {
        alert("Nenhuma questão encontrada com esses filtros. Por favor, tente outra combinação.");
        filterContainer.style.display = "flex";
        quizContainer.style.display = "none";
        return;
    }
    
    perguntaAtualIndex = 0;
    pontuacao = 0;
    respostasUsuario = [];
    carregarPergunta();
}

function carregarPergunta() {
    resultadoEl.textContent = "";
    opcoesEl.innerHTML = "";
    
    confirmButton.style.display = "block";
    proximoBtn.style.display = "none";

    const perguntaAtual = questoesFiltradas[perguntaAtualIndex];

    perguntaNumeroEl.textContent = `Questão ${perguntaAtualIndex + 1} de ${questoesFiltradas.length}`;
    
    metaUnidade.textContent = perguntaAtual.unidade;
    metaAno.textContent = perguntaAtual.ano;
    metaBncc.textContent = perguntaAtual.habilidadeBncc;
    metaSaeb.textContent = perguntaAtual.habilidadeSaeb;
    metaAssunto.textContent = perguntaAtual.assunto;
    metaInstituicao.textContent = perguntaAtual.instituicao;

    perguntaEl.innerHTML = perguntaAtual.pergunta;

    const letras = ['A', 'B', 'C', 'D', 'E', 'F'];

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.classList.add("option-button");
        
        button.dataset.valorOpcao = opcao;

        const bulletSpan = document.createElement("span");
        bulletSpan.classList.add("bullet");
        bulletSpan.textContent = letras[index];

        const textSpan = document.createElement("span");
        textSpan.innerHTML = opcao;

        button.appendChild(bulletSpan);
        button.appendChild(textSpan);
        
        opcoesEl.appendChild(button);
        
        button.addEventListener("click", () => {
            document.querySelectorAll(".option-button").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
    });

    renderizarLatex();
}

function renderizarLatex() {
    MathJax.typesetPromise();
}

function verificarResposta(opcaoSelecionada, button) {
    const perguntaAtual = questoesFiltradas[perguntaAtualIndex];
    const respostaCorreta = perguntaAtual.respostaCorreta;
    
    const suaResposta = button.dataset.valorOpcao;
    
    const respostaFoiCorreta = suaResposta === respostaCorreta;
    
    document.querySelectorAll(".option-button").forEach(btn => btn.disabled = true);

    const botaoCorreto = Array.from(document.querySelectorAll(".option-button")).find(btn => {
        return btn.dataset.valorOpcao === respostaCorreta;
    });

    if (respostaFoiCorreta) {
        pontuacao++;
        button.classList.add('correto-quiz');
        somAcerto();
    } else {
        button.classList.add('errado-quiz');
        if (botaoCorreto) {
            botaoCorreto.classList.add('correto-quiz');
        }
        somErro();
    }
    
    respostasUsuario.push({
        pergunta: perguntaAtual.pergunta,
        suaResposta: suaResposta,
        respostaCorreta: respostaCorreta,
        correto: respostaFoiCorreta
    });

    // Se a pergunta atual é a última, exibe a tela de resultado final
    if (perguntaAtualIndex === questoesFiltradas.length - 1) {
        exibirResultadoFinal();
    } else {
        // Caso contrário, prepara para a próxima pergunta
        confirmButton.style.display = "none";
        proximoBtn.style.display = "block";
    }
}

function exibirResultadoFinal() {
    quizActiveContent.style.display = "none";
    quizFinalScreen.style.display = "block";
    finalScoreText.textContent = `Pontuação: ${pontuacao} de ${questoesFiltradas.length}.`;
    
    exibirGabarito();
}

function exibirGabarito() {
    let gabaritoHtml = '<div class="gabarito-container">';
    // Título "Gabarito" removido
    
    respostasUsuario.forEach((item, index) => {
        const statusClass = item.correto ? 'correto' : 'incorreto';
        gabaritoHtml += `
            <div class="gabarito-item ${statusClass}">
                <div class="gabarito-header">
                    <span class="gabarito-icon"></span>
                    <p><strong>Questão ${index + 1}:</strong> ${item.pergunta}</p>
                </div>
                <p><strong>Sua resposta:</strong> ${item.suaResposta}</p>
                <p><strong>Resposta Correta:</strong> ${item.respostaCorreta}</p>
            </div>
        `;
    });
    
    gabaritoHtml += '</div>';
    finalAnswerKey.innerHTML = gabaritoHtml;
    renderizarLatex();
}

// Evento para o botão de reinício
restartButton.addEventListener("click", () => {
    buscaInput.value = ""; // Limpa o campo de busca
    quizContainer.style.display = "none";
    filterContainer.style.display = "flex";
});
