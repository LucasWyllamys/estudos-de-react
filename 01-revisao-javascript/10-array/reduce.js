// O método .reduce() é usado para reduzir um array a um único valor, aplicando uma função callback a um acumulador e a cada valor do array (da esquerda para a direita).
// O parâmetro 'acc' é o "accumulator" que armazena o valor retornado na última invocação do callback, ou o valor inicial, se fornecido.
// O parâmetro 'item' representa o elemento atual que está sendo processado no array.
// initialValue (opcional) é um valor a ser usado como o primeiro argumento na primeira chamada do callback, no caso abaixo, o número 0.

// 1. Somando todos os números de uma array:
const numeros = [1, 2, 3, 4];
const soma = numeros.reduce((acc, item) => acc + item, 0);
console.log(soma); // Saída: 10

// 2. Multiplicando as idades de uma array de objetos:
const pessoas = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 20 },
  { nome: 'Carlos', idade: 15 },
  { nome: 'Diana', idade: 22 },
];
const idadesProduto = pessoas.reduce((acc, pessoa) => acc * pessoa.idade, 1);
console.log(idadesProduto); // Saída: 112200

// 3. Usando o método .reduce() para implementar métodos como .map() e .filter():
const num = [1, 2, 3, 4];
const numerosDobrados = num.reduce((array, numero) => {
  array.push(numero * 2); // 'Empurra' os números dobrados para um novo array.
  return array;
}, []);
console.log(numerosDobrados); // Saída: (4) [2, 4, 6, 8]
