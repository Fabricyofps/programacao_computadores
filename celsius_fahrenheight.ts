// celsiusParaFahrenheit.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function celsiusParaFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

rl.question("Digite a temperatura em graus Celsius: ", (input) => {
  const celsius = parseFloat(input);
  if (isNaN(celsius)) {
    console.log("Por favor, insira um número válido para a temperatura.");
  } else {
    const fahrenheit = celsiusParaFahrenheit(celsius);
    console.log(
      `${celsius} graus Celsius é igual a ${fahrenheit.toFixed(
        2
      )} graus Fahrenheit.`
    );
  }
  rl.close();
});
