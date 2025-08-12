var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var height = 100;
var menu = {
    width:800.,
    height: 50,
    background:'#84e',
    metadeHeight(){
        return this.height / 2;
    }
}

menu.escorder = function(){
    console.log('Escondi')
}

menu.background = '#000';
menu.color = 'blue';
var bg = menu.background;