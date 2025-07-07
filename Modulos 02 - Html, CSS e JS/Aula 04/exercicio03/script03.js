let numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);

let tentativas = 0;

function verificar() {
    

    let palpite = document.getElementById("palpite").value;
    let mensagem = document.getElementById("mensagem");

    tentativas++;

    palpite = parseInt(palpite);

    if (palpite === numeroSecreto) {
        mensagem.innerHTML = `🎉 Parabéns! Você acertou em <strong>${tentativas}</strong> tentativas!<br><br>
        <button onclick="reiniciarJogo()">🔁 Jogar Novamente</button>
      `;
    } else {
        // Mostra dica de acordo com a diferença
        let diferenca = Math.abs(palpite - numeroSecreto);

        if (diferenca <= 5) {
            mensagem.innerText = "Quase!";
        } else if (diferenca <= 10) {
            mensagem.innerText = "Perto!";
        } else if (diferenca <= 20) {
            mensagem.innerText = "Longe!";
        } else {
            mensagem.innerText = "Muito longe!";
        }

    }
    document.getElementById("palpite").value = "";
    document.getElementById("palpite").focus();
}
function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log(numeroSecreto);
    tentativas = 0;
    document.getElementById("mensagem").innerText = "";
    document.getElementById("palpite").value = "";
    document.getElementById("palpite").focus();
    document.getElementById("reiniciar").style.display = "none";
}