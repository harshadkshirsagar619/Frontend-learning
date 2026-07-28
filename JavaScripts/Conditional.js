

// Conditional Statements

/*
let age = 25;

if(age > 18)
{
    console.log("can vote :",age);
}else{
    console.log("you can't vote");
}  */

let mode = "marngo";
let color;

if(mode === "dark")
{
    color="black";
    console.log(color);
}if (mode === "light") {
    color = "white";
    console.log(color);
} else {
    console.log("no mode found");
}


let a = 11;
if(a % 2 == 0)
{
    console.log(a," : Even number")
} else {
    console.log(a," : odd number")  
}

// ternary oprators

let ages = 16;

let rs =   ages >= 18 ? "can vote" : "cannot vote";
console.log(rs);


// switch statement

let age = 18;
switch(true)
{
    case age < 18:
        console.log("can't vote...");
        break;
    case age >= 18:
        console.log("can vote");
        break;    
     case age > 50:
        console.log("can't vote");
        break;
     default:
        console.log("invalid age");   
}