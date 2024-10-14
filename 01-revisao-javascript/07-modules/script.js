/* 
- Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.
- O arquivo de JavaScript deve ser referenciado no HTML como script:module. 
- Exemplo: <script type="module" src="script.js"></script> (Só funciona em servidor, seja local ou online. Não irá funcionar se você abrir o html direto)
- Use a função import{} para importar elementos de outros módulos.
*/

// 1. Importa as funções areaQuadrado e perimetroQuadrado do módulo quadrado.js:
import { areaQuadrado, perimetroQuadrado } from './quadrado.js'; // Desestruturação (não é necessário desestruturar quando é uma função, array ou objeto default)

console.log(areaQuadrado(3));
console.log(perimetroQuadrado(4));
