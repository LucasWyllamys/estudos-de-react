// A função fetch(), em conjunto com os métodos .then(), .catch() e .json(), é usada para fazer requisições HTTP assíncronas, permitindo que você busque recursos de uma rede, como dados de uma API. A função fetch() retorna uma Promise que resolve para a resposta da requisição.
// O método .then() define o que fazer quando a promessa é resolvida com sucesso.
// O método .json() é utilizado para transformar a resposta de uma requisição HTTP em um objeto JavaScript (formato json). Quando você chama .json() em uma resposta, ele retorna uma promessa que resolve para o objeto JSON.
fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then((response) => response.json())
  .then((jsonBody) => {
    console.log(`Nome: ${jsonBody[3].nome} - Preço: ${jsonBody[3].preco}`); // Saída: Nome: Smartwatch - Preço: 1199
  });

// Faça uma requisição HTTP do tipo POST, PUT, PATCH ou DELETE para enviar dados para um servidor usando o fetch:
/*
- method: 'POST' -> Insere um novo recurso no servidor.
- method: 'PUT' -> Atualiza recursos existentes no servidor.
- method: 'PATCH' -> Atualiza parcialmente recursos existentes.
- method: 'DELETE' -> Deleta recursos no servidor.
*/
const dados = {
  // Criação de um objeto.
  id: 'andrerafa',
  nome: 'andre',
  email: 'andrerafa@origamid.com',
  senha: '123456',
  cep: '123456',
  rua: 'Ali perto',
  numero: 230,
  bairro: 'Rio Vermelho',
  cidade: 'São Félix',
  estado: 'Bahia',
};
// Escreve os dados do objeto acima no servidor:
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dados), // Converte um json (objeto) em string.
});

/*jsonBody:
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

/* https://ranekapi.origamid.dev/json/api/produto:
[
  {
    "id": "notebook-3",
    "fotos": [
      {
        "titulo": "notebook-4",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-2.jpg"
      },
      {
        "titulo": "smartwatch-3",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg"
      }
    ],
    "nome": "Notebook",
    "preco": "2300",
    "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "smartphone-2",
    "fotos": [
      {
        "titulo": "smartphone-3",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone-2.jpg"
      },
      {
        "titulo": "tablet-3",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-2.jpg"
      }
    ],
    "nome": "Smartphone",
    "preco": "2399",
    "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "camera",
    "fotos": [
      {
        "titulo": "camera-2",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/camera.jpg"
      }
    ],
    "nome": "Câmera",
    "preco": "2199",
    "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "smartwatch",
    "fotos": [
      {
        "titulo": "smartwatch-2",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-1.jpg"
      }
    ],
    "nome": "Smartwatch",
    "preco": "1199",
    "descricao": "Caros amigos, o comprometimento entre as equipes ainda não demonstrou convincentemente.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "notebook-2",
    "fotos": [
      {
        "titulo": "notebook-3",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook-1.jpg"
      }
    ],
    "nome": "Notebook",
    "preco": "4999",
    "descricao": "Caros amigos, o comprometimento entre as equipes ainda não demonstrou convincentemente.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "tablet",
    "fotos": [
      {
        "titulo": "tablet-2",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet-1.jpg"
      }
    ],
    "nome": "Tablet",
    "preco": "1899",
    "descricao": "Gostaria de enfatizar que o início da atividade geral de formação de atitudes pode nos levar a considerar.",
    "vendido": "false",
    "usuario_id": "lobo@origamid.com"
  },
  {
    "id": "smartphone",
    "fotos": [
      {
        "titulo": "smartphone-2",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone-1.jpg"
      },
      {
        "titulo": "smartwatch",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch.jpg"
      }
    ],
    "nome": "Smartphone",
    "preco": "2333",
    "descricao": "Novo smartphone.",
    "vendido": "false",
    "usuario_id": "joao@gmail.com"
  },
  {
    "id": "smartspeaker",
    "fotos": [
      {
        "titulo": "speaker",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/speaker.jpg"
      },
      {
        "titulo": "tablet",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/tablet.jpg"
      }
    ],
    "nome": "Smartspeaker",
    "preco": "1499",
    "descricao": "Esse é um speaker novo.",
    "vendido": "false",
    "usuario_id": "maria@origamid.com"
  },
  {
    "id": "notebook",
    "fotos": [
      {
        "titulo": "notebook-2",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/notebook.jpg"
      },
      {
        "titulo": "smartphone",
        "src": "https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone.jpg"
      }
    ],
    "nome": "Notebook",
    "preco": "2499.50",
    "descricao": "Esse é um notebook novo.",
    "vendido": "false",
    "usuario_id": "maria@origamid.com"
  }
]
*/
