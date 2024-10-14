// Método .map() transforma/modifica cada elemento do array original, criando um novo array com os resultados da função callback aplicada a cada elemento.

// 1. Cria um novo array com o dobro de cada número:
const numeros = [1, 2, 3, 4];
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados); // Saída: (4) [2, 4, 6, 8]

// 2. Cria um novo array extraindo apenas um campo específico, neste caso, o campo "nome":
const pessoas = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 20 },
  { nome: 'Carlos', idade: 15 },
  { nome: 'Diana', idade: 22 },
];
const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes); // Saída: (4) ['Ana', 'Bruno', 'Carlos', 'Diana']
