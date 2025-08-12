function imc(peso, altura){
    var imc = peso * (altura ** altura);
    return imc;
}

console.log(imc(83, 1.80));

function corFavorita(){
    if(cor === 'azul'){
        return 'Eu gosto do ceu'
    }else if(cor === 'verde'){
        return 'Eu gosto de mato';
    }else{
        return 'Eu não gosto de cores';
    }
}

function terceiraIdade(idade){
    console.log(typeof idade);
    if(typeof idade !== 'number'){
        return 'Infomer sua idade';
    }else if(idade >= 60){
        return true;
    }else{
        return false;
    }
}

console.log(terceiraIdade(60));

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(totalPaises)
