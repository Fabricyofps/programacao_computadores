// perimetroRetangulo.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPerimetro(largura: number, altura: number): number {
    return 2 * (largura + altura);
}

rl.question('Digite a largura do retângulo: ', (inputLargura) => {
    const largura = parseFloat(inputLargura);

    rl.question('Digite a altura do retângulo: ', (inputAltura) => {
        const altura = parseFloat(inputAltura);

        // Validação se os valores formam um retângulo
        if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
            console.log('Por favor, insira valores válidos e positivos para largura e altura.');
        } else {
            const perimetro = calcularPerimetro(largura, altura);
            console.log(`O perímetro do retângulo com largura ${largura} e altura ${altura} é ${perimetro}.`);
        }
        rl.close();
    });
});