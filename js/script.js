// Ativar links do menu
const links = document.querySelectorAll(".header-nav a");

function activateLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("active");
  }
}

links.forEach(activateLink);

// Ativar itens do orçamento
const parameters = new URLSearchParams(location.search);

function activateParameter(parameter) {
  const element = document.getElementById(parameter);

  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateParameter);

// Perguntas frequentes

const questions = document.querySelectorAll(".questions button");

function activedQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  question.setAttribute("aria-expanded", answer.classList.contains("active"));
}

function eventsQuestions(question) {
  question.addEventListener("click", activedQuestion);
}

questions.forEach(eventsQuestions);

// Galeria de bicicletas
const gallery = document.querySelectorAll(".bike-imgs img");
const galleryContainer = document.querySelector(".bike-imgs");

function changeImg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galleryContainer.prepend(img);
  }
}

function eventsGallery(img) {
  img.addEventListener("click", changeImg);
}

gallery.forEach(eventsGallery);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
