//Adicione a classe ativo a todos os items do menu

const itemsMenu = document.querySelectorAll('a');

itemsMenu.forEach((item) => {
    item.classList.add('ativo');
})

console.log(itemsMenu);


//Remove a classe ativo de todos os items do menu e mantenha apenas no primeiro

itemsMenu.forEach((item) => {
    item.classList.remove('ativo');
})

itemsMenu[0].classList.add('ativo');


//Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAlt = img.hasAttribute('alt');
    console.log(img, possuiAlt);
})


//Modifique o href do link no menu

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com/');
console.log(link.href);

