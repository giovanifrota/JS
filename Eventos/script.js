const img = document.querySelector('img');

function callback(event){
    console.log(event);
}

//img.addEventListener('click', callback);

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

//imagensLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    //console.log(event);
    console.log(this);
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);
//h1.addEventListener('click', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);

function handleKeyboard(event){
    if(event.key === 'f'){
        document.body.classList.toggle('fullscren');
    }
    console.log(event.key);
}

window.addEventListener('keudown', handleKeyboard);

function handleKeyBoard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handleKeyBoard);

const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.currentTarget);    
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
})
