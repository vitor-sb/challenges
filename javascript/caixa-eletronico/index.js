
const notas = [100, 50, 20, 10];

function validaErro (valor) {
  if (valor === 0 || isNaN(valor))
    throw Error('Selecione um valor para o saque')

  if(valor % Math.min(...notas) !== 0) 
    throw Error('Não é possível realizar o saque')
}

function calcularNotas (valor) {
  validaErro(valor);
  
  let valorSaque = valor;
  const notasEntregues = [];

  for(let nota of notas) {
    const qtdNotas =  Math.floor(valorSaque/nota);
    valorSaque -= qtdNotas*nota;
    
    if(qtdNotas > 0) notasEntregues.push({qtdNotas: qtdNotas, nota: nota});
    
    if(valorSaque === 0 )
      break;
  }
  return notasEntregues;
}

function retornoCaixa (valorCaixa) {
  const saque = calcularNotas(valorCaixa);
  console.log('Valor do saque: ', valorCaixa);
  console.log('Entregar: ');
  
  for(nota of saque) {
  console.log(nota.qtdNotas, ' notas de R$', nota.nota)
  };
}

retornoCaixa(380);
