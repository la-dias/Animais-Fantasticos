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

/* SELEÇÃO DE ELEMENTOS PELO DOM */

const animais = document.getElementById('animais');
console.log(animais);
