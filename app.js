function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);
  let diferenca = ate - de

  if (ate <= de){
    alert(`Digite um número maior que ${de}`)
    return
  } 
  
  if(quantidade > (diferenca)){
    alert(`Digite uma quantidade de numeros para ser sorteado menor que ${diferenca}`)
    return
  }

  let sorteados =[];
 
  for (let i = 0; i < quantidade; i++) {
    let numero = gerarNumeroAleatorio(de, ate);
    
    while (sorteados.includes(numero)) {
      numero = gerarNumeroAleatorio(de, ate);
    }
    sorteados.push(numero);
  } 

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
}
 
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
}

