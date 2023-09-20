function calcular (){
    var num1 = parseInt(window.document.getElementById('num1').value)
    var num2 = parseInt(window.document.getElementById('num2').value)
    var num3 = parseInt(window.document.getElementById('num3').value)
    var res = window.document.getElementById('res')
    s = soma(num1,num2,num3)
    m = s/3
    res.innerHTML = 'A soma do três números é ' + s + ' e a média deles é ' +  m 
    
}

function soma(num1,num2,num3){
    return num1 + num2 + num3
}