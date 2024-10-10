// Retorna as propriedades clientX e clientY do evento 'mousemove' (objeto) sem usar a técnica de desestruturação de objeto.
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
  }
  
// Desestrutura o objeto:
// Define uma constante para cada propriedade do objeto, que tiver o mesmo nome que a constante:
  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
  }
  
  // Podemos desestruturar o parâmetro:
  function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);
  }
  
  document.documentElement.addEventListener('mousemove', handleMouseMove);  // Cria um evento de 'mousemove'.
  