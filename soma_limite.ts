// soma_limite.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número limite para somar: ", (input) => {
  const limite = parseInt(input);
  let soma = 0;
  let i = 1;

  while (i <= limite) {
    soma += i;
    i++;
  }

  console.log(`A soma dos números de 1 até ${limite} é ${soma}.`);
  rl.close();
});
