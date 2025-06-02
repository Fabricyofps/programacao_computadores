import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Função que realiza a divisão de dois números com tratamento de erro.
 */
function divisaoSegura(dividendo: number, divisor: number): number | null {
  try {
    if (divisor === 0) {
      throw new Error("Divisão por zero não é permitida!");
    }
    return dividendo / divisor;
  } catch (Error) {
    console.log("Erro capturado:", Error);
    return null;
  }
}

/**
 * Função principal para interagir com o usuário.
 */
function main() {
  rl.question("Digite o dividendo: ", (dividendoStr) => {
    rl.question("Digite o divisor: ", (divisorStr) => {
      const dividendo = parseFloat(dividendoStr);
      const divisor = parseFloat(divisorStr);
      const resultado = divisaoSegura(dividendo, divisor);
      if (resultado !== null) {
        console.log(`Resultado da divisão: ${resultado}`);
      }
      rl.close();
    });
  });
}

main();
