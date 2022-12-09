/*
- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;


Bora praticar e rever tudo o que foi ensinado na aula? 

Nesse desafio você irá criar uma lista de **estudantes** e, cada 
estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "vini",
    firstNote: 10,
    secondNote: 10,
    treeNote: 1
  },
  {
    name: "João",
    firstNote: 7,
    secondNote: 6,
    treeNote: 9
  },
  {
    name: "Pedro",
    firstNote: 4,
    secondNote: 2,
    treeNote: 3
  },
  {
    name: "Guilherme",
    firstNote: 10,
    secondNote: 8,
    treeNote: 9
  }
]

 let result = 0

function score(number1, number2, number3) {
  result = ((number1 + number2 + number3) / 3).toFixed(1)
  return result
}

let studentsName = []

for (let student of students) {
  studentsName.push(student.name, score(student.firstNote, student.secondNote, student.treeNote))
}

let indexScore = 1
let indexName = 0

for(indexName; indexName < 8;){

  if (studentsName[indexScore] >= 7){
    alert(` parabéns ${studentsName[indexName]} vc foi aprovado(a) com uma média de: ${studentsName[indexScore]}!`)
  } else {
    alert(` Infelizmente ${studentsName[indexName]} estude mais na próxima vez vc foi reprovado com uma média de: ${studentsName[indexScore]}!`)
  }

  indexName = indexName + 2
  indexScore = indexScore + 2
}


// if (studentsName[1] >= 7 ) {
//   alert('Parabés, Vini você foi aprovado')
// } else {
//   alert('Não foi dessa vez Vini, estude mais na proxima')
// }

// if (studentsName[3] >= 7 ) {
//   alert('Parabés, Vini você foi aprovado')
// } else {
//   alert('Não foi dessa vez Vini, estude mais na proxima')
// }

// if (studentsName[5] >= 7 ) {
//   alert('Parabés, Vini você foi aprovado')
// } else {
//   alert('Não foi dessa vez Vini, estude mais na proxima')
// }

// if (studentsName[7] >= 7 ) {
//   alert('Parabés, Vini você foi aprovado')
// } else {
//   alert('Não foi dessa vez Vini, estude mais na proxima')
// }