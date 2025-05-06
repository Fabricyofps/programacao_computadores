// areaCirculo.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularAreaCirculo(raio: number): number {
  return Math.PI * Math.pow(raio, 2);
}

rl.question("Digite o raio do círculo: ", (input) => {
  const raio = parseFloat(input);
  if (isNaN(raio) || raio < 0) {
    console.log("Por favor, insira um número válido para o raio.");
  } else {
    const area = calcularAreaCirculo(raio);
    console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);
  }
  rl.close();
});

// isNaN(raio): A função isNaN (is Not a Number) verifica se o valor de raio é um número.
// Se raio não for um número (por exemplo, se o usuário inserir uma string ou um valor inválido), isNaN(raio) retornará true.

// Math.pow(raio, 2): Esta função também faz parte do objeto Math e é usada para elevar um número a uma potência.
// Neste caso, Math.pow(raio, 2) eleva o valor de raio ao quadrado (ou seja, multiplica raio por ele mesmo).
// Isso é necessário porque a fórmula da área do círculo envolve o raio ao quadrado

// Portanto, ${area.toFixed(2)} insere o valor da área formatado com duas casas decimais na string que será exibida ao usuário.
