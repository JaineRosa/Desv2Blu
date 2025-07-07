function calcular() {

  let formulario = document.getElementById('formulario');

  let nota1 = parseFloat(formulario.nota1.value);
  let nota2 = parseFloat(formulario.nota2.value);
  let nota3 = parseFloat(formulario.nota3.value);

  //calcular media
  let media = (nota1 + nota2 + nota3) / 3;

  //verificação
  var situacao
  if (media >= 7) {
    situacao = 'Aprovado'
  } else if (media >= 5) {
    situacao = 'Recuperação'
  } else {
    situacao = 'Reprovado'
  }

  let exibirMedia = document.getElementById('exibirMedia');
  let exibirSituacao = document.getElementById('exibirSituacao');
  exibirMedia.innerText = `A média é: ${media}`;
  exibirSituacao.innerText = `Você está: ${situacao}`;


  return false

}