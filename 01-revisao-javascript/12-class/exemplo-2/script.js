// A classe é um molde do objeto. Descreve propriedades e métodos de um objeto.
// Uma classe não aloca memória em tempo de execução, já o objeto sim, já que a classe possui apenas a definição do objeto que cria.
/* Método constructor() {}:
- Define e inicializa as propriedades do objeto.
- Executa qualquer configuração necessária quando o objeto é criado.
- Em classes derivadas, o constructor() pode chamar o super() para executar o construtor da classe pai (superclasse), garantindo que a herança seja corretamente configurada.
*/
// A palavra reservada "extends" em JavaScript é usada para criar uma classe que herda de outra classe. Isso permite que a nova classe (subclasse) adquira todas as propriedades e métodos da classe pai (superclasse), além de poder adicionar ou sobrescrever métodos e propriedades.
// O método super() em JavaScript é usado dentro de uma subclasse para chamar o construtor da superclasse. Isso é necessário quando você está estendendo uma classe e precisa inicializar a parte da classe pai.
// O método .preventDefault() é usado para impedir o comportamento padrão de um evento.
// A propriedade .currentTarget é usada dentro de um evento para se referir ao elemento ao qual o evento foi originalmente associado.
// O método .getAttribute() é usado para obter o valor de um atributo especificado de um elemento HTML.
// O método .scrollTo() é usado para mover o scroll para onde se deseja.
// A propriedade .offsetTop retorna a posição vertical de um elemento em relação ao seu elemento pai mais próximo que tenha uma posição definida (ou em relação ao elemento <body> se nenhum elemento pai tiver uma posição definida). Esse valor é retornado em pixels.
// A propriedade window.innerHeight Retorna a altura da área de conteúdo da janela do navegador  (viewport), incluindo a barra de rolagem horizontal, se estiver presente.
// A propriedade element.clientHeight retorna a altura interna de um elemento em pixels, incluindo o padding, mas excluindo a barra de rolagem horizontal, bordas e margens.
// A propriedade window.scrollY em JavaScript retorna o número de pixels que o documento foi rolado verticalmente a partir do canto superior esquerdo da janela.
// O método .bind() em JavaScript é usado para criar uma nova função que, quando chamada, tem seu valor de this definido para um valor específico. Isso é especialmente útil quando você precisa garantir que uma função seja chamada com um determinado contexto, independentemente de como ou onde ela é invocada.

class rolagemSuave {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);
    this.addClickEvent(); // Ativa o evento click.
  }
  // Método que executa a ação quando o evento 'click' é chamado:
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href); // Seleciona a section que tem o id igual ao href.
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2, // Posição em relação ao top.
      behavior: 'smooth', // Define o comportamento.
    });
  }
  // Método que constroi o evento click:
  addClickEvent() {
    this.linkElements.forEach((link) => {
      link.addEventListener('click', this.handleClick);
    });
  }
}

class botaoAtivo extends rolagemSuave {
  constructor(links, sections) {
    super(links);

    this.sectionElements = document.querySelectorAll(sections); // Seleciona todas as sections.
    this.handleScroll = this.handleScroll.bind(this); // Garante que o escopo do this no método handleScroll não mude, mantendo a referencia à classe.
    this.handleScroll(); // Ativação inicial para ativar o primeiro botão.
    this.activeNavScroll(); // Ativa o evento scroll.
  }
  // Método que adiciona ou remove a classe 'active' na lista de classes do 'linkElements'.
  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      //
      if (window.scrollY > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add('active');
      } else {
        this.linkElements[i].classList.remove('active');
      }
    });
  }
  // Método que adiciona um evento para ativar o botão quando ocorrer a rolagem (scroll):
  activeNavScroll() {
    window.addEventListener('scroll', this.handleScroll);
  }
}

const scroll = new botaoAtivo("a[href^='#']", 'section');
// console.log(scroll.linkElements);
