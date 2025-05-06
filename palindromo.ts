// palindromo.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ehPalindromo(texto: string): boolean {
  texto = texto.toLowerCase().replace(/\s/g, "");
  const invertido = texto.split("").reverse().join("");
  return texto === invertido;
}

rl.question("Digite uma palavra ou frase para verificar se é palíndromo: ", (input) => {
  if (ehPalindromo(input)) {
    console.log(`"${input}" é um palíndromo.`);
  } else {
    console.log(`"${input}" não é um palíndromo.`);
  }
  rl.close();
});
