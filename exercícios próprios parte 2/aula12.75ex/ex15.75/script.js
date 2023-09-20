function verificar(){
    data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fsex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = "Homem"
            if (idade <= 10){
                //Criança
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 20){
                //Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            gênero = "Mulher"
            if (idade <= 10){
               //Criança
               img.setAttribute('src', 'bebemulher.jpg')
            } else if (idade < 20){
               //Jovem
               img.setAttribute('src', 'jovemmulher.jpg')
            } else if (idade < 50){
              //Adulto
              img.setAttribute('src', 'mulheradulta.jpg')
            } else {
              //Idoso
              img.setAttribute('src', 'idosomulher.jpg')
            }
           
        }      
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}