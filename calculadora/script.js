document.getElementById("imc-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  console.log("Peso:", peso, "Altura:", altura);

  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultadoDiv.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});
