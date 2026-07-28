let h1 = document.querySelector("#hello");
h1.textContent = "hello world with mw";
h1.innerHTML = "<i>Hello world is me</i>";

h1.style.backgroundColor = "yellow";

let para = document.querySelector("p");
para.classList.add("demo");


let buttons = document.createElement("button");
buttons.innerText = "Click Me!";
buttons.style.backgroundColor = "blue";

let h = document.querySelector("#hello").appendChild(buttons);
// let a = h.after(buttons);
// console.log(a);

document.querySelector("#hello").removeChild(buttons);


let button = document.querySelector("button");
button.innerText = "download";

button.style.backgroundColor = "blue";
button.style.color = "red";


button.addEventListener("dblclick",function() {
    let ip = prompt("enter url to download image ");
    console.log("url :",ip);

})
