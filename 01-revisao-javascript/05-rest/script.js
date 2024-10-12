// O operador Rest permite que você represente um número indefinido de argumentos como um array. Isso é útil quando você não sabe quantos argumentos serão passados para a função.
function showList(empresa, ...clientes) {
  // Todos os argumentos que são inseridos no parâmetro rest (...) são inseridos na array 'clientes'.
  console.log(`Empresa: ${empresa}; Clientes: ${clientes}`); // Saída: Empresa: Neoenergia; Clientes: Lucas,David,Silas
}

showList('Neoenergia', 'Lucas', 'David', 'Silas');
