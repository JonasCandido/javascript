function menu(){
    var valor = parseInt(window.document.getElementById('val').value)
    var escolha = window.document.getElementsByName('escolha')
    var res = window.document.getElementById('res')
    if (escolha[0].checked==true){
        res.innerHTML = converterCel(valor) + 'ºC'
    }
    
    if (escolha[1].checked==true){
        res.innerHTML = converterFah(valor) + 'F'
    }
}

function converterCel(f){
    return (1.8*f + 32)
}

function converterFah(c){
    return ((c-32)*5/9)
}