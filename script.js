/* const menu = document.querySelectorAll('.menu a');


menu.forEach((x) => x.classList.add("ativo"))
console.log(menu)



// ---------

menu.forEach((x) => x.classList.remove("ativo"))
menu[0].classList.add("ativo")


// ----------

const img = document.querySelectorAll('img')
img.forEach((x) => console.log(x, x.hasAttribute('alt')))



// ---------

const linkEx = document.querySelector('a[href^=http]');
linkEx.setAttribute('href', 'https://www.google.com');
*/

/*const menu = document.querySelector('img');

console.log(menu.offsetTop)
console.log(menu.getBoundingClientRect())


/*
//---
function somaImagens(){
const imgs = document.querySelectorAll('img')
let soma = 0
imgs.forEach((imagem) => {
  soma += imagem.offsetWidth
 
})
console.log(soma)
}
window.onload = function(){
  somaImagens();
}




//------------

const Links = document.querySelectorAll('a')
Links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
 
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')

  }


})


//------

const browserMobile = window.matchMedia('(max-width: 720px)').matches
if (browserMobile) {
  const MenuMobile = document.querySelector('.menu')
  MenuMobile.classList.add('menu-mobile');
}*/

/* EVENTS */

/*
const linksInternos = document.querySelectorAll('a[href^="#"]');
function mexerNoLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => link.classList.remove('ativo'))
  event.currentTarget.classList.add('ativo')  
}

linksInternos.forEach((link) => { link.addEventListener('click', mexerNoLink);})
                                            
//------------

const todosElementos = document.querySelectorAll('body *');
function showElement(evento) {
  console.log(evento.currentTarget)
}

todosElementos.forEach((elemento) => elemento.addEventListener('click', showElement))

*/

///////////////////////////////////
/* SELEÇÃO DE ELEMENTOS PELO DOM */
///////////////////////////////////

//const animais = document.getElementById('animais');
//console.log(animais);

//OBS: getElementsByClassName e getElementsByTagName a lista roda ao Vivo. Se houver alteração, ela será atualizada.

//const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection[1]);

//const primeiraLi = document.querySelector('li');
//console.log(primeiraLi);

//const primeiraUl = document.querySelector('ul');
//console.log(primeiraUl);

//const linkInterno = document.querySelector('[href^="#"]');
//console.log(linkInterno);

//OBS: QuerySelectorAll trás uma nodelist, que é arraylike, porém estática; Ela não se atualiza.

//const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg[0]);

//const titulo = document.querySelector('.titulo');
//const gridSectionHTML = document.getElementsByClassName('grid-section');
//const gridSectionNode = document.querySelectorAll('.grid-section');

//titulo.classList.add('grid-section');

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

//Array-Like são parecidas com Arrays, mas não são Arrays.

//const gridSection = document.querySelectorAll('.grid-section');

//gridSection.forEach(function (gridItem, index, array) {
//gridItem.classList.add('azul');
//console.log(index);
//console.log(array);
//});

//Exercícios DOM//

/*
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensImg = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagensImg);

// Selecione todos os links internos (onde o href começa com #)
const linksInternoss = document.querySelectorAll('[href^="#"]');
console.log(linksInternoss);

// Selecione o primeiro h2 dentro de .animais-descricao
const oPrimeiroH2 = document.querySelector('.animais-descricao h2');
console.log(oPrimeiroH2);

// Selecione o último p do site
const oUltimoP = document.getElementsByTagName('p');
console.log(oUltimoP[oUltimoP.length - 1]);
*/
