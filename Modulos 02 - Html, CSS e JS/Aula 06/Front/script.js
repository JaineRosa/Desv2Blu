let cadastros = [];

fetch('http://localhost:3000/cadastros')
  .then(res => res.json())
  .then(c => {
    cadastros = c;
    renderizarTabela();
  });

function renderizarTabela() {
  let tabela = document.getElementById('tabela');
  tabela.innerHTML = '';

  for (let indice = 0; indice < cadastros.length; indice++) {
    let linha = tabela.insertRow(-1);

    let colunaId = linha.insertCell(0);
    let colunaNome = linha.insertCell(1);
    let colunaCep = linha.insertCell(2);
    let colunaEstado = linha.insertCell(3);
    let colunaBairro = linha.insertCell(4);
    let colunaCidade = linha.insertCell(5);
    let colunaLogradouro = linha.insertCell(6);
    let colunaAcoes = linha.insertCell(7);

    colunaId.innerText = cadastros[indice].id;
    colunaNome.innerText = cadastros[indice].nome;
    colunaCep.innerText = cadastros[indice].cep;
    colunaEstado.innerText = cadastros[indice].estado;
    colunaBairro.innerText = cadastros[indice].bairro;
    colunaCidade.innerText = cadastros[indice].cidade;
    colunaLogradouro.innerText = cadastros[indice].logradouro;

    colunaAcoes.innerHTML = `
      <button onclick='carregarEdicao(${indice})' class='btn btn-warning'>Editar</button>
      <button onclick='remover(${indice})' class='btn btn-danger'>Excluir</button>
    `;
  }
}

function cadastrar() {
  var id = document.getElementById("id").value;
  var nome = document.getElementById("nome").value;
  var cep = document.getElementById("cep").value;
  var estado = document.getElementById("estado").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var logradouro = document.getElementById("logradouro").value;
  
  if (!nome) {
    alert("O campo Nome não pode ser vazio.");
    document.getElementById("nome").focus();
    return;
}
if (!cep) {
    alert("O campo CEP não pode ser vazio.");
    document.getElementById("cep").focus();
    return;
}

  let novoCadastro = {
    nome: nome,
    cep: cep,
    estado: estado,
    bairro: bairro,
    cidade: cidade,
    logradouro: logradouro
  };

  fetch('http://localhost:3000/cadastros', {
    method: 'POST',
    body: JSON.stringify(novoCadastro),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(retorno => retorno.json())
    .then(c => {
      cadastros.push(c);
      renderizarTabela();
      limpar();
    });
}

function carregarEdicao(indice) {
    let cadastro = cadastros[indice];
    document.getElementById('id').value = cadastro.id;
    document.getElementById('nome').value = cadastro.nome;
    document.getElementById('cep').value = cadastro.cep;
    document.getElementById('estado').value = cadastro.estado;
    document.getElementById('bairro').value = cadastro.bairro;
    document.getElementById('cidade').value = cadastro.cidade;
    document.getElementById('logradouro').value = cadastro.logradouro;
    document.getElementById('btnAlterar').style.display = 'inline-block';
    document.getElementById('btnCadastrar').style.display = 'none';
    document.getElementById('id').style.display = 'block';
  }

  function editar() {
    let id = document.getElementById("id");
    let nome = document.getElementById("nome");
    let cep = document.getElementById("cep");
    let estado = document.getElementById("estado");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let logradouro = document.getElementById("logradouro");
  
    let obj = {
      nome: nome.value,
      cep: cep.value,
      estado: estado.value,
      bairro: bairro.value,
      cidade: cidade.value,
      logradouro: logradouro.value
    };
  
    fetch(`http://localhost:3000/cadastros/${id.value}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(c => {
        let indice = cadastros.findIndex(c => c.id == id.value);
        cadastros[indice] = c;
        renderizarTabela();
        limpar();
        nome.focus();
  
        document.getElementById('btnAlterar').style.display = 'none';
        document.getElementById('btnCadastrar').style.display = 'inline-block';
        document.getElementById('id').style.display = 'none';
      });
  }

  function remover(indice) {
    let cadastro = cadastros[indice];
  
    fetch(`http://localhost:3000/cadastros/${cadastro.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(c => {
      let indice = cadastros.findIndex(p => p.id == c.id);

      cadastros.splice(indice, 1);

      renderizarTabela();

      limpar();

      nome.focus();
    });
  }

  function limpar() {
    document.getElementById("id").value = '';
    document.getElementById("nome").value = '';
    document.getElementById("cep").value = '';
    document.getElementById("estado").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("logradouro").value = '';
  
    document.getElementById('btnAlterar').style.display = 'none';
    document.getElementById('btnCadastrar').style.display = 'inline-block';
    document.getElementById('id').style.display = 'none';
  }

  function buscarCep() {
    let cep = document.getElementById('cep').value.replace('-', '').trim();
    console.log("Buscando CEP:", cep); 
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(dados => {
                console.log(dados);
                document.getElementById('estado').value = dados.estado;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('logradouro').value = dados.logradouro;
            })
            .catch(err => {
                console.error('Erro ao consultar o CEP:', err);
            });
    } else {
        alert('CEP inválido. Digite 8 dígitos.');
    }
}