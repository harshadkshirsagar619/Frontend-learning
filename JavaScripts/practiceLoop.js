//pactice Q. 01
/*
for(let i = 2;i<=50;i+=2)
{
    console.log("even :",i);
}   */


    //pactice Q. 02

let gameNum = 25;

let Usernum = prompt("Guess the game number");
console.log(Usernum);

while(Usernum != gameNum)
{
  let Usernum = prompt("you entered Wrong number Guess the game number Again");   
}

console.log("Congrates You Enter Right Number :",gameNum);