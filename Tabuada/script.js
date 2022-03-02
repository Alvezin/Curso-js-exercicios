function solve(){
    let appear = document.getElementById('appear')
    appear.innerHTML = ''
    
    let getNum = document.getElementById('num')
    let num = Number(getNum.value);
    
    for (var mul = 0; mul <= 10; mul++){
        let valor = num * mul;
        appear.innerHTML += `<li>${num}X${mul} = ${valor}<li/>`;
    }
    console.log(valor)
}