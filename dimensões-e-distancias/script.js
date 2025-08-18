const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);
console.log(height);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();


console.log(h2rect);
console.log(h2left);

if(h2rect.top < 0){
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth, //pega a janela inteira incluindo o console
    window.outerHeight,//Mesma coisa do outerWIdth
    window.pageYOffset,//distancia total do scroll horizontal
)

const small = window.matchMedia('(max-width: 600px)').matches;

if(small){
    console.log('Usuario mobile');
}else{
    console.log('Usuario Desktop');
}

console.log(small);