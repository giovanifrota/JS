const animais = document.getElementById('animais');
console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection.length);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUL = document.querySelector('ul');
console.log(primeiraUL);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const grdiSectionNode = document.querySelectorAll('.grid-selection');

primeiraUL.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(grdiSectionNode[0]);

grdiSectionNode.forEach(function(item,index){
    console.log(index);
})

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
})