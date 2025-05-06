// inversao_string.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inverterString(str: string): string {
  return str.split("").reverse().join("");
}

rl.question("Digite uma string para inverter: ", (input) => {
  const stringInvertida = inverterString(input);
  console.log(`A string invertida é: ${stringInvertida}`);
  rl.close();
});
