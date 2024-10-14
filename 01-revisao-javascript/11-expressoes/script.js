// Expressões são combinações de valores, variáveis e operadores que produzem um valor. Elas são fundamentais para a execução de operações e a manipulação de dados no código.

// O operador ternário é uma expressão:
const grupoA = 100;
const grupoB = 300;
const vencedor = grupoA > grupoB ? 'Grupo A venceu!' : 'Grupo B venceu!';
console.log(vencedor); // Saída: Grupo B venceu!

// Arrow functions também são expressões:
const substituir = (nome) => nome.replace('u', 'a');
console.log(substituir('Lucas')); // Saída: Lacas

// Expressões booleanas:
const active = true;
const button = active && 'Botão está ativo';
console.log(button); // Saída: Botão está ativo

// O uso de métodos também é expressão:
const numeros = [1, 2, 3, 4, 5, 6];
const numMaioresQueQuatro = numeros.filter((num) => num > 4);
console.log(numMaioresQueQuatro); // Saída: (2) [5, 6]

/* JSX:
<button onClick={(event) => event.target.classList.add('active')}>
  Button
</button>;
*/
