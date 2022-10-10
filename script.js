function mediaDasNotas() {
  var primeiraNota = parseFloat(document.getElementById("Valor1").value);
  var segundaNota = parseFloat(document.getElementById("Valor2").value);
  var terceiraNota = parseFloat(document.getElementById("Valor3").value);
  var quartaNota = parseFloat(document.getElementById("Valor4").value);

  var notaFinal = (
    (primeiraNota + segundaNota + terceiraNota + quartaNota) /
    4
  ).toFixed(1);

  var valorFinal = document.getElementById("valorMedia");
  var mensagemFinal = "A média é: " + notaFinal;
  valorFinal.innerHTML = mensagemFinal;

  console.log(notaFinal);
}