//Aula 23-02


//Funções = procedimento = método
//Estrutura para diminuir repetição de código


// Sintaxe básica
function dizOla() {
  // declaração de função
  console.log("Hello, World!");
  console.log("!!!!!!!");
}

// Invocação = chamada
// dizOla();
// dizOla();
// dizOla();

function exemplo01() {
  // escopo de função
  let a = 5;
  let b = 10;
  console.log(`A soma é ${a + b}`);
}

// exemplo01();

let num1 = 3;
let num2 = 5;

function exemplo02() {
  console.log(`A soma é ${num1 + num2}`);
}

// exemplo02();
num1 = 10;
num2 = 15;
// exemplo02();

// Parâmetros = entrada = o que a função precisa para executar
// = Informação dinâmica
// a e b são PARÂMETROS
function soma(a, b) {
  console.log(`A soma de ${a} + ${b} = ${a + b}`);
}

// soma(20, 75);
// soma(10, 5);
// soma(9, 80);
// soma(1, 2);

function calculadora(a, b, c) {
  console.log(`A soma é ${a + b + c}`);
  console.log(`A subtração é ${a - b - c}`);
  console.log(`A multiplicação é ${a * b * c}`);
  console.log(`A divisão é ${a / b / c}`);
}

// Chamada?
// calculadora(10, 5, 2);
let numero1 = 50;
let numero2 = 25;
let numero3 = 40;
// calculadora(numero1, numero2, numero3); // argumentos = valores passados para os parâmetros

// Declare uma função que recebe 3 notas e mostra a média entre elas.
function media(n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3;
  console.log(`A média é ${resultado}`);

  return resultado; // indica que o valor da variável será "externalizado"
  console.log("Oiee"); // dead-code = código que nunca vai ser executado
}

// let medBiologia = media(7.5, 8.0, 9.0);
// let medMatematica = media(7, 6, 3.5);
// let medPortugues = media(7.7, 9.6, 4.5);

// console.log(`Biologia = ${medBiologia}`);
// console.log(`Matemática = ${medMatematica}`);
// console.log(`Português = ${medPortugues}`);

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)
// f = função
// x = parâmetro
// y = resultado/retorno
function estaAprovado(n1, n2, n3) {
  // indicar se o aluno foi aprovado ou não
  let med = media(n1, n2, n3);

  if (med >= 7) {
    console.log("Aprovado!");
    return true; // podemos retornar "Aprovado!"
  } else {
    console.log("Reprovado!");
    return false; // podemos retornar "Reprovado!"
  }
}

let statusAluno = estaAprovado(6.5, 3.0, 8.6);
console.log(statusAluno);

// RETORNO 16H05

// Exercícios - Resolução

// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc(peso, altura) {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);

  return calculo;
}

// let imcBatata = imc(80.0, 1.79);
// let imcArroz = imc(40.0, 1.5);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem(num) {
  let p = num * 100;
  return `${p.toFixed(1)}%`;
}

// let valorFormatado = porcentagem(0.5);
// console.log(valorFormatado);

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.
function contar(maximo) {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
}

// FUNÇÃO SEM RETURN DEVOLVE UNDEFINED
// contar(5);