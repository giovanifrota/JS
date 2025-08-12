//Crie uma função para verificar se um valor é Truthy;

function Verdadeiro(valor){
    return !! valor;
}

//Crie uma função matematica que retorne o perimetro de um quadrado 
//Lembrando: perimetro é a soma dos quatro lados do quadrado

function perimetro(lados){
    return lados + lados + lados + lados;
}

console.log(perimetro(2));

//Crie uma função que retorne o seu nome completo 
//ela deve possuir os parametros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('giovani', 'frota'));

//Crie uma função que verifica se o numero é par 

function imparOuPar(numero){
    if(numero % 2 == 0){
        return 'Esse valor é par';
    }else{
        return 'Esse valor é impar';
    }
}

console.log(imparOuPar(1));

//Crie uma finção que retorna o tipo de 
//dado do argumento passado nela (typeof)

function tipoDeDado(dado){
    return typeof dado;
}

console.log(tipoDeDado('oi'));

//addEventListener é uma função nativa do JavaScript
//o primeiro parametro é o evento que ocorre e o segundo o Callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scrool' ocorrer

function nomeCompleto2(nome, sobrenome){
        return `${nome} ${sobrenome}`;
}

addEventListener('click', function(event){
    console.log(nomeCompleto2('giovani', 'frota'));
});

//Corrija o erro abaixo
//function precisaVisitar(paisesVisitados){
//  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`
//}
//precisaVisitar(20);
//jaVisitei(20);

function jaVisitei(jaVisitados){
    return jaVisitados;
}

function precisaVisitar(paisesVisitados, totalPaises){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisaVisitar(20,50));
console.log(jaVisitei(20));
