// primo.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ehPrimo(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

rl.question("Digite um número para verificar se é primo: ", (input) => {
  const numero = parseInt(input);
  if (ehPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} não é um número primo.`);
  }
  rl.close();
});
1;
