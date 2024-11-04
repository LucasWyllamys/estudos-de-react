import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <label htmlFor="nome">Nome</label> {/* Em HTML seria: for="nome" */}
      <input type="text" id="nome" />
    </React.Fragment>
  );
};

export default App;
