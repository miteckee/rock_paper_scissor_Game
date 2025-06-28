let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genBotChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    console.log ("game was Draw");
    msg.innerText = "Game Draw";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!");
        msg.innerText = "You Win";
    }else {
        console.log("you lose");
        msg.innerText = "You Lose";
    }
};

const playGame = (Userchoice) => {
     console.log("user choice =", Userchoice);
     const compChoice = genBotChoice();
     console.log("bot choice = ", compChoice);

     if(Userchoice === compChoice){
        drawgame();
     } else{
        let userWin = true;
        if(Userchoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }else if(Userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
     }
};

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    });
});

