//Retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

//Retorne   no console apenas as imagens que começaram com a palavra imagem

const imagensImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensImg);

//Selecione todas as linhas internas (onde o href começa com #)

const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

//Selecione o primeiro h2 dentro de .animais- descrição

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2.innerHTML);

//Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1])