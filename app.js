let userScore = 0;
let compScore= 0;

let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');
const msg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

const getCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = `${userScore}`;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = `${compScore}`;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = getCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        console.log("Game was draw");
        msg.innerText = "Game was draw. Play again."
        msg.style.backgroundColor = "#081b31";
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === 'rock' ?false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


