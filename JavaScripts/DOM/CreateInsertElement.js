let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("div");

//div.append(newBtn);

//div.prepend(newBtn);
//div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h2");

newHeading.innerHTML = "<b>Hello Studing JavaScript</b>";
console.log(newHeading);

let heading = document.querySelector("div")

heading.prepend(newHeading);


// delete 

let p = document.querySelector(".para");

p.remove();

newHeading.remove();