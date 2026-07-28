let modeBtn = document.querySelector("button");
let currentMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click" , () => {
    if(currentMode === "light")
    {
        currentMode = "black";
        body.classList.add(".dark");
    }else{
        currentMode = "light";
        body.classList.add(".light");
    }

    console.log(currentMode)
});