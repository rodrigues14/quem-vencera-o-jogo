const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const inputPergunta1 = document.querySelector("#inputPergunta1")

const respostas = [
  "Certeza!",
  "Com facilidade.",
  "Com dificuldade.",
  "Vai ter goleada, mas não vou falar pra quem.",
  "Vai dar empate",
  "Seu time vai golear!",
  "Empate!",
  "Vai ganhar!",
  "Jogo difícil, mas seu time vai ganhar!",
  "Mais 3 pontos!",
  "Seu time vai perder!",
]

function verificar() {


  if (inputPergunta.value == "") {
    alert("Digite os dois times")
    return
  }

  if (inputPergunta1.value == "") {
    alert("Digite os dois times")
    return
  }

  if (inputPergunta.value == inputPergunta1.value) {
    alert("Você escreveu o mesmo time nas duas opções")
    return
  }

  const pergunta = "<div>" + inputPergunta.value + " x " + inputPergunta1.value + "</div>"

  // gerando um número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]


}

