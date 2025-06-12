import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function obterNumero(pergunta: string): Promise<number> {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      const numero = Number(resposta);
      if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, insira um número.");
        obterNumero(pergunta).then(resolve); // Recursivamente solicita um número válido
      } else {
        resolve(numero);
      }
    });
  });
}
async function calculadora() {
  const num1 = await obterNumero("Digite o primeiro número: ");
  const num2 = await obterNumero("Digite o segundo número: ");
  rl.question("Qual operação deseja realizar? (+, -, *, /): ", (operacao) => {
    let resultado: number;
    switch (operacao) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Erro: Divisão por zero!");
          rl.close();
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        console.log("Operação inválida.");
        rl.close();
        return;
    }
    console.log(`O resultado é: ${resultado}`);
    rl.close();
  });
}
calculadora();
