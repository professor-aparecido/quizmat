const quizData = {
    numeros: [
        {
            pergunta: "Qual é a raiz quadrada de 144?",
            opcoes: ["10", "12", "14", "16"],
            respostaCorreta: "12",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA01",
            habilidadeSaeb: "H01",
            assunto: "Operações e propriedades",
            instituicao: "Maceió"
        },
        {
            pergunta: "Quanto é 7 x 8?",
            opcoes: ["54", "56", "64", "49"],
            respostaCorreta: "56",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA07",
            habilidadeSaeb: "H02",
            assunto: "Multiplicação",
            instituicao: "Maceió"
        },
        {
            pergunta: "O que é um número primo?",
            opcoes: ["Qualquer número inteiro", "Um número divisível apenas por 1 e por ele mesmo", "Qualquer número ímpar", "Um número divisível por 2"],
            respostaCorreta: "Um número divisível apenas por 1 e por ele mesmo",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA04",
            habilidadeSaeb: "H03",
            assunto: "Divisibilidade",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o valor do logaritmo de 100 na base 10?",
            opcoes: ["1", "2", "10", "100"],
            respostaCorreta: "2",
            unidade: "Números",
            ano: "3º EM",
            habilidadeBncc: "EM13MAT301",
            habilidadeSaeb: "H13",
            assunto: "Logaritmos",
            instituicao: "Maceió"
        },
        {
            pergunta: "Calcule $3^2 + 4^2$.",
            opcoes: ["7", "14", "25", "49"],
            respostaCorreta: "25",
            unidade: "Números",
            ano: "7º ano",
            habilidadeBncc: "EF07MA01",
            habilidadeSaeb: "H07",
            assunto: "Potenciação",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o resultado de 10 ÷ 2 + 3?",
            opcoes: ["5", "8", "6", "13"],
            respostaCorreta: "8",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA03",
            habilidadeSaeb: "H04",
            assunto: "Ordem das operações",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o valor de 5! (fatorial de 5)?",
            opcoes: ["5", "25", "100", "120"],
            respostaCorreta: "120",
            unidade: "Números",
            ano: "9º ano",
            habilidadeBncc: "EF09MA03",
            habilidadeSaeb: "H05",
            assunto: "Fatorial",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o menor número primo?",
    opcoes: ["0", "1", "2", "3"],
    respostaCorreta: "2",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA04",
            habilidadeSaeb: "H03",
            assunto: "Números primos",
            instituicao: "Maceió"
        },
        {
            pergunta: "O que é um número racional?",
    opcoes: ["Um número que pode ser escrito como uma fração", "Qualquer número", "Um número com uma raiz quadrada exata", "Um número que não pode ser escrito como uma fração"],
    respostaCorreta: "Um número que pode ser escrito como uma fração",
            unidade: "Números",
            ano: "8º ano",
            habilidadeBncc: "EF08MA01",
            habilidadeSaeb: "H01",
            assunto: "Conjuntos numéricos",
            instituicao: "Maceió"
        },
        {
            pergunta: "Calcule $2^3 + 3^2$.",
            opcoes: ["12", "15", "17", "25"],
            respostaCorreta: "17",
            unidade: "Números",
            ano: "7º ano",
            habilidadeBncc: "EF07MA01",
            habilidadeSaeb: "H07",
            assunto: "Potenciação",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o MMC entre 12 e 18?",
            opcoes: ["6", "18", "36", "72"],
            respostaCorreta: "36",
            unidade: "Números",
            ano: "6º ano",
            habilidadeBncc: "EF06MA06",
            habilidadeSaeb: "H08",
            assunto: "MMC",
            instituicao: "Maceió"
        }
    ],
    algebra: [
        {
            pergunta: "Qual o valor de x em 2x + 5 = 15?",
            opcoes: ["5", "10", "15", "20"],
            respostaCorreta: "5",
            unidade: "Álgebra",
            ano: "7º ano",
            habilidadeBncc: "EF07MA13",
            habilidadeSaeb: "H03",
            assunto: "Equações de 1º grau",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual é a área de um retângulo com lados 2x e 3x?",
            opcoes: ["5x", "6x", "5x²", "6x²"],
            respostaCorreta: "6x²",
            unidade: "Álgebra",
            ano: "9º ano",
            habilidadeBncc: "EF09MA06",
            habilidadeSaeb: "H09",
            assunto: "Expressões algébricas",
            instituicao: "Maceió"
        },
        {
            pergunta: "O que é uma equação do segundo grau?",
            opcoes: ["Uma equação com expoente 1", "Uma equação com expoente 2", "Uma equação com duas incógnitas", "Uma equação com duas variáveis"],
            respostaCorreta: "Uma equação com expoente 2",
            unidade: "Álgebra",
            ano: "9º ano",
            habilidadeBncc: "EF09MA11",
            habilidadeSaeb: "H10",
            assunto: "Equações de 2º grau",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o resultado de $(a + b)^2$?",
            opcoes: ["$a^2 + b^2$", "$a^2 + 2ab + b^2$", "$a^2 - 2ab + b^2$", "a + b"],
            respostaCorreta: "$a^2 + 2ab + b^2$",
            unidade: "Álgebra",
            ano: "8º ano",
            habilidadeBncc: "EF08MA07",
            habilidadeSaeb: "H08",
            assunto: "Produtos notáveis",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual a solução para $x^2 - 4 = 0$?",
            opcoes: ["x = 2", "x = -2", "x = 4", "x = 2 e x = -2"],
            respostaCorreta: "x = 2 e x = -2",
            unidade: "Álgebra",
            ano: "9º ano",
            habilidadeBncc: "EF09MA11",
            habilidadeSaeb: "H10",
            assunto: "Equações de 2º grau",
            instituicao: "Maceió"
        },
        {
            pergunta: "Resolva o sistema de equações: $$x+y=7$$ $$x-y=1$$",
            opcoes: ["x=4, y=3", "x=3, y=4", "x=5, y=2", "x=2, y=5"],
            respostaCorreta: "x=4, y=3",
            unidade: "Álgebra",
            ano: "8º ano",
            habilidadeBncc: "EF08MA16",
            habilidadeSaeb: "H09",
            assunto: "Sistemas de equações",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o valor de 3x + 2 para x = 4?",
            opcoes: ["10", "12", "14", "16"],
            respostaCorreta: "14",
            unidade: "Álgebra",
            ano: "7º ano",
            habilidadeBncc: "EF07MA13",
            habilidadeSaeb: "H03",
            assunto: "Expressões algébricas",
            instituicao: "Maceió"
        }
    ],
    geometria: [
        {
            pergunta: "Qual a soma dos ângulos internos de um triângulo?",
            opcoes: ["90°", "180°", "270°", "360°"],
            respostaCorreta: "180°",
            unidade: "Geometria",
            ano: "6º ano",
            habilidadeBncc: "EF06MA24",
            habilidadeSaeb: "H04",
            assunto: "Ângulos",
            instituicao: "Maceió"
        },
        {
            pergunta: "O que é um quadrado?",
            opcoes: ["Um quadrilátero com todos os lados iguais", "Um quadrilátero com todos os ângulos iguais", "Um quadrilátero com 4 lados iguais e 4 ângulos de 90°", "Um polígono de quatro lados"],
            respostaCorreta: "Um quadrilátero com 4 lados iguais e 4 ângulos de 90°",
            unidade: "Geometria",
            ano: "7º ano",
            habilidadeBncc: "EF07MA19",
            habilidadeSaeb: "H11",
            assunto: "Polígonos",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual a fórmula para calcular a área de um círculo?",
            opcoes: ["$\\pi r$", "$2\\pi r$", "$\\pi r^2$", "$r^2$"],
            respostaCorreta: "$\\pi r^2$",
            unidade: "Geometria",
            ano: "9º ano",
            habilidadeBncc: "EF09MA17",
            habilidadeSaeb: "H12",
            assunto: "Área de figuras planas",
            instituicao: "Maceió"
        },
        {
            pergunta: "A diagonal de um quadrado de lado 5 é?",
            opcoes: ["5", "10", "$\sqrt{25}$", "$5\\sqrt{2}$"],
            respostaCorreta: "$5\\sqrt{2}$",
            unidade: "Geometria",
            ano: "8º ano",
            habilidadeBncc: "EF08MA19",
            habilidadeSaeb: "H13",
            assunto: "Teorema de Pitágoras",
            instituicao: "Maceió"
        },
        {
            pergunta: "O que é um triângulo isósceles?",
            opcoes: ["Um triângulo com todos os lados diferentes", "Um triângulo com dois lados iguais", "Um triângulo com todos os lados iguais", "Um triângulo com um ângulo reto"],
            respostaCorreta: "Um triângulo com dois lados iguais",
            unidade: "Geometria",
            ano: "7º ano",
            habilidadeBncc: "EF07MA21",
            habilidadeSaeb: "H14",
            assunto: "Classificação de triângulos",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual o volume de um cubo com lado 3cm?",
            opcoes: ["9 cm³", "18 cm³", "27 cm³", "81 cm³"],
            respostaCorreta: "27 cm³",
            unidade: "Geometria",
            ano: "9º ano",
            habilidadeBncc: "EF09MA18",
            habilidadeSaeb: "H15",
            assunto: "Volume de sólidos",
            instituicao: "Maceió"
        }
    ],
    grandezasEMedidas: [
        {
            pergunta: "Quantos centímetros tem um metro?",
            opcoes: ["10", "100", "1000", "10000"],
            respostaCorreta: "100",
            unidade: "Grandezas e Medidas",
            ano: "6º ano",
            habilidadeBncc: "EF06MA20",
            habilidadeSaeb: "H05",
            assunto: "Sistema métrico decimal",
            instituicao: "Maceió"
        }
    ],
    probabilidadeEstatistica: [
        {
            pergunta: "Qual a probabilidade de um dado comum cair em um número par?",
            opcoes: ["1/6", "1/3", "1/2", "2/3"],
            respostaCorreta: "1/2",
            unidade: "Probabilidade e Estatística",
            ano: "8º ano",
            habilidadeBncc: "EF08MA22",
            habilidadeSaeb: "H06",
            assunto: "Cálculo de probabilidade",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual a média dos números 2, 4 e 6?",
            opcoes: ["2", "4", "6", "12"],
            respostaCorreta: "4",
            unidade: "Probabilidade e Estatística",
            ano: "7º ano",
            habilidadeBncc: "EF07MA33",
            habilidadeSaeb: "H16",
            assunto: "Média",
            instituicao: "Maceió"
        },
        {
            pergunta: "Qual a moda dos números 2, 3, 3, 5, 6?",
            opcoes: ["2", "3", "4", "5"],
            respostaCorreta: "3",
            unidade: "Probabilidade e Estatística",
            ano: "8º ano",
            habilidadeBncc: "EF08MA25",
            habilidadeSaeb: "H17",
            assunto: "Moda",
            instituicao: "Maceió"
        }
    ]
};

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

