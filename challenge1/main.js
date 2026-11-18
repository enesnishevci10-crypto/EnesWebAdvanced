var butoni1 = document.getElementById("btn1");
var butoni2 = document.getElementById("btn2");
var butoni3 = document.getElementById("btn3");
var circle = document.getElementById("circle");
var triangle = document.getElementById("triangle");
var rectangle = document.getElementById("rectangle");

butoni1.onclick = function(){
    circle.style.backgroundColor ="red";
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.borderRadius = "50%";
}

butoni2.onclick = function(){
    triangle.style.width = "0px";
    triangle.style.height = "0px";
    triangle.style.borderLeft = "50px";
    triangle.style.borderRight = "50px";
    triangle.style.borderBottom = "100px";
    triangle.style.backgroundColor = "red";
}

butoni3.onclick = function() {
    rectangle.style.width = "150px";
    rectangle.style.height = "100px"
    rectangle.style.backgroundColor = "red";
}
