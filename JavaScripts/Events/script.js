let btn = document.querySelector("#btn01");
/*
btn.onclick = () => {
    console.log("Hello");
   
}*/

let box = document.querySelector("div");
box.onmouseover = () =>
{
    console.log("you are inside div")
};

/*
btn.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);

};

box.onmouseover = (e) => {
        console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);

}; */

btn.addEventListener("click",(e) =>{
   
    console.log("button was clicked  : handler 1");
});
btn.addEventListener("click",() =>{
    console.log("button was clicked by handler 2");
});

const handler3 =() =>{
    console.log("button was clicked by handler 3");
};

btn.addEventListener("click" , handler3);

btn.addEventListener("click",() =>{
    console.log("button was clicked by handler 4");
});

btn.removeEventListener("click", handler3);