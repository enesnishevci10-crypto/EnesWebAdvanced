var butoni = document.getElementById("btn1");
var butoni2 = document.getElementById("btn2");
var butoni3 = document.getElementById("btn3");
var butoni4 = document.getElementById("btn4");
var teksti = document.getElementById("teksti");
var butoni5 = document.getElementById("btn5");

butoni.onclick = function(){
    alert("blerja e suksesshme")
}
butoni2.onmouseover = function(){
    alert("mouse permi button")
}

butoni3.onmouseleave = function(){
    alert("Ti e largove mousin prej meje")
}
butoni4.onclick = function(){
    teksti.style.color ="red"
    teksti.style.backgroundColor ="grey"
    teksti.style.fontSize = "40px"
}
butoni5.onclick = function(){
    teksti.style.color ="grey"
    teksti.style.backgroundColor ="green"
    teksti.style.fontSize = "50px"
}