// um comando o qual não se deve esquecer
// git remote add origins https://github.com/andreyferraz/w3schools-JS.git 
// com isso podemos adicionar o repositório remotamente

//exibindo uma frase no proprio corpo do documento 
function frase(){
    document.getElementById("paragrafo").innerHTML = "Obrigado por fazer essa compra";
}

//buscando imagens e associando ao id
function ligaLampada(){
   document.getElementById('lampada').src = './img/pic_bulbon.gif'; 
}

function desligaLampada(){
    document.getElementById('lampada').src = './img/pic_bulboff.gif'
}

//alterando o tamanho da fonte da tag
function zoomMaior(){
    document.getElementById('txtZoom').style.fontSize = "35px";
}

//escondendo elemento com um clique
function ocultarTexto(){
    document.getElementById('txtOcultar').style.display = "none";
}

//mostrando elemento que esta oculto na página
function mostrarElemento(){
    document.getElementById('imgOculta').style.display = 'block';
}
