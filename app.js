let numerosSorteados = new Array();

function sortear() {
  const qtdeNumeros = parseInt(document.getElementById("quantidade").value);
  const min = parseInt(document.getElementById("de").value);
  const max = parseInt(document.getElementById("ate").value);

  let numAleatorio;

  for (let i = 0; i < qtdeNumeros; i++) {
    numAleatorio = gerarNumAleatorio(min, max);
    numerosSorteados.push(numAleatorio);
  }

  mostrarNumeros();
  desabilitarBotaoSortear();
  habilitarBotaoReiniciar();
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";

  numerosSorteados = new Array();

  habilitarBotaoSortear();
  desabilitarBotaoReiniciar();
}

function gerarNumAleatorio(de, ate) {
  let num;

  num = Math.floor(Math.random() * (ate - de) + de);

  while (numerosSorteados.includes(num)) {
    num = Math.floor(Math.random() * (ate - de) + de);
  }

  return num;
}

function mostrarNumeros() {
  const campoResultado = document.getElementById("resultado");
  campoResultado.innerHTML =
    "<p class='texto__paragrafo'>Números sorteados: " +
    numerosSorteados +
    "</p>";
}

function habilitarBotaoReiniciar() {
  const botao = document.getElementById("btn-reiniciar");
  botao.classList.remove("container__botao-desabilitado");
  botao.classList.add("container__botao");
}

function desabilitarBotaoReiniciar() {
  const botao = document.getElementById("btn-reiniciar");

  botao.classList.remove("container__botao");
  botao.classList.add("container__botao-desabilitado");
}

function habilitarBotaoSortear() {
  const botao = document.getElementById("btn-sortear");
  botao.classList.remove("container__botao-desabilitado");
  botao.classList.add("container__botao");
}

function desabilitarBotaoSortear() {
  const botao = document.getElementById("btn-sortear");
  botao.classList.remove("container__botao");
  botao.classList.add("container__botao-desabilitado");
}

console.log(numerosSorteados);
