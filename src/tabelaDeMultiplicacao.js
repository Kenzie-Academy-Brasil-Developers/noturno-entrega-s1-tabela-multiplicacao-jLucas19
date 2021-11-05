//Atividade Kenzie 45 - [Tabela De Multiplicação]

function tabelaDeMultiplicacao(num) {
  let matriz = []

    for (let valor1=0 ; valor1<=num ; valor1++) {
      matriz[valor1] = [] 

    for (let valor2=0 ; valor2<=num ; valor2++) {
      matriz[valor1][valor2] = valor1 * valor2
    }
  }
console.table(matriz)
}
console.log(tabelaDeMultiplicacao(12))