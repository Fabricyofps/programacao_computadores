// contagem_vogais.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarVogais(frase: string): number {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (const char of frase) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

rl.question("Digite uma frase: ", (input) => {
  const totalVogais = contarVogais(input);
  console.log(`A frase contém ${totalVogais} vogais.`);
  rl.close();
});
