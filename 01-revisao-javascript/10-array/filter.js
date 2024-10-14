// Método .filter() filtra os elementos do array original com base em uma condição, criando um novo array apenas com os elementos que passam no teste.

// 1. Cria uma nova array apenas com os elementos que possuem R$.
const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas a Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];
const precoFiltro = precos.filter((item) => item.includes('R$'));
console.log(precoFiltro); // Saída: (4) ['R$ 200', 'R$ 400', 'R$ 300', 'R$ 400']
// 1.1. Usando o método .map() para criar um nova array transformando os valores em números:
precosNumero = precoFiltro.map((item) => Number(item.replace('R$ ', '')));
console.log(precosNumero); // Saída: (4) [200, 400, 300, 400]

// 2. Cria uma array que retorna apenas números pares:
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares); // Saída: (3) [2, 4, 6]

// 3. O método .filter() também pode ser usado com arrays de objetos. Por exemplo, filtrando uma lista de pessoas para encontrar aquelas com idade maior que 18:
const pessoas = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 20 },
  { nome: 'Carlos', idade: 15 },
  { nome: 'Diana', idade: 22 },
];
const adultos = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log(adultos);
/* Saída: 
(2) [{…}, {…}]
0: {nome: 'Bruno', idade: 20}
1: {nome: 'Diana', idade: 22}
length: 2
[[Prototype]]: Array(0)
*/
