import React from 'react';

const App = () => {
  return (
    <a
      href="https://www.origamid.com"
      title="Site Origamid"
      target="_blank"
      className="grid" // Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para className para evitar conflitos.
    >
      Origamid
    </a>
  );
};

export default App;
