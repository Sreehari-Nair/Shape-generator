let button=document.getElementById("button")

var numberInTheShape=1;
var oldValue=0;

button.onclick=()=>{
let n=document.getElementById("number").value;
const circle=document.getElementById("circle")
const square=document.getElementById("square")
const rect=document.getElementById("rectangle")
const $box=document.getElementById("box")

n=Number(oldValue)+Number(n);
for(var j=numberInTheShape;j<=n;j++){
var shape=document.createElement("div")
shape.innerHTML+=numberInTheShape;
if(circle.checked){
shape.classList.add("circle")
}
else if(rect.checked){
shape.classList.add("rectangle")
}
else if(square.checked){
shape.classList.add("square")
}
else {
document.write("invalid output")
}

$box.appendChild(shape);
numberInTheShape++;
oldValue=document.getElementById("box").lastElementChild.innerHTML;
}
};