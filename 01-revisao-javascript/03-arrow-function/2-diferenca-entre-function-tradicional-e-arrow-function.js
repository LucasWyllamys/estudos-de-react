/* Diferenças entre function tradicional e arrow function:
1. Contexto do this:
- Função tradicional: O valor de this depende de onde a função é chamada.
- Arrow function: O valor de this é léxico, ou seja, é definido pelo contexto onde a função foi escrita, não onde foi chamada.

2. Uso do arguments:
- Função tradicional: Tem acesso ao objeto arguments, que é uma coleção de todos os argumentos passados para a função.
- Arrow function: Não tem seu próprio objeto arguments. Se precisar acessar os argumentos, você pode usar o operador rest ...args.

3. Construtor:
- Função tradicional: Pode ser usada como construtor com a palavra-chave new.
- Arrow function: Não pode ser usada como construtor e lançará um erro se tentar usar new.
*/

const obj = {
  name: "Lucas Wyllamys",

  normalFunc: function() {
    console.log(this.name)  // Aqui, this refere-se ao objeto 'obj' no qual
  },
  arrowFunc: () => {
    console.log(this.name)  // Aqui, thi refere-se ao escopo onde foi definido (global ou exterior)
  }
};

obj.normalFunc(); // Saída: Lucas Wyllamys
obj.arrowFunc(); // Saída: underfined, porque this não aponta para 'obj'

/*
Principais Considerações
  - Use arrow functions quando quiser herdar o this do contexto externo, como em callbacks, métodos de promessas, e funções passadas para manipuladores de eventos.
  - Evite usar arrow functions como métodos de objetos (propriedades que são funções) quando você precisa que this aponte para o próprio objeto.
*/