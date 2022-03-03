function solve(){
    let text = document.getElementById('text');
    let getNum = document.getElementById('num');
    let num = getNum.value;
    let values = num.split(" ")
    let values_reverse = values.slice(0).reverse()
    
    
    
    text.innerHTML = `<p>Array: ${values} <p/> <p>Array-invertido: ${values_reverse} <p/>`
    console.log(values)
}