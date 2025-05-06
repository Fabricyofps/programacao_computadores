// contar_vogais_consoantes.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contarVogaisEConsoantes(texto: string): { vogais: number; consoantes: number } {
  const vogaisSet = new Set(["a", "e", "i", "o", "u"]);
  let vogais = 0;
  let consoantes = 0;

  texto = texto.toLowerCase();

  for (const letra of texto) {
    if (letra >= "a" && letra <= "z") {
      if (vogaisSet.has(letra)) vogais++;
      else consoantes++;
    }
  }
  return { vogais, consoantes };
}

rl.question("Digite uma palavra: ", (input) => {
  const resultado = contarVogaisEConsoantes(input);
  console.log(`A palavra tem ${resultado.vogais} vogais e ${resultado.consoantes} consoantes.`);
  rl.close();
});
