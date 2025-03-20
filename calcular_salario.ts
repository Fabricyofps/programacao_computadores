// salarioSemanal.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalarioSemanal(horasTrabalhadas: number, taxaPorHora: number): number {
    return horasTrabalhadas * taxaPorHora;
}

rl.question('Digite o número de horas trabalhadas na semana: ', (inputHoras) => {
    const horasTrabalhadas = parseFloat(inputHoras);

    rl.question('Digite a taxa por hora: ', (inputTaxa) => {
        const taxaPorHora = parseFloat(inputTaxa);

        // Validação da entrada
        if (isNaN(horasTrabalhadas) || isNaN(taxaPorHora) || horasTrabalhadas < 0 || taxaPorHora < 0) {
            console.log('Por favor, insira valores válidos e não negativos para horas trabalhadas e taxa por hora.');
        } else {
            const salarioSemanal = calcularSalarioSemanal(horasTrabalhadas, taxaPorHora);
            console.log(`O salário semanal é R$ ${salarioSemanal.toFixed(2)}.`);
        }
        rl.close();
    });
});