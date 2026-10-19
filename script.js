const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior animal do nosso planeta que habita os oceanos?",
        alternativas: [
            {
                texto: "Baleia-azul",
                afirmacao: "Você sabia que a baleia-azul é o maior animal que já existiu na Terra!"
            },
            {
                texto: "Tubarão-baleia",
                afirmacao: "Você considerou o tubarão-baleia, que é o maior peixe dos oceanos, mas não o maior animal."
            }
        ]
    },
    {
        enunciado: "Qual organismo é responsável pela maior parte da produção do oxigênio da Terra?",
        alternativas: [
            {
                texto: "Algas e Fitoplâncton marinho",
                afirmacao: "Reconheceu a importância do fitoplâncton marinho como o verdadeiro pulmão do planeta."
            },
            {
                texto: "Florestas tropicais como a Amazônia",
                afirmacao: "Apostou nas florestas tropicais, embora a maior parte do oxigênio venha dos oceanos."
            }
        ]
    },
    {
        enunciado: "A qual grupo de seres vivos pertencem os corais?",
        alternativas: [
            {
                texto: "Animais",
                afirmacao: "Sabe que os corais são animais invertebrados coloniais (cnidários)."
            },
            {
                texto: "Plantas",
                afirmacao: "Aachou que corais fossem plantas devido ao seu formato fixo no fundo do mar."
            }
        ]
    },
    {
        enunciado: "Como a grande maioria dos peixes respira sob a água?",
        alternativas: [
            {
                texto: "Através das brânquias (guelras)",
                afirmacao: "Compreende como as brânquias extraem o oxigênio dissolvido na água."
            },
            {
                texto: "Através de pulmões internos",
                afirmacao: "Acreditou que peixes tivessem pulmões como os mamíferos aquáticos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado da sua jornada pelos oceanos:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}

mostraPergunta();
