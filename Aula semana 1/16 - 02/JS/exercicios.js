// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.
let idade = 18;
let dinheiro = 100;


if (idade >= 18 && dinheiro >= 20){
    console.log("Pode comprar bebida.");
    dinheiro = dinheiro - 20;//dinheiro -=20;
    console.log(`Você ficou com ${dinheiro} reais.`)
}else{
    console.log("Não pode comprar bebida.")
}


console.log("------------------------------------------------------------------")


// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

let salario = 200;

if(salario < 500){
    salario += 50;
    //console.log(`Seu salário ficou em ${salario} reais.`)
}
else if (salario >=500 && salario <=1000){
    salario += 25;
    //console.log(`Seu salário ficou em ${salario} reais.`)
} else{
    console.log(`Não houve aumento de salário.`)
}
console.log(`Seu salário é de ${salario} reais.`)