function iniciarQuiz() {
    filterContainer.style.display = "none";
    quizContainer.style.display = "block";
    quizActiveContent.style.display = "block";
    quizFinalScreen.style.display = "none";
    
    // Pega os valores dos filtros
    const unidadeEscolhida = unidadeOptions.querySelector('.filter-button.active').dataset.value;
    const anoEscolhido = anoOptions.querySelector('.filter-button.active').dataset.value;
    const busca = buscaInput.value.trim().toLowerCase();

    // Reúne todas as questões em um único array
    let todasAsQuestoes = [];
    Object.values(quizData).forEach(arr => todasAsQuestoes.push(...arr));
    
    // Filtra as questões com base nas opções
    let questoesBase = todasAsQuestoes.filter(questao => {
        const porUnidade = unidadeEscolhida === 'todos' || questao.unidade.toLowerCase() === unidadeEscolhida;
        const porAno = anoEscolhido === 'todos' || questao.ano.toLowerCase() === anoEscolhido.toLowerCase();
        
        const porBusca = busca === '' || questao.assunto.toLowerCase().includes(busca) || questao.habilidadeBncc.toLowerCase().includes(busca) || questao.habilidadeSaeb.toLowerCase().includes(busca);
        
        return porUnidade && porAno && porBusca;
    });

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
    const textoSemLetra = opcaoSelecionada.trim().replace(/^[A-Z]\s*/, '');
    
    const respostaFoiCorreta = textoSemLetra === respostaCorreta.trim();
    
    document.querySelectorAll(".option-button").forEach(btn => btn.disabled = true);

    const botaoCorreto = Array.from(document.querySelectorAll(".option-button")).find(btn => {
        const textoBotao = btn.textContent.trim().replace(/^[A-Z]\s*/, '');
        return textoBotao === respostaCorreta.trim();
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
        suaResposta: textoSemLetra,
        respostaCorreta: respostaCorreta,
        correto: respostaFoiCorreta
    });

    confirmButton.style.display = "none";
    proximoBtn.style.display = "block";
}

function exibirResultadoFinal() {
    quizActiveContent.style.display = "none";
    quizFinalScreen.style.display = "block";
    finalScoreText.textContent = `Pontuação: ${pontuacao} de ${questoesFiltradas.length}.`;
    
    exibirGabarito();
}

function exibirGabarito() {
    let gabaritoHtml = '<div class="gabarito-container">';
    gabaritoHtml += '<h3>Gabarito</h3>';

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
    quizContainer.style.display = "none";
    filterContainer.style.display = "flex";
});
