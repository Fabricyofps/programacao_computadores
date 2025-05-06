// imc.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 24.9) {
    return "Peso normal";
  } else if (imc < 29.9) {
    return "Sobrepeso";
  } else if (imc < 34.9) {
    return "Obesidade grau I";
  } else if (imc < 39.9) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III (mórbida)";
  }
}

rl.question("Digite seu peso em kg: ", (pesoInput) => {
  rl.question("Digite sua altura em metros: ", (alturaInput) => {
    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Por favor, insira valores válidos para peso e altura.");
      rl.close();
      return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    console.log(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`);
    rl.close();
  });
});
