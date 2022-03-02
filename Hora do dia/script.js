
function load(){
    var tempo = new Date();
    var hora = tempo.getHours();



    var tagP = document.getElementById('text');
    tagP.innerHTML =`Agora são ${hora} horas.`;

    let cabeçalho = document.getElementsByTagName('header')[0];
    let corpo = document.getElementsByTagName('main')[0];
    let rodapé = document.getElementsByTagName('footer')[0]; 
    let img = document.getElementById('img');

    if ( hora >= 6 && hora < 12){
        img.src = 'image/manha.png';
        cabeçalho.style.backgroundColor = ('#FAAC82');
        corpo.style.backgroundColor = ('#E3B282');
        rodapé.style.backgroundColor = ('#FAAC82');
    } else if (hora >= 12 && hora < 18){
        img.src = 'image/tarde.png';
        cabeçalho.style.backgroundColor = ('#FD7638');
        corpo.style.backgroundColor = ('#E38432');
        rodapé.style.backgroundColor = ('#FD7638');
    } else {
        img.src = 'image/noite.png';
        cabeçalho.style.backgroundColor = ('#185257');
        corpo.style.backgroundColor = ('#154D41');
        rodapé.style.backgroundColor = ('#185257');
    }
}