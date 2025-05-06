// whileLoop.ts

import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número para iniciar a contagem (while): ", (input) => {
  const numero = parseInt(input);
  let i = 1;

  console.log(`Contagem usando while:`);
  while (i <= numero) {
    console.log(i);
    i++;
  }

  if (numero < 1) {
    console.log("Nenhum número para contar, pois o número é menor que 1.");
  }

  rl.close();
});
