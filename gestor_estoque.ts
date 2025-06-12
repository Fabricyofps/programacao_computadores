import * as readline from "readline";

type Categoria = "Eletrônicos" | "Alimentos" | "Roupas" | "Livros" | "Outros";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  categoria: Categoria;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(texto: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta));
  });
}

async function obterNumero(pergunta: string, permitirZero = true): Promise<number> {
  while (true) {
    const resposta = await perguntar(pergunta);
    const numero = Number(resposta);
    if (!isNaN(numero) && (permitirZero || numero > 0)) {
      return numero;
    }
    console.log("Entrada inválida. Por favor digite um número válido.");
  }
}

async function obterCategoria(): Promise<Categoria> {
  const categorias: Categoria[] = ["Eletrônicos", "Alimentos", "Roupas", "Livros", "Outros"];
  while (true) {
    console.log("Categorias disponíveis:");
    categorias.forEach((c, i) => console.log(`  ${i + 1}. ${c}`));
    const escolha = await obterNumero("Escolha a categoria pelo número: ");
    if (escolha >= 1 && escolha <= categorias.length) {
      return categorias[escolha - 1];
    }
    console.log("Categoria inválida. Tente novamente.");
  }
}

class Estoque {
  private produtos: Produto[] = [];
  private proximoId = 1;

  adicionarProduto(produto: Omit<Produto, "id">): Produto {
    const novo: Produto = { ...produto, id: this.proximoId++ };
    this.produtos.push(novo);
    return novo;
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  buscarProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  removerProduto(id: number): boolean {
    const indice = this.produtos.findIndex((p) => p.id === id);
    if (indice >= 0) {
      this.produtos.splice(indice, 1);
      return true;
    }
    return false;
  }

  atualizarQuantidade(id: number, novaQuantidade: number): boolean {
    const produto = this.buscarProdutoPorId(id);
    if (produto) {
      produto.quantidade = novaQuantidade;
      return true;
    }
    return false;
  }
}

async function menu(estoque: Estoque) {
  while (true) {
    console.log(`

===== GERENCIADOR DE ESTOQUE =====
1 - Adicionar produto
2 - Listar produtos
3 - Remover produto
4 - Atualizar quantidade
5 - Sair
`);

    const opcao = await perguntar("Escolha uma opção: ");
    switch (opcao.trim()) {
      case "1":
        await adicionarProdutoMenu(estoque);
        break;
      case "2":
        listarProdutosMenu(estoque);
        break;
      case "3":
        await removerProdutoMenu(estoque);
        break;
      case "4":
        await atualizarQuantidadeMenu(estoque);
        break;
      case "5":
        console.log("Saindo... Obrigado!");
        rl.close();
        process.exit(0);
        break;
      default:
        console.log("Opção inválida, tente novamente.");
    }
  }
}

async function adicionarProdutoMenu(estoque: Estoque) {
  console.log("--- Adicionar Produto ---");
  const nome = (await perguntar("Nome do produto: ")).trim();
  const preco = await obterNumero("Preço do produto (ex: 34.90): ", false);
  const quantidade = await obterNumero("Quantidade em estoque: ", true);
  const categoria = await obterCategoria();

  const novoProduto = estoque.adicionarProduto({ nome, preco, quantidade, categoria });
  console.log(`Produto "${novoProduto.nome}" adicionado com ID ${novoProduto.id}.`);
}

function listarProdutosMenu(estoque: Estoque) {
  console.log("--- Lista de Produtos ---");
  const produtos = estoque.listarProdutos();
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
    return;
  }
  produtos.forEach((p) => {
    console.log(
      `ID: ${p.id} | Nome: ${p.nome} | Categoria: ${p.categoria} | Preço: R$ ${p.preco.toFixed(
        2,
      )} | Quantidade: ${p.quantidade}`,
    );
  });
}

async function removerProdutoMenu(estoque: Estoque) {
  console.log("--- Remover Produto ---");
  const id = await obterNumero("Digite o ID do produto que deseja remover: ");
  const sucesso = estoque.removerProduto(id);
  if (sucesso) {
    console.log(`Produto com ID ${id} removido com sucesso.`);
  } else {
    console.log(`Produto com ID ${id} não encontrado.`);
  }
}

async function atualizarQuantidadeMenu(estoque: Estoque) {
  console.log("--- Atualizar Quantidade ---");
  const id = await obterNumero("Digite o ID do produto a atualizar: ");
  const produto = estoque.buscarProdutoPorId(id);
  if (!produto) {
    console.log(`Produto com ID ${id} não encontrado.`);
    return;
  }
  console.log(`Produto encontrado: ${produto.nome} (Quantidade atual: ${produto.quantidade})`);
  const novaQuantidade = await obterNumero("Nova quantidade: ", true);
  estoque.atualizarQuantidade(id, novaQuantidade);
  console.log(`Quantidade atualizada para ${novaQuantidade}.`);
}

async function main() {
  console.log("Bem-vindo ao Gerenciador de Estoque!");
  const estoque = new Estoque();
  await menu(estoque);
}

// Iniciar o programa
main();
