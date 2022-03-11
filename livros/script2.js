const pessoa = [
    {
        nome: {
            primeiro: 'Gabriel',
            segundo: 'Alves dos Santos'
        },
        idade: 19
    },
    {
        nome: {
            primeiro: 'João',
            segundo: 'Almeida Santos'
        },
        idade: 21
    },
    {
        nome: {
            primeiro: 'Zeneida',
            segundo: 'Alves de Faria'
        },
        idade: 78
    }
]
lista = []
for (let valores of pessoa){
    
    lista.push(valores.nome.primeiro)
    
    
}


const haha = [
    ['oi', 'tchau', 4.3],
    ['tchau', 'oi', 2.9],
    ['vira-lata', 'cagar', 9.7],
    ['cacau', 'amor', 2.9],
    ['gabriel', 'alomoço', 4.3]
]

const filtrado = haha.filter(valor => {
    if (valor[2] > 4.3) return valor
})




console.log(filtrado[0][2])