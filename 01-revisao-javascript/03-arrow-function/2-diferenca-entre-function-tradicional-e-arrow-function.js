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

function FuncaoTradicional() {
  console.log(this);
}

const ArrowFunction = () => {
  console.log(this);
};

const obj = {
  metodo: FuncaoTradicional,
  metodoArrow: ArrowFunction,
};

obj.metodo(); // `this` refere-se a `obj`
obj.metodoArrow(); // `this` refere-se ao contexto léxico, não a `obj`
