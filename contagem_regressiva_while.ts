// contagemRegressivaWhile.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número N para iniciar a contagem regressiva: ', (inputN) => {
    const N = parseInt(inputN);

    // Validação da entrada
    if (isNaN(N) || N < 0) {
        console.log('Por favor, insira um número inteiro não negativo.');
    } else {
        console.log(`Contagem regressiva a partir de ${N}:`);
        let i = N; // Inicializa a variável i com o valor de N
        while (i >= 0) {
            console.log(i);
            i--; // Decrementa i a cada iteração
        }
    }
    rl.close();
});