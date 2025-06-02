import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a nota (0 a 10): ", (nota) => {
  const n = parseFloat(nota);
  let conceito: string;

  switch (true) {
    case n >= 9 && n <= 10:
      conceito = "A";
      break;
    case n >= 7 && n < 9:
      conceito = "B";
      break;
    case n >= 5 && n < 7:
      conceito = "C";
      break;
    case n >= 3 && n < 5:
      conceito = "D";
      break;
    case n >= 0 && n < 3:
      conceito = "E";
      break;
    default:
      console.log("Nota inválida!");
      rl.close();
      return;
  }

  console.log(`O conceito para a nota ${n} é: ${conceito}`);
  rl.close();
});
