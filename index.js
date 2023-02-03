// Código
// Declarando variáveis
let entradaInteiros = [12, 4, 5];
let listaContínua = [];
let medianaListaContínua;

// *Adicione o número inteiro a uma lista contínua de inteiros.
for (let i = 0; i < entradaInteiros.length; i++) {
  listaContínua.push(entradaInteiros[i]);

  // *Encontre a mediana da lista atualizada (ou seja, para o primeiro elemento até o N elemento adicionado a lista.
  listaContínua.sort(function (a, b) {
    return a - b;
  });

  // *Imprima a mediana atualizada em uma nova linha. O valor impresso deve ser um número de precisão dupla escalado para casas decimais (ou seja 12.4, formato).
  if (listaContínua.length % 2 !== 0) {
    medianaListaContínua = listaContínua[Math.floor(listaContínua.length / 2)];
    console.log(medianaListaContínua.toFixed(1));
  } else {
    let medianaUm = listaContínua[listaContínua.length / 2 - 1];
    let medianaDois = listaContínua[listaContínua.length / 2];

    medianaListaContínua = (medianaUm + medianaDois) / 2;

    console.log(medianaListaContínua.toFixed(1));
  }
}
