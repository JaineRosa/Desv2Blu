function calcular() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = numero;

    if (numero < 0) {
        document.getElementById("resultado").innerText = "Não é possível calcular números negativos.";
        return;
    }

    for (let i = (numero-1); i >= 1; i--) {
        console.log(`${resultado} * ${i}`);
        resultado =  resultado * i;
    }

    document.getElementById("resultado").innerText = `O fatorial de ${numero} é ${resultado}`;
}