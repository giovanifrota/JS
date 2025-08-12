//Retorne o url da pagina atual utilizando o objeto window
const url = window.location.href
console.log(url);
//Seleciona o primeiro elemento da pagina que 
//Possua a classe ativo
const h1 = document.querySelector('.ativo');
console.log(h1.classList);
//Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
//Retorne a largura da janela

const largura = window.innerWidth;
console.log(largura);
