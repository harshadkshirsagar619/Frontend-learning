let div= document.querySelector("div");
console.log(div);

let ids = div.getAttribute("id");
console.log(ids);


let para = document.querySelector(".para");

let par = para.getAttribute("class");
console.log(par);

//set artirbutes

let demo = document.querySelector("p");

let d = demo.setAttribute("class","newClass");
console.log(d);

let mydemo = document.querySelector("div");

let my = mydemo.setAttribute("id","newId");
console.log(my);