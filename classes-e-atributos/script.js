const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('ativo');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')){
    menu.classList.add('Possui-azul');
}else{
    menu.classList.add('nao-possui-azul');
}

//console.log(menu.classList);

const animais  = document.querySelector('.animais');

console.log(animais.attributes.id);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'É uma Raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);

console.log(srcImg);

const carro = {
    portas: 4,
    andar(km){
        console.log(`Andou ${km}`);
    }
}