## Preparação do Ambiente de Desenvolvimento

### Programas:

#### Node

Realizar a instalação da versão LTS disponível em: https://nodejs.org/pt

#### Visual Studio Code

Relizar o dowload do site oficial, disponível em: https://code.visualstudio.com

### Extensões Visual Studio Code:

#### Code Runner

Disponível em: https://marketplace-visualstudio-com.translate.goog/items?itemName=formulahendry.code-runner&_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc

#### Configurar para que seja executado no terminal.

Abra as configurações da extensão e vá até:

**Code-runner: Run in Terminal**

Marque a caixa: Wheater to run code in Integrated Terminal.

#### Configurar o Executor Map do Code Runner para Typescript

```
    "typescript": "npx ts-node",
```

## Configurando o ambiente e executando o projeto

- Crie um diretório em seu computador para armazenar os códigos
- Abra este diretório com o Visual Studio Code
- Execute o comando abaixo para permitir a utilização dos tipos do Node.

```
npm install @types/node
```

Para instalar as dependências do projeto:

```
npm install
```

- Crie seu primeiro arquivo: `hello_world.ts`

- Adicione o seguinte conteúdo:

```
function hello() {
  console.log("Hello world!");
}

hello();
```

Execute com o Code Runner.
