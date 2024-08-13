const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe como surgiu o SURF?",
        alternativas: [
            {
                texto: "Não faço ideia :(",
                afirmacao: "Você não manja sobre o surf."
            },
            {
                texto: "Lógico,o esporte surgiu quando pescadores perceberam que usando uma tábua de madeira, era mais fácil chegar à margem do mar",
                afirmacao: "Você manja sobre o surf."
            }
        ]
    },
    {
        enunciado: "Quantos anos tem o surf?",
        alternativas: [
            {
                texto: "Mais de 50",
                afirmacao: "E conhece um pouco da historia."
            },
            {
                texto: "Menos de 50",
                afirmacao: "E não conhece sobre historia."
            }
        ]
    },
    {
        enunciado: "Você ja surfou?",
        alternativas: [
            {
                texto: "claro ;)",
                afirmacao: "Além disso,você é foda "
            },
            {
            
                texto: "Não,Tenho medo",
                afirmacao: "Além disso,você é um cagão "
            }
        ]
    },
    {
        enunciado: "Quando o surf virou esporte Olimpico?",
        alternativas: [
            {
                texto: "2016",
                afirmacao: "e também um atleta "
            },
            {
                texto: "2021",
                afirmacao: "e também um sendentario "
            }
        ]
    },
    {
        enunciado: "Quem deteem a maior nota do surf Olimpico? ",
        alternativas: [
            {
                texto: "Kanoa Igarashi",
                afirmacao: "que não conhece nem seu próprio país"
            },
            {
                texto: "Gabriel Medina",
                afirmacao: "que conhece sobre o esporte no Brasil"
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
