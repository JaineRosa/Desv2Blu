const API_URL = 'http://localhost:3000';

const tabela = document.getElementById('tabela');
const form = document.getElementById('formPessoa');
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const idPessoa = document.getElementById('idPessoa');

window.onload = listar;

async function listar() {
    const res = await fetch(API_URL);
    const dados = await res.json();

    tabela.innerHTML = '';

    dados.forEach(p => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nome}</td>
      <td>${p.idade}</td>
      <td>
        <div class="acoes">
            <button onclick="Editar(${p.id}, &quot;${p.nome}&quot;, ${p.idade})" class="botaomenor">Editar</button>
            <button onclick="remover(${p.id})" class="botaomenor">Excluir</button>
        </div>
      </td>
    `;
        tabela.appendChild(linha);
    })


}


let idEditando = null;
function Editar(id, nomePessoa, idadePessoa) {
    nome.value = nomePessoa;
    idade.value = idadePessoa;
    idEditando = id;
    
}form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome: nome.value,
        idade: idade.value,
    };

    if (idEditando) {
        await fetch(`${API_URL}/${idEditando}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });
        idEditando = null;
    }else {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });
    }

    form.reset();
    listar();
});


async function remover(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    listar();
}






