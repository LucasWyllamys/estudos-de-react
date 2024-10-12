// Desestruturar um objeto no JavaScript é uma maneira prática de extrair valores (cópia) de objetos e atribuí-los a variáveis. Isso é feito usando uma sintaxe especial que facilita o acesso a propriedades específicas de um objeto sem a necessidade de acessar cada propriedade individualmente.

// Criação do objeto:
const pessoa = {
  nome: 'Lucas',
  idade: 28,
  cidade: 'São Paulo',
};
// Desestruturando o objeto:
// Define uma constante para cada propriedade do objeto, que tiver o mesmo nome que a constante:
const { nome, cidade } = pessoa;

console.log(nome); // Saída: Lucas
console.log(cidade); // Saída: São Paulo
