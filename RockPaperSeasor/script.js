let userScore= 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score"); 


let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    // rock ,paper,scisssors

    const option = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}


const showWinner = (userWin) =>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!")
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!")
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red"
    }
}

const drawGame = () => {
    console.log("game was draw...");
    msg.innerText = "Game Draw play Again....";
        msg.style.backgroundColor = "black";
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    
    // generate computer choice 
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);


    if(userChoice === compChoice)
    {
        // Draw  game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){

            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors")
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
    

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});