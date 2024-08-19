const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const caixaResultado1 = document.querySelector(".caixa-principal");

const perguntas = [
    {
        enunciado: "Você costuma ouvir música todos os dias?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "Não ouve música todos os dias. "
            },
            {
                texto: "Sim é maravilhoso!",
                afirmacao: "Ouve música todos os dias."
            }
        ]
    },
    {
        enunciado: "Você sabia que LIBRAS é somente a lingua de sinais do Brasil?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Muitas pessoas acreditam que LIBRAS é global, sendo que é uma lingua brasileira de sinais, tendo cada país a sua própria língua de sinais, como exemplo o Estados Unidos que tem a ASL (American Sign Lenguage"
            },
            {
                texto: "Sim",
                afirmacao: "Poucas pessoas sabem dessa afirmação, sendo importante passar para que mais pessoas saibam, pois assim como na língua falada temos idiomas baseados em nossa história e cultura, na língua de sinais é a mesma coisa, em cada país há uma cultura diferente, logo, há sinais diferentes."
            }
        ]
    },
    {
        enunciado: "funk é música?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "É uma poluição sonora. "
            },
            {
                texto: "Sim!",
                afirmacao: "Gosta de funk."
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
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();