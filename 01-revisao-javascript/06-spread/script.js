// O operador spread (...) permite "espalhar" elementos de um iterável (como um array ou string) em vários elementos individuais.
// Use o spread para criar uma cópia superficial de um array:
const original = [1, 2, 3];
const copia = [...original];
console.log(copia); // Saída: (3) [1, 2, 3]

// O spread facilita a concatenação de arrays:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenado = [...array1, ...array2];
console.log(concatenado); // Saída: (6) [1, 2, 3, 4, 5, 6]

// Use o spread para passar elementos de um array como argumentos individuais para uma função:
function somar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
console.log(somar(...numeros)); // Saída: 6

// Use também o spread para clonar e mesclar objetos:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const clone_obj1 = { ...obj1 };
const mesclado = { ...obj1, ...obj2 };

console.log(clone_obj1); // Saída: {a: 1, b: 2, c: 3}
console.log(mesclado); // Saída: {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// Use o spread para converter uma string em um array de caracteres:
const string = 'Lucas';
const arrayCaracteres = [...string];

console.log(arrayCaracteres); // Saída: (5) ['L', 'u', 'c', 'a', 's']
