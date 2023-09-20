var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatament ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
}else if(hora < 6){
    console.log('Boa Madrugada')
} else {
    console.log('Boa Noite')
}