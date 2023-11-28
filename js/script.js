// ATIVAR LINKS MENU
const links = document.querySelectorAll(".header-menu a");
console.log(links);

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITEMS ORÇAMENTO
// new URLSearchParams() já pega os parâmetros do search dentro do window.location. Retorna uma array com os parâmetros.
const parametros = new URLSearchParams(location.search);

// função do forEach para percorrer cada "parametro" dentro de "parametros"
function ativarProduto(parametro) {
  // pega o elemento que tiver a ID de (parametro) e coloca na variavel elemento
  const elemento = document.getElementById(parametro);
  // verifica se o elemento existe, pra ele não checkar algum NULL e dar erro no JS
  if (elemento) {
    elemento.checked = true;
    console.log(elemento);
  }
}

parametros.forEach(ativarProduto);

console.log(parametros);


// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);
  // define um valor novo para o atributo aria expanded na pergunta. (o valor está contido na const "ativa")
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width:1000px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animação
if (window.SimpleAnime) {
  new window.SimpleAnime();
}
