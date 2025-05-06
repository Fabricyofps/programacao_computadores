// doWhileLoop.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Digite um número para iniciar a contagem (do...while): ",
  (input) => {
    const numero = parseInt(input);
    let i = 1;

    console.log(`Contagem usando do...while:`);
    do {
      console.log(i);
      i++;
    } while (i <= numero);

    if (numero < 1) {
      console.log("Contagem iniciada, mas o número é menor que 1.");
    }

    rl.close();
  }
);
