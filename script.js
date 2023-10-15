var r=document.querySelector("#red");
var r1=0;
var r2=0;
var r3=0;
var string="rgb"+"("+r1+","+r2+","+r3+")";
var s=document.querySelector("#upper");
r.addEventListener("input",function display()
{
    r1=r.value;
    string="rgb"+"("+r1+","+r2+","+r3+")";
    dispplay();
})

var g=document.querySelector("#green");

g.addEventListener("input",function display()
{
    r2=g.value;
    string="rgb"+"("+r1+","+r2+","+r3+")";
    dispplay();
})

var b=document.querySelector("#blue");

b.addEventListener("input",function display()
{
    r3=b.value;
    string="rgb"+"("+r1+","+r2+","+r3+")";
    dispplay();
})

function dispplay()
{
    s.innerHTML=string;
    console.log("hiiiiii");
    s.style.backgroundColor=string;
}

