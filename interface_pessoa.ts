// Definindo uma interface
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // Opcional
  saudar(): string; // Método
}

// Implementando a interface
class Funcionario implements Pessoa {
  nome: string;
  idade: number;
  email: string;
  cargo: string;

  constructor(nome: string, idade: number, email: string, cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.cargo = cargo;
  }

  saudar(): string {
    return `Olá, meu nome é ${this.nome} e sou ${this.cargo}.`;
  }
}

// Usando a interface
const funcionario1: Pessoa = new Funcionario(
  "Alice",
  30,
  "alice@example.com",
  "Gerente de Projetos",
);
console.log(funcionario1.saudar()); // Saída: Olá, meu nome é Alice e sou Gerente de Projetos.

function exibirPessoa(pessoa: Pessoa): void {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  if (pessoa.email) {
    console.log(`Email: ${pessoa.email}`);
  }
}

exibirPessoa(funcionario1);
