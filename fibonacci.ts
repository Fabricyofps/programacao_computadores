// fibonacci.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número limite para a sequência de Fibonacci: ", (input) => {
  const limite = parseInt(input);
  let a = 0,
    b = 1;

  console.log("Sequência de Fibonacci:");
  while (a <= limite) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
  }

  rl.close();
});
