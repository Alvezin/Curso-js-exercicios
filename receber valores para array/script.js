function solve(){
    let getNum1 = document.getElementById('num1');
    let getNum2 = document.getElementById('num2');
    let getNum3 = document.getElementById('num3');
    let text = document.getElementById('text');
    
    let num1 = Number(getNum1.value);
    let num2 = Number(getNum2.value);
    let num3 = Number(getNum3.value);

    const lista = [];
    console.log(num1.lenght)

    if (num1 == '' || num2 == ''|| num3 == ''){
        window.alert("valores não definidos serão '0'")

    }
    lista.unshift(num1, num2, num3)
    console.log(lista)
    text.innerHTML = `Sua lista invertida: <strong>${lista.slice(0).reverse()}<strong/>`
    /*nesse caso o slice foi utilizado para "criar" uma nova lista
    para, depois usar um reverse, que inverte o indice dos elementos, 
    nessa nova lsta*/
    
    
}