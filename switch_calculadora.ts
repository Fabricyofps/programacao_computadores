import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escolha uma operação (+, -, *, /): ", (operacao) => {
  rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let resultado: number;

      switch (operacao) {
        case "+":
          resultado = a + b;
          break;
        case "-":
          resultado = a - b;
          break;
        case "*":
          resultado = a * b;
          break;
        case "/":
          if (b !== 0) {
            resultado = a / b;
          } else {
            console.log("Erro: Divisão por zero!");
            rl.close();
            return;
          }
          break;
        default:
          console.log("Operação inválida!");
          rl.close();
          return;
      }

      console.log(`O resultado de ${a} ${operacao} ${b} é: ${resultado}`);
      rl.close();
    });
  });
});
