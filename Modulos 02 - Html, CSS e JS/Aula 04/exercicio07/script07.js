function verificarAno() {
    const ano = parseInt(document.getElementById("ano").value);
    
    if (isNaN(ano) || ano <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um ano válido.";
        return;
    }

    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

    if (bissexto) {
        document.getElementById("resultado").innerText = `${ano} é um ano bissexto.`;
    } else {
        document.getElementById("resultado").innerText = `${ano} não é um ano bissexto.`;
    }
}