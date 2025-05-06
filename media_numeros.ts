// media.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularMedia(numeros: number[]): number {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
}

rl.question("Digite o primeiro número: ", (input1) => {
  const num1 = parseFloat(input1);

  rl.question("Digite o segundo número: ", (input2) => {
    const num2 = parseFloat(input2);

    rl.question("Digite o terceiro número: ", (input3) => {
      const num3 = parseFloat(input3);
      const media = calcularMedia([num1, num2, num3]);
      console.log(`A média de ${num1}, ${num2} e ${num3} é ${media.toFixed(2)}`);
      rl.close();
    });
  });
});

// Método reduce: O método reduce é uma função de array em JavaScript
//  (e, por extensão, em TypeScript) que aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.

// Parâmetros do reduce:

// O primeiro parâmetro é uma função de callback que recebe dois argumentos:
// acc: O acumulador, que mantém o valor acumulado ao longo das iterações.
// num: O elemento atual do array que está sendo processado.
// O segundo parâmetro (neste caso, 0) é o valor inicial do acumulador. Isso significa que, na primeira iteração, acc começará com o valor 0.
// Função de callback:

// A função de callback (acc, num) => acc + num é chamada para cada elemento do array numeros.
// Em cada iteração, o valor atual do acumulador (acc) é somado ao valor atual do elemento (num), e o resultado se torna o novo valor do acumulador para a próxima iteração.
// Exemplo de Funcionamento
// Suponha que numeros seja um array com os valores [5, 10, 15]. O funcionamento do reduce seria assim:

// Iteração 1:

// acc = 0 (valor inicial)
// num = 5
// soma = 0 + 5 = 5
// Iteração 2:

// acc = 5 (resultado da iteração anterior)
// num = 10
// soma = 5 + 10 = 15
// Iteração 3:

// acc = 15 (resultado da iteração anterior)
// num = 15
// soma = 15 + 15 = 30
// Após todas as iterações, o valor final de soma será 30, que é a soma de todos os números no array.

// Resumo
// Portanto, a linha const soma = numeros.reduce((acc, num) => acc + num, 0); calcula a soma de todos os números no array numeros e armazena o resultado na variável soma.1
