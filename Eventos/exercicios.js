//Quando o usuario clicar nos links internos do site,
//adicione a classe ativo ao item clicado e remova dos
//demais itens caso eles possuam a mesma. Previna
//o comportamento padrão desses links

const links = document.querySelectorAll('a');

function vericarClasses(event){
    event.preventDefault();

    links.forEach((link) => {
        link.classList.remove('ativo');
    });
    
    event.currentTarget.classList.add('ativo');
}

links.forEach((link) => {
    link.addEventListener('click',vericarClasses);
})
//Selecione todos os elementos do site começando a partir do body,
//ao clique mostre exatamente quais elementos estao sendo clicados

const todosElementos = document.querySelectorAll('body *');

function elementosClicados(event){
    console.log(event.currentTarget);//apenas trocar aqui pelo remove no lugar do console;
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', elementosClicados)
})


//Utilizando o codigo anterior, ao inves de mostrar no console,
//remova o elemento que esta sendo clicado, o metodo remove() remove um elemento



//Se o usuario clicar na tela (t), aumente todo o texto do site.

function clicarNoT(event){
    console.log(event.key)
    if(event.key === 't'){
        document.documentElement.classList.toggle('textoMaior');
    }
}

window.addEventListener('keydown', clicarNoT);