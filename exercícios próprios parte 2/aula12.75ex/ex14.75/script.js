function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}