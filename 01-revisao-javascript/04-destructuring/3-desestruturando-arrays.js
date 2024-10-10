// Exemplo 1:--------------------------------------------------------------
// Cria a array:
const frutas = ['banana', 'uva', 'maçã', 'morango']
// Desestruturando a array:
const [fruta1, fruta2, fruta3] = frutas

console.log(fruta1, fruta2, fruta3)   // Saída: 'banana', 'uva', 'maçã'

// Exemplo 2:--------------------------------------------------------------
// Cria a array:
const useState = [
    'blue', 
    function(color) {   // Modifica o elemento 'blue' para 'red' na array useState.
        useState[0] = color
    }
]
// Desestruturando a array:
const [color, setColor] = useState

setColor('red')
console.log(useState)   // Saída: (2) ['red', ƒ]
