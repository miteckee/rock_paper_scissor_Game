let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector('#user_score');
const botScorePara = document.querySelector('#bot_score');

const genBotChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawgame = () => {
    console.log ("game was Draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, Userchoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win ${Userchoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else {
        console.log("you lose");
        botScore++;
        botScorePara.innerText = botScore;
        msg.innerText = `You Lose ${compChoice} beats ${Userchoice} `;
        msg.style.backgroundColor = "Red";
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
        showWinner(userWin, Userchoice, compChoice);
     }
};

choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    });
});

