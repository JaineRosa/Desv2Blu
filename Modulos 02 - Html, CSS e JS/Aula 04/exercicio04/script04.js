function calcularTabuada(){

    const numero = parseInt(document.getElementById('numero').value);
    const divTabuada = document.getElementById('tabuada');

    divTabuada.innerText = '';

    for(let cont = 1; cont <= 10; cont++) {
        let resultado = numero * cont;
        divTabuada.innerText += `<p>${numero} x ${cont} = ${resultado}</p>`;
    }

}