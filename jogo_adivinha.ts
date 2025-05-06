// adivinhacao.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const adivinhar = () => {
  rl.question("Adivinhe um número entre 1 e 100: ", (input) => {
    const palpite = parseInt(input);
    tentativas++;

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você adivinhou o número em ${tentativas} tentativas.`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log("Muito baixo! Tente novamente.");
      adivinhar();
    } else {
      console.log("Muito alto! Tente novamente.");
      adivinhar();
    }
  });
};

adivinhar();
