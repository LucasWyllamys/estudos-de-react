// 1. Funcção tradicional:
function paraMaiuscula(nome) {
  console.log(nome.toUpperCase());
};

// 2. Função dentro de uma variável (expressão):
const paraMinuscula = function (nome) {
  console.log(nome.toLowerCase());
}; 

// 3. Arrow Function:
const qtdCaract = (nome) => {
  console.log(nome.length);
};
// Pode ser comprimida da seguinte forma:
const qtdCaractComprimida = (nome) => nome.length;

paraMaiuscula('Lucas');  // Saída: LUCAS
paraMinuscula('Lucas');  // Saída: lucas
qtdCaract('Lucas');      // Saída: 5
