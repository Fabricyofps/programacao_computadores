// contagemRegressiva.ts
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
        for (let i = N; i >= 0; i--) {
            console.log(i);
        }
    }
    rl.close();
});