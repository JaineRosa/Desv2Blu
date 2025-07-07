function calcular() {

    let formulario = document.getElementById('formulario');

    let valor = parseInt(formulario.valor.value);
    let moeda = parseInt(formulario.moeda.value);

    const dolar = 5.41;
    const euro = 6.36;
    const libra = 7.38;
    const bitcoin = 594065;

    let convertido;
    let nomeMoeda;

    switch (moeda) {
        case 1:
            convertido = valor / dolar;
            nomeMoeda = "Dólares";
            break;
        case 2:
            convertido = valor / euro;
            nomeMoeda = "Euros";
            break;
        case 3:
            convertido = valor / libra;
            nomeMoeda = "Libras";
            break;
        case 4:
            convertido = valor / bitcoin;
            nomeMoeda = "Bitcoins";
            break;
    }

    document.getElementById('conversao').innerText =
        `R$ ${valor.toFixed(2)} convertido em ${nomeMoeda}: \n${convertido.toFixed(2)} ${nomeMoeda}`;

    return false;



}