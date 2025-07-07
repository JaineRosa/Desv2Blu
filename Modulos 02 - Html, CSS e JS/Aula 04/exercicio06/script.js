function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, informe peso e altura válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25.0) {
        classificacao = "Peso normal";
    } else if (imc < 30.0) {
        classificacao = "Sobrepeso";
    } else if (imc < 35.0) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40.0) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)}<br><strong>${classificacao}</strong>`;
}