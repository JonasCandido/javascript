var vet = []
var num = window.document.getElementById('txtn')
var sel = window.document.getElementById('sel')
var res = window.document.getElementById('res')

function adicionar(){
    if (num.value.length == 0 || vet.includes(Number(num.value)) || Number(num.value) > 100 || Number(num.value) < 1){
        window.alert('Valor inválido ou já encontrado na lista')
    } else{
        res.innerHTML = ""
        vet.push(Number(num.value))  
        let op = document.createElement('option')
        for (let i in vet){
            op.text = `Valor ${vet[i]} adicionado.` 
            op.value = `op${i}` 
            sel.appendChild(op)
        } 
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(vet.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        let s = 0
        let maior = vet[0]
        let menor = vet[0]
        for (i in vet){
            atual = vet[i]
            if (atual > maior){
                maior = atual
            } else if (atual < menor){
                menor = atual
            }
            s += vet[i]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${vet.length} número cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} .</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${s}.`
        res.innerHTML += `<p>A média dos valores digitados é ${s/vet.length}.</p>`
    }
}