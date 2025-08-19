//Verifique a distancia da primeira imagem
//em relação ao topo da página 

const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

//Retorne a soma da largura de todas as imagens

function somaImagens(){
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;  
    })
    console.log(soma);
}

window.onload = function(){
    somaImagens();
}


//Verifique se os links da página possuem
//o minimo recomendado para telas utilizadas
//com o dedo. (48px/48px de acordo com o google)

const link = document.querySelectorAll('a');

link.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth >= 48 && linkHeight >= 48){
        console.log(link, 'Possui Acessibilidade');
    }else{
        console.log(link, 'Não Possui Boa acessibilidade');
    }
})

console.log(link);


//Se o browser for menos que 720px
//adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}