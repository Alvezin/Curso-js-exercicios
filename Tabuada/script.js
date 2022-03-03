function solve(){
    let appear = document.getElementById('appear')
    appear.innerHTML = '';  
    
    let getNum = document.getElementById('num')
    let num = Number(getNum.value);
    
    
    for (var mul = 0; mul <= 10; mul++){
        let item = document.createElement('option');
        let valor = num * mul;
        item.text += `${num}X${mul} = ${valor}`;
        item.value = `tab${mul}`;
        appear.appendChild(item);
    }
    console.log(valor)
}