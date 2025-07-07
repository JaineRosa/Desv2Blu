const perguntas = [
    {
      pergunta: "Qual propriedade CSS altera a cor do texto?",
      opcoes: ["background-color", "color", "font-size", "text-align"],
      correta: 1
    },
    {
      pergunta: "Qual valor da propriedade 'display' faz o elemento desaparecer da página?",
      opcoes: ["none", "hidden", "invisible", "collapse"],
      correta: 0
    },
    {
      pergunta: "Como se seleciona um elemento com id 'estilo' no CSS?",
      opcoes: [".estilo", "#estilo", "*estilo", "estilo"],
      correta: 1
    },
    {
      pergunta: "Qual propriedade controla o espaço dentro de um elemento, entre o conteúdo e a borda?",
      opcoes: ["margin", "padding", "border", "spacing"],
      correta: 1
    },
    {
      pergunta: "Como aplicar uma fonte chamada 'Arial' no CSS?",
      opcoes: ["font: Arial;", "font-family: Arial;", "font-style: Arial;", "font-weight: Arial;"],
      correta: 1
    },
    {
      pergunta: "Qual propriedade define a largura de um elemento?",
      opcoes: ["width", "height", "size", "length"],
      correta: 0
    },
    {
      pergunta: "Qual é o valor padrão da propriedade 'position'?",
      opcoes: ["static", "relative", "absolute", "fixed"],
      correta: 0
    },
    {
      pergunta: "Como centralizar horizontalmente um bloco com largura definida?",
      opcoes: ["margin: auto;", "text-align: center;", "align-items: center;", "padding: center;"],
      correta: 0
    },
    {
      pergunta: "Qual propriedade controla a opacidade de um elemento?",
      opcoes: ["visibility", "transparent", "opacity", "filter"],
      correta: 2
    },
    {
      pergunta: "Como se comenta uma linha no CSS?",
      opcoes: ["// comentário", "<!-- comentário -->", "# comentário", "/* comentário */"],
      correta: 3
    }
  ];

  const selecionadas = perguntas.sort(() => 0.5 - Math.random()).slice(0, 5);
  let indice = 0;
  let acertos = 0;

  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const resultadoEl = document.getElementById("resultado");

  function mostrarPergunta() {
    const atual = selecionadas[indice];
    perguntaEl.textContent = (indice + 1) + ") " + atual.pergunta;
    opcoesEl.innerHTML = "";

    atual.opcoes.forEach((texto, i) => {
      const botao = document.createElement("button");
      botao.textContent = texto;
      botao.onclick = () => {
        if (i === atual.correta) acertos++;
        indice++;
        if (indice < selecionadas.length) {
          mostrarPergunta();
        } else {
          mostrarResultado();
        }
      };
      opcoesEl.appendChild(botao);
    });
  }

  function mostrarResultado() {
    perguntaEl.textContent = "";
    opcoesEl.innerHTML = "";
    resultadoEl.textContent = `Você acertou ${acertos} de ${selecionadas.length} perguntas!`;
  }

  mostrarPergunta();