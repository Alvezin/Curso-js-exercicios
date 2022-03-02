function verificar(){
    let getAno = document.getElementById('ano');
    ano_nas = Number(getAno.value);
    getAnoAtual = new Date();
    anoAtual = getAnoAtual.getFullYear();   
    let idade = anoAtual - ano_nas; //idade atual 

    let getGender = document.getElementsByName('genero');
    let genero = 'null'; //criar a variável para preenche-la após o primeiro if

    let text = document.getElementById('text');
    let img = document.getElementById('img');           //trazer a tag de imagem

   if (getGender[0].checked){
       genero = 'masc';
   } else {                     //If para descobrir qual genero que foi selecionado
       genero = 'fem'
   }

   if (ano_nas == 0 || ano_nas > anoAtual) {
       window.alert('verifique os dados e tente novamente') // se por acaso o ano estiver incorreto
   } else{
        if (genero == 'masc'){
            if (idade >= 0 && idade <= 12 ){
                text.innerHTML = `Detectamos <strong>criaça com ${idade} anos<strong/>`
                img.src = 'image/criança_menino.png';
            } else if (idade > 12 && idade < 18) {
                text.innerHTML = `Detectamos <strong>adolescente com ${idade} anos<strong/>`
                img.src = 'image/garoto.png';
            } else if (idade > 18 && idade < 30){
                text.innerHTML = `Detectamos <strong>jovem com ${idade} anos<strong/>`
                img.src = 'image/jovem_garoto.png';
            } else if (idade >= 30 && idade < 60) {
                text.innerHTML = `Detectamos <strong>homem com ${idade} anos<strong/>`
                img.src = 'image/homem.png';
            } else if (idade > 60) {
                text.innerHTML = `Detectamos <strong>idoso com ${idade} anos<strong/>`
                img.src = 'image/idoso.png';
            }

        } else if (genero == 'fem') {
            if (idade >= 0 && idade <= 12 ){
                text.innerHTML = `Detectamos <strong>criaça com ${idade} anos<strong/>`
                img.src = 'image/criança_menina.png';
            } else if (idade > 12 && idade < 18) {
                text.innerHTML = `Detectamos <strong>adolescente com ${idade} anos<strong/>`
                img.src = 'image/garota.png';
            } else if (idade > 18 && idade < 30){
                text.innerHTML = `Detectamos <strong>jovem com ${idade} anos<strong/>`
                img.src = 'image/jovem_garota.png';
            } else if (idade >= 30 && idade < 60) {
                text.innerHTML = `Detectamos <strong>mulher com ${idade} anos<strong/>`
                img.src = 'image/mulher.png';
            } else if (idade > 60) {
                text.innerHTML = `Detectamos <strong>idosa com ${idade} anos<strong/>`
                img.src = 'image/idosa.png';
            }
        }
   }

    

    
}
