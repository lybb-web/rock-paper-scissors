function getComputerChoice() 
{
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch (randomNumber)
    {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }

   
}

function playRound(playerSelection, computerSelection)
{
    p = playerSelection.toLowerCase();
    c = computerSelection.toLowerCase();
    const forecast = document.querySelector(".forecast");
    if (p == c)
    {
        forecast.textContent = "It's a tie!";
        return "It's a tie!";
    }
    else if (p == "rock")
    {
        if (c == "scissors")
        {
            forecast.textContent = "You win! Rock beats Scissors";
            return "w";
        }
        else
        {
            forecast.textContent = "You lose! Paper beats Rock!";
            return "l";
        }
    }
    else if (p == "paper")
    {
        if (c == "rock")
        {   

            forecast.textContent = "You win! Paper beats Scissors!";
            return "w";
        }
        else
        {
            forecast.textContent = "You lose! Scissors beats Paper!";
            return "l";
        }
    }
    else
    {
        if (c == "paper")
        {
            forecast.textContent = "You win! Scissors beats Paper!";
            return "w";
        }
        else
        {
            forecast.textContent = "You lose! Rock beats Scissors!";
            return "l";
        }
    }

}

function playGame()
{
    // let playerScore = 0;
    // let computerScore = 0;

    
    let roundResult;
    
    if (roundResult == "w")
    {
        forecast.textContent = "You Win!";
        playerScore += 1;
    }
    else if (roundResult == "l")
    {
        forecast.textContent = "You Lose!";
        computerScore += 1;
    }
    
    if (playerScore > computerScore)
    {
        alert("You win!");
    }
    else if (computerScore > playerScore)
    {
        alert("You lose!");
    }
    else
    {
        alert("It's a tie!");
    }

    
}

function displayWinner(playerScore, computerScore)
{
    const winner = document.querySelector(".winner");
    if (playerScore > computerScore)
    {
        winner.textContent = "You Win!";
    }
    else if (computerScore > playerScore)
    {
        winner.textContent = "You Lose!";
    }
    else
    {
        winner.textContent = "No One Wins!";
    }
    
}

const forecast = document.querySelector(".forecast");
forecast.textContent = "Start the game by choosing a weapon!";

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const button = document.querySelector('.weapons');
    button.addEventListener("click", (e) =>
    {
        roundNumber += 1;
        const target = e.target
    
        switch (target.id)
        {
            case "rock":
                roundResult = playRound(target.id, getComputerChoice());
                break;
            case "paper":
                roundResult = playRound(target.id, getComputerChoice());
                break;
            case "scissors":
                roundResult = playRound(target.id, getComputerChoice());
                break;
        }
        
        if (roundResult == "w")
        {
            playerScore += 1;
            
        }
        else if (roundResult == "l")
        {
            computerScore += 1;
        }
        const round = document.querySelector(".round-number");
        round.textContent = `Round ${roundNumber}`;
        const scoreboard = document.querySelector(".scoreboard");
        scoreboard.textContent = `${playerScore}-${computerScore}`;
        if (roundNumber == 5)
        {
            displayWinner(playerScore, computerScore)
        }
    }
    )


