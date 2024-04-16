function tocaSom (idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let count = 0;

while (count < listaDeTeclas.length){
    listaDeTeclas[count].onclick = function () {
        tocaSom();
    }
    count++;
}