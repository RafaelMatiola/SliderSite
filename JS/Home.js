let fotos = ["img1.png", "img2.jpg", "img3.jpg"];
function trocarFoto(foto){
    document.querySelector(".slider-fotos").src =
        "img/" + fotos[foto];
}
let fotoAtual = 0;
trocarFoto(fotoAtual);
setInterval(function(){
    fotoAtual++;
    if (fotoAtual > 2){
        fotoAtual = 0;
    }
    trocarFoto(fotoAtual);
} , 3000);
document.querySelector("#bt-foto0").addEventListener("click", function () {
    trocarFoto(0);
});
document.querySelector("#bt-foto1").addEventListener("click", function () {
    trocarFoto(1)
});
document.querySelector("#bt-foto2").addEventListener("click", function () {
    trocarFoto(2);
});
document.querySelector("#voltar1").addEventListener("click", function () {
    trocarFoto(fotoAtual);
        fotoAtual--;
    if (fotoAtual < 0){
        fotoAtual = 2;
    }
});
document.querySelector("#avancar1").addEventListener("click", function () {
    trocarFoto(fotoAtual);
        fotoAtual++;
    if (fotoAtual > 2){
        fotoAtual = 0;
    }
});