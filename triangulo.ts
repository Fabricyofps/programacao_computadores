// tipo_triangulo.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function formaTriangulo(a: number, b: number, c: number): boolean {
  // Regra do triângulo: a + b > c, a + c > b, b + c > a
  return a + b > c && a + c > b && b + c > a;
}

function tipoTriangulo(a: number, b: number, c: number): string {
  if (!formaTriangulo(a, b, c)) {
    return "Não forma um triângulo.";
  } else if (a === b && b === c) {
    return "Triângulo Equilátero.";
  } else if (a === b || b === c || a === c) {
    return "Triângulo Isósceles.";
  } else {
    return "Triângulo Escaleno.";
  }
}

rl.question("Digite o primeiro lado: ", (input1) => {
  const lado1 = parseFloat(input1);

  rl.question("Digite o segundo lado: ", (input2) => {
    const lado2 = parseFloat(input2);

    rl.question("Digite o terceiro lado: ", (input3) => {
      const lado3 = parseFloat(input3);

      const resultado = tipoTriangulo(lado1, lado2, lado3);
      console.log(resultado);

      rl.close();
    });
  });
});
