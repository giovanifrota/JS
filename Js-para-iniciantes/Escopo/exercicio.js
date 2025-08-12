//POr que motivo o codigo abaixo retorna com erros?
{
var cor = 'preto';
const marca = 'Fiat';
let portas = 4;
console.log(cor, marca, portas);
}


//R: Porque esta chamando no console a variavel var e nao cor;

//Como corrigir o erro abaixo?

const dois = 2;
function somarDOis(x){
    return x + dois;
}
function dividirDois(x){
    return x / dois;
}

somarDOis(4);
dividirDois(6);

//R: Criando uma outra variavel chamada dois na function dividirDois

//O que fazer para o total retornar 500

var numero = 50;

for(let numero = 0; numero < 10; numero++){
    console.log(numero);
}

const total = 10 * numero;
console.log(total);