

function cel(valorFah){
    let cel = (valorFah - 32) * 5 / 9
    return console.log(`${cel.toFixed(2)}Cº`)
}


function fah(valorCel){
    let fah = valorCel * 9 / 5 + 32
    return console.log(`${fah.toFixed(2)}Fº`)
}
cel(90)
fah(32)