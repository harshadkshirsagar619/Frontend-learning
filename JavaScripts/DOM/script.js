
//document.body.childNodes[3].innerText = "hmk";

/*
let heading = document.getElementById("head");
console.dir(heading)
console.log(heading);

let clases = document.getElementsByClassName("demo");
console.dir(clases);
console.log(clases);

let para = document.getElementsByTagName("p");
console.dir(para);

let element = document.querySelectorAll("p");
console.dir(element);


//let ele = document.querySelector(".demo");
//console.dir(ele);

let element = document.querySelectorAll(".hello");
console.dir(element);

let divs = document.querySelector("div");
console.dir(divs); 

let div = document.querySelector(".demo");
console.log(div);

let Slass = div.getAttribute("class");
console.log(Slass);

let p = document.querySelector("p")
console.log(p.getAttribute("id"));

let para = document.querySelector("div");
console.log(para.setAttribute("class","myclass"));

let ids = document.querySelector("p");
console.log(ids.setAttribute("id","newId"));

let s = document.querySelector("div");

s.style.backgroundColor = "green";
s.style.backgroundColor = "purple";
s.style.color= "white";

s.innerText = "Hi I am Hashad From Maharashtra I live in pune..";
*/

let element = document.createElement("button");
 element.innerText = "Chick Me!"
console.log(element);

let div = document.querySelector("p");
div.append(element);

div.prepend(element);

div.before(element);

div.after(element);