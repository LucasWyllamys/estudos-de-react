// A classe é um molde do objeto. Descreve propriedades e métodos de um objeto.
// Uma classe não aloca memória em tempo de execução, já o objeto sim, já que a classe possui apenas a definição do objeto que cria.
/* Método constructor:
- Define e inicializa as propriedades do objeto.
- Executa qualquer configuração necessária quando o objeto é criado.
- Em classes derivadas, o constructor() pode chamar o super() para executar o construtor da classe pai, garantindo que a herança seja corretamente configurada.
*/

class Pessoa {
  // Método de inicialização:
  constructor(nome, idade) {
    this.nome = nome; // Propriedade
    this.idade = idade; // Propriedade
  }
  // Método:
  descrição() {
    return `${this.nome} tem ${this.idade} anos.`;
  }
}

const pessoa1 = new Pessoa('Lucas', 28); // A palavra reservada "new" instancia o novo objeto, "pessoa1".

console.log(pessoa1.nome); // Saída: Lucas
console.log(pessoa1.idade); // Saída: 28
console.log(pessoa1.descrição()); // Saída: Lucas tem 28 anos.
