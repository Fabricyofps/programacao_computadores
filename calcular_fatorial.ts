// fatorial.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularFatorial(n: number): number {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

rl.question("Digite um número para calcular o fatorial: ", (input) => {
  const numero = parseInt(input);
  if (numero < 0) {
    console.log("O fatorial não é definido para números negativos.");
  } else {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}.`);
  }
  rl.close();
});
