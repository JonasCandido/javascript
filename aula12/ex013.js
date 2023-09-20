var agora = new Date()
var diaSem = 0
/*  
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Invalído!')
        break
}

//Faz a mesma coisa só que com if
if (diaSem == 0){
    console.log('Domingo')
} else if (diaSem == 1){
    console.log('Segunda')
} else if (diaSem == 2){
    console.log('Terça')
} else if (diaSem == 3){
    console.log('Quarta')
} else if (diaSem == 4){
    console.log('Quinta')
} else if (diaSem == 5){
    console.log('Sexta')
} else if (diaSem == 6){
    console.log('Sábado')
} else {
    console.log('[ERRO] Dia indefinido!')
}


