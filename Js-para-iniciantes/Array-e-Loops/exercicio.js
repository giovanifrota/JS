//Crie uma array com os anos que o brasil ganhou a copa 
//1959, 1962, 1970, 1994, 2002

var ganhouCopa = [1959, 1962, 1970, 1994, 2002];


//Interaja com array utilizando um loop, para mostrar 
//no console a seguinte mensagem; 'O brasil ganhou a copa de ${ano}';

ganhouCopa.forEach(function(copas){
    console.log(`O brasil ganhou as copas de ${copas}`);
})
//Interaja com um loop nas frutas abaixo e para ao chegar em Pera

var frutas = ['Banana', 'Maça', 'Pera', 'Uva', 'Melancia'];

for(var fruta = 0;  fruta > frutas.length; fruta++){
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera'){
        break
    }
}


//Coloque a ultima fruta do array acima em uma variavel
//sem remover o mesmo do array

var ultimaFruta = frutas[frutas.length - 1];