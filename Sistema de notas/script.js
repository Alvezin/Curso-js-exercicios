function verificar(){
    let nota = Number(document.getElementById('nota').value);
    console.log(typeof(nota))

    try{
        if (nota == false) throw "Somente valores numéricos são válidos nesse campo."

        if (nota > 90){
            alert(`Sua nota é A`)
        } else if (nota >= 80 && nota <= 89){
            alert(`Sua nota é B`)
        } else if (nota >= 70 && nota <= 79){
            alert(`Sua nota é C`)
        } else if (nota >= 60&& nota <= 69){
            alert(`Sua nota é D`)
        } else {
            alert(`Sua nota é F`)
        }
    } catch(erro){
        alert(erro)
    } finally{
        document.getElementById('nota').value = '';
    }
}
