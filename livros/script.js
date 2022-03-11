const livrosPorCategoria = [
    {
        categoria: 'Riqueza',
        livros: [
            {
                titulo: 'Os Segredos da Mente Milionária',
                autor: 'T. Harv Eker'
            },
            {
                titulo: 'O homem mais Rico da Babilonia',
                autor: 'George S. Clarson'
            },
            {
                titulo: 'Pai Rico, Pai Pobre',
                autor: 'Robert. T. Kiyosaki e Sharon L. Lechter'
            },
        ],
    },
    {
        categoria: 'Inteligência Emocional',
        livros: [
            {
                titulo: 'Você é Insubstituivel',
                autor: 'Augusto Cury'
            },
            {
                titulo: 'Ansiedade - Como enfrentar o mal do Século',
                autor: 'Augusto Cury'
            },
            {
                titulo: 'O sete hábitos das pessoas altamente eficazes',
                autor: 'Stephen R. Covey'
            },
        ] ,
    },
]

const categorias = livrosPorCategoria.length;

for (let categoria of livrosPorCategoria){
     
    console.log('total de livros da categoria: ' + categoria.categoria + ': ' + categoria.livros.length)
}

for (let livros of livrosPorCategoria){

    console.log('Numeros de autores' + livros.livros.length)
}