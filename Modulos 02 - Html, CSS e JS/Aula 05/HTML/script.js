//vetor
let produtos = [];

//requisição para obter todos os produtos
fetch('http://localhost:3000/produto')
    .then(retorno => retorno.json())
    .then(p => {
        produtos = p;
        renderizarTabela();
    });

// Função para gerar a tabela
let renderizarTabela = () => {
    // selecionar elemento <tbody>
    let tabela = document.getElementById('tabela');

    //limpar tabela
    tabela.innerHTML = '';

    //laço de repetição
    for (let indice = 0; indice < produtos.length; indice++) {
        //Criar liha de tabela
        let linha = tabela.insertRow(-1);
        // Criar colunas <td>
        let colunaId = linha.insertCell(0);
        let colunaNome = linha.insertCell(1);
        let colunaMarca = linha.insertCell(2);
        let colunaValor = linha.insertCell(3);
        let colunaSelecionar = linha.insertCell(4);

        //Informa o valor de cada coluna
        colunaId.innerText = produtos[indice].id;
        colunaNome.innerText = produtos[indice].nome;
        colunaMarca.innerText = produtos[indice].marca;
        colunaValor.innerText = produtos[indice].valor;
        colunaSelecionar.innerHTML = `<button onclick='selecionar(${indice})' class= 'btn btn-primary'>Selecionar</button>`
    }
}

//Funçao para cadastrar produtos

const cadastrar = () => {
    //obter os inputs
    let nome = document.getElementById('nome');
    let marca = document.getElementById('marca');
    let valor = document.getElementById('valor');

    // gerar objeto produto

    let obj = {
        'nome': nome.value,
        'marca': marca.value,
        'valor': parseFloat(valor.value)
    }

    fetch('http://localhost:3000/produto',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(res => res.json())
        .then(p => {
            //Armazenas o produto no vertor
            produtos.push(p);
            //gerar indice do produto no vetor
            let indice = produtos.length - 1
            //selecionar o elemento do tbody
            let tabela = document.getElementById('tabela');
            //Criar liha de tabela
            let linha = tabela.insertRow(-1);
            // Criar colunas <td>
            let colunaId = linha.insertCell(0);
            let colunaNome = linha.insertCell(1);
            let colunaMarca = linha.insertCell(2);
            let colunaValor = linha.insertCell(3);
            let colunaSelecionar = linha.insertCell(4);

            //Informa o valor de cada coluna
            colunaId.innerText = p.id;
            colunaNome.innerText = p.nome;
            colunaMarca.innerText = p.marca;
            colunaValor.innerText = p.valor;
            colunaSelecionar.innerHTML = `<button onclick='selecionar(${indice})' class= 'btn btn-primary'>Selecionar</button>`

            //limpar inputs

            nome.value = '';
            marca.value = '';
            valor.value = '';
            //Focus faz com que o curso fique dentro do input
            nome.focus();
        });
}
//Função para selecionar um produto especifico
const selecionar = (indice) => {
    //selecionar todos os elementos de formulario
    let id = document.getElementById('id');
    let nome = document.getElementById('nome');
    let marca = document.getElementById('marca');
    let valor = document.getElementById('valor');
    let btnCadastrar = document.getElementById('btnCadastrar');
    let btnAlterar = document.getElementById('btnAlterar');
    let btnRemover = document.getElementById('btnRemover');
    let btnCancelar = document.getElementById('btnCancelar');

    //Obterobjeto de produto
    let obj = produtos[indice];

    //preencher inputs (text)
    id.value = obj.id;
    nome.value = obj.nome;
    marca.value = obj.marca;
    valor.value = obj.valor;

    //visibilidade dos botões
    btnCadastrar.style.display = 'none';
    btnAlterar.style.display = 'inline-block';
    btnRemover.style.display = 'inline-block';
    btnCancelar.style.display = 'inline-block';
}


//Funçao para cancelar
const cancelar = (indice) => {
    //selecionar todos os elementos de formulario
    let id = document.getElementById('id');
    let nome = document.getElementById('nome');
    let marca = document.getElementById('marca');
    let valor = document.getElementById('valor');
    let btnCadastrar = document.getElementById('btnCadastrar');
    let btnAlterar = document.getElementById('btnAlterar');
    let btnRemover = document.getElementById('btnRemover');
    let btnCancelar = document.getElementById('btnCancelar');

    //preencher inputs (text)
    id.value = '';
    nome.value = '';
    marca.value = '';
    valor.value = '';

    //visibilidade dos botões
    btnCadastrar.style.display = 'inline-block';
    btnAlterar.style.display = 'none';
    btnRemover.style.display = 'none';
    btnCancelar.style.display = 'none';
}

//funçao para alterar produto
const alterar = () => {
    //obter os inputs
    let id = document.getElementById('id');
    let nome = document.getElementById('nome');
    let marca = document.getElementById('marca');
    let valor = document.getElementById('valor');

    // gerar objeto produto

    let obj = {
        'nome': nome.value,
        'marca': marca.value,
        'valor': parseFloat(valor.value)
    }

    fetch(`http://localhost:3000/produto/${id.value}`,
        {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(res => res.json())
        .then(p => {
            //Localizar o produto no vetor
            let indice = produtos.findIndex(pessoa => pessoa.id == p.id);

            //alterar objeto no vetor
            produtos[indice] = p;

            //Atualizar tabela

            renderizarTabela();

            //limpar inputs
            id.value = '';
            nome.value = '';
            marca.value = '';
            valor.value = '';
            //Focus faz com que o curso fique dentro do input
            nome.focus();
        });
}

//Funçao para cancelar
const remover = () => {
    let id = document.getElementById('id');
    let nome = document.getElementById('nome');
    let marca = document.getElementById('marca');
    let valor = document.getElementById('valor');

    //requisição
    fetch(`http://localhost:3000/produto/${id.value}`,
        {
            method: 'DELETE'
        }
    )
        .then(res => res.json())
        .then(p => {
            //Localizar o produto no vetor
            let indice = produtos.findIndex(pessoa => pessoa.id == p.id);

            //remover objeto no vetor
            produtos.splice(indice,1);

            //Atualizar tabela

            renderizarTabela();

            //limpar inputs
            id.value = '';
            nome.value = '';
            marca.value = '';
            valor.value = '';
            //Focus faz com que o curso fique dentro do input
            nome.focus();
        });


}
