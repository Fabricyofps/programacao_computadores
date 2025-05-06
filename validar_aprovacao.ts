import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a nota do estudante: ", (inputNota) => {
  const nota = parseFloat(inputNota);

  if (isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Por favor, insira uma nota válida entre 0 e 100.");
  } else {
    if (nota >= 60) {
      console.log(`A nota é ${nota}. O estudante foi aprovado!`);
    } else {
      console.log(`A nota é ${nota}. O estudante foi reprovado.`);
    }
  }
  rl.close();
});
