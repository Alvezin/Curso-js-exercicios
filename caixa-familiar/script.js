let consulta = {
    receita: [10, 62, 37, 60, 100],
    despesa: [20, 50, 60, 80]
}


let receitaFinal = consulta.receita.reduce((a, b) => a + b, 0)
let despesaFinal = consulta.despesa.reduce((a,b) => a + b, 0)

console.log(`Receita: ${receitaFinal}`)
console.log(`Despesa: ${despesaFinal}`)

saldo = receitaFinal - despesaFinal;
console.log(saldo > 0 ? `Saldo positivo: ${saldo}` : `Saldo negativo: ${saldo}`)
