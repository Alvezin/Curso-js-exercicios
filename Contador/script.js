function solve(){
    let getNum1 = document.getElementById('num1');
    let getNum2 = document.getElementById('num2');
    let getPasso = document.getElementById('passos');
    let text = document.getElementById('text');
    let content = document.getElementById('content');
    

    let num1 = Number(getNum1.value);
    let num2 = Number(getNum2.value);
    let passo = Number(getPasso.value);
    text.innerHTML = '<strong> Resolvendo... <strong/>';
    
    content.innerHTML = '<strong> O resultado é: <strong/>'
    while (num1 <= num2){
        content.innerHTML += `${num1}👉`;
        num1 += passo;
        
    } 
    content.innerHTML += '🏴';
}