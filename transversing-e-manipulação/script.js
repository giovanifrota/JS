// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// h1.innerHTML = '<p>Novo Titulo</p>'

// //console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children);

// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const Titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// //contato.replaceChild(mapa, Titulo);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);


const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

faq.appendChild(cloneh1);    