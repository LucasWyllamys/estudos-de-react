// Funções assíncronas permitem que certas operações ocorram em segundo plano, enquanto o código continua a ser executado.
// Use async e await quando você precisar realizar operações assíncronas, como chamadas de API, leitura de arquivos, ou qualquer operação que envolva Promises. Eles ajudam a evitar o “callback hell” e tornam o código mais limpo e gerenciável.
// Uma função assíncrona (async function) retorna uma promessa. Isso significa que você pode usar a palavra reservada await dentro dessa função para esperar pela resolução da Promise.
// A palavra-chave await pausa a execução da função assíncrona até que a promessa seja resolvida ou rejeitada.
// O método .then() define o que fazer quando a promessa é resolvida com sucesso.
// O método .json() é utilizado para transformar a resposta de uma requisição HTTP em um objeto JavaScript (formato json). Quando você chama .json() em uma resposta, ele retorna uma promessa que resolve para o objeto JSON.
async function fetchPodutos(url) {
  const response = await fetch(url); // Faz a requisição.
  const jsonBody = await response.json(); // Converte a resposta em JSON.
  return jsonBody;
}

const request = fetchPodutos('https://ranekapi.origamid.dev/json/api/produto');

request.then((jsonBody) => {
  console.log(jsonBody); // Esta linha é executada apenas quando a promessa da request é resolvida.
});
/* jsonBody:
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: 'notebook-3', fotos: Array(2), nome: 'Notebook', preco: '2300', descricao: 'Gostaria de enfatizar que o início da atividade ge…formação de atitudes pode nos levar a considerar.', …}
1: {id: 'smartphone-2', fotos: Array(2), nome: 'Smartphone', preco: '2399', descricao: 'Gostaria de enfatizar que o início da atividade ge…formação de atitudes pode nos levar a considerar.', …}
2: {id: 'camera', fotos: Array(1), nome: 'Câmera', preco: '2199', descricao: 'Gostaria de enfatizar que o início da atividade ge…formação de atitudes pode nos levar a considerar.', …}
3: {id: 'smartwatch', fotos: Array(1), nome: 'Smartwatch', preco: '1199', descricao: 'Caros amigos, o comprometimento entre as equipes ainda não demonstrou convincentemente.', …}
4: {id: 'notebook-2', fotos: Array(1), nome: 'Notebook', preco: '4999', descricao: 'Caros amigos, o comprometimento entre as equipes ainda não demonstrou convincentemente.', …}
5: {id: 'tablet', fotos: Array(1), nome: 'Tablet', preco: '1899', descricao: 'Gostaria de enfatizar que o início da atividade ge…formação de atitudes pode nos levar a considerar.', …}
6: {id: 'smartphone', fotos: Array(2), nome: 'Smartphone', preco: '2333', descricao: 'Novo smartphone.', …}
7: {id: 'smartspeaker', fotos: Array(2), nome: 'Smartspeaker', preco: '1499', descricao: 'Esse é um speaker novo.', …}
8: {id: 'notebook', fotos: Array(2), nome: 'Notebook', preco: '2499.50', descricao: 'Esse é um notebook novo.', …}
length: 9
[[Prototype]]: Array(0)
*/
