function Converter() {
  var valorElemento = document.getElementById("valor");
  var valorQuilometragem = valorElemento.value;
  var distanciaDoAstro = parseFloat(valorQuilometragem);

  console.log(distanciaDoAstro);

  var anosLuz = distanciaDoAstro * 0.0000000000001057;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Viajar para esse astro demoraria " + anosLuz + " anos luz";
  elementoValorConvertido.innerHTML = valorConvertido;
}