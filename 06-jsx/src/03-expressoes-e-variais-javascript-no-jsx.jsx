import React from 'react';

// Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves {}:
const App = () => {
  const numAleatorio = Math.random();
  const ativo = false;
  return (
    <p className={ativo ? 'ativo' : 'inativo'}>{(numAleatorio * 1000) / 50}</p>
  );
};

export default App;
