function mul(num) {
  let x = [];
  for (let i = 0; i <= num; i++) {
      x[i] = [[i * 0],[i * 1],[i * 2],[i * 3],[i * 4],[i * 5],[i * 6],[i * 7],[i * 8],[i * 9],[i * 10]]
  }

  console.table(x)
}
console.log(mul(10))

/* código inacabado ainda (fiz somente com um loop)
 Ao contrario do console do CMD
 no console do navegador não se mostra os resultados corretos
 [ mostra somente Array(1) ]
*/