function calcular(){
    let numero = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }  else {
        let num = Number(numero.value)
        res.innerHTML = ''
        for (let c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}
