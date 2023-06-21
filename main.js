// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnCookie = document.querySelector("#btnClosedCookie");
const btnAnotherCookie = document.querySelector("#btnAnotherCookie");

const phrases = [
  'Uma lição indolor não tem sentido. Aquele que nada sacrifica, nada é capaz de obter.',
  'Quando você é ferido, consegue dormir tranquilo. Quando fere, não.',
  'Transformar o simples em complicado é fácil, porém transformar o complicado em simples exige criatividade.',
  'Sempre existem coisas mais importantes do que sonhos.',
  'O impossível não é impossível. Sua própria existência é a prova disso.',
  'Não fique forte para matar alguém que odeia, mas para proteger alguém que ama.',
  'Não compense na ira o que lhe falta na razão.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Não importa o quanto o vento sopre, a montanha jamais se curva diante dele.',
  'Um grão de arroz pode virar a balança. Uma única pessoa pode ser a diferença entre a vitória e a derrota.',
  'O fracasso é apenas uma oportunidade de começar de novo. Porém, desta vez, com mais sabedoria.',
  'Orgulho não é o oposto de vergonha, mas sua fonte. A humildade é o único antídoto para a vergonha.',
  'O invejoso adoece quando seu vizinho passa bem.',
  'O silêncio é de ouro e muitas vezes é resposta.',
  'Não espere por uma crise para descobrir o que é importante em sua vida.',
  'Um amigo de todos é um amigo de ninguém.',
  'Palavras podem quebrar o coração de alguem em vários pedaços, mas elas também podem colocá-los no lugar.',
  'Corra para o resgate de alguém com amor e a paz seguirá.',
  'Falsas lágrimas são capazes de machucar outras pessoas. Falsos sorrisos são capazes de machucar a si mesmo.',
  'Você pode morrer a qualquer momento, mas viver requer coragem.',
  'Você não conhece as pessoas, você conhece apenas o que elas permitem que você veja.',
  'As vezes as questões são complicadas e as respostas são simples.',
]

let randomPhrase = document.querySelector("#randomPhrase")
let generateRandomPhrase

// Eventos
btnCookie.addEventListener('click', generatePhrase)
btnAnotherCookie.addEventListener('click', toggleScreen)
document.addEventListener('keydown', pressEnterKey)

// Funções
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function generatePhrase() {
  toggleScreen()
  generateRandomPhrase = Math.round(Math.random()*(phrases.length))
  randomPhrase.innerText = phrases[generateRandomPhrase]
}

function anotherCookie(event) {
  event.preventDefault()
  toggleScreen()
}

function pressEnterKey(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    toggleScreen()
  }
}