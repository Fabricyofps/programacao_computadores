// pedra_papel_tesoura.ts
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opcoes = ["pedra", "papel", "tesoura"];

function obterVencedor(jogador: string, computador: string): string {
  if (jogador === computador) return "Empate!";
  if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    return "Você venceu!";
  }
  return "Computador venceu!";
}

rl.question("Escolha pedra, papel ou tesoura: ", (input) => {
  const jogador = input.toLowerCase();
  if (!opcoes.includes(jogador)) {
    console.log("Opção inválida!");
    rl.close();
    return;
  }
  const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
  console.log(`Computador escolheu: ${computador}`);
  console.log(obterVencedor(jogador, computador));
  rl.close();
});
