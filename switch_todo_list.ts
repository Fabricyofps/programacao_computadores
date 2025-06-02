import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tarefas: string[] = [];

function mostrarMenu() {
  console.log("\nSistema de Tarefas:");
  console.log("1 - Adicionar tarefa");
  console.log("2 - Listar tarefas");
  console.log("3 - Remover tarefa");
  console.log("4 - Sair");
}

function main() {
  mostrarMenu();
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite a tarefa para adicionar: ", (tarefa) => {
          tarefas.push(tarefa);
          console.log(`Tarefa "${tarefa}" adicionada!`);
          main();
        });
        break;
      case "2":
        if (tarefas.length === 0) {
          console.log("Nenhuma tarefa cadastrada.");
        } else {
          console.log("Tarefas cadastradas:");
          tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
          });
        }
        main();
        break;
      case "3":
        if (tarefas.length === 0) {
          console.log("Nenhuma tarefa para remover.");
          main();
        } else {
          rl.question("Digite o número da tarefa para remover: ", (num) => {
            const index = parseInt(num) - 1;
            if (index >= 0 && index < tarefas.length) {
              const removida = tarefas.splice(index, 1);
              console.log(`Tarefa "${removida}" removida!`);
            } else {
              console.log("Número inválido!");
            }
            main();
          });
        }
        break;
      case "4":
        console.log("Saindo do sistema...");
        rl.close();
        break;
      default:
        console.log("Opção inválida! Tente novamente.");
        main();
        break;
    }
  });
}

main();
