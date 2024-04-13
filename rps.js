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
    if (p == c)
    {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if (p == "rock")
    {
        if (c == "scissors")
        {
            console.log("You win! rock beats scissors!");
            return "w";
        }
        else
        {
             console.log("You lose! paper beats rock!");
            return "l";
        }
    }
    else if (p == "paper")
    {
        if (c == "rock")
        {
            console.log("You win! paper beats scissors!");
            return "w";
        }
        else
        {
            console.log("You lose! scissors beats paper!");
            return "l";
        }
    }
    else
    {
        if (c == "paper")
        {
            console.log("You win! scissors beats paper!");
            return "w";
        }
        else
        {
            console.log("You lose! rock beats scissors!");
            return "l";
        }
    }

}

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++)
    {
        playerChoice = prompt(`Round ${i+1}! What do you choose?`);
        roundResult = playRound(playerChoice, getComputerChoice());
        if (roundResult == "w")
        {
            playerScore += 1;
        }
        else if (roundResult == "l")
        {
            computerScore += 1;
        }
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



// alert(getComputerChoice());

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
playGame();