//Crei um objeto com os seus dados pessoais
//Deve possui pelo menos duas prpriedades nome e sobrenome

var pessoa = {
    nome:'Giovani',
    sobrenome:'Frota'
}

//Crie um metodo no objeto anterior, que mostre o seu nome complet

var pessoa = {
    nome:'Giovani',
    sobrenome:'Frota',
    nomeCompleto(){
        return `${this.nome} + ${this.sobrenome}`
    }
}

//Modifique o valor da propriedade preco para 3000

var carro = {
    preco:1000,
    portas:4,
    marca:'Audi',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'Labrador',
    cor:'Preto',
    idade: 10,
   latir(pessoa){
    if(pessoa === 'homem'){
        return 'Latir';
    }else{
        return 'nada';
    }
   }
}

console.log(cachorro.LatirAoVerHomem());