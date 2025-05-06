// pares_entre.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o valor inicial: ", (inputStart) => {
  rl.question("Digite o valor final: ", (inputEnd) => {
    const start = parseInt(inputStart);
    const end = parseInt(inputEnd);

    if (start > end) {
      console.log("O valor inicial deve ser menor ou igual ao valor final.");
      rl.close();
      return;
    }

    console.log(`Números pares entre ${start} e ${end}:`);
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
    rl.close();
  });
});
