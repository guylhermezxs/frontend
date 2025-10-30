let idade1 = 25;
let idade2 = 30;

console.log('Idade 1 é maior que Idade 2: ' + (idade1 > idade2));
console.log('Idade 1 é menor ou igual a Idade 2: ' + (idade1 <= idade2));

console.log('= Comparando conteúdo =');
console.log('Idade 1 é igual a Idade 2: ' + (idade1 == idade2));

console.log('= Comparando tipo e conteúdo =');
console.log('Idade 1 é igual a Idade 2: ' + (idade1 === idade2));

console.log('= Diferente de =');
console.log('Idade 1 é diferente de Idade 2: ' + (idade1 != idade2));
console.log('Idade 1 é diferente de Idade 2 (tipo e conteúdo): ' + (idade1 !== idade2));

consolee.log(' && AND')
console.log('Idade 1 é maior que 20 AND Idade 2 é menor que 40: ' + (idade1 > 20 && idade2 < 40));

console.log(' || OR')
console.log('Idade 1 é menor que 20 OR Idade 2 é menor que 40: ' + (idade1 < 20 || idade2 < 40));

console.log(' ! NOT')
console.log('NOT (Idade 1 é maior que Idade 2): ' + !(idade1 > idade2));
