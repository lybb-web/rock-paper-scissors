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
        return "It's a tie!";
    }
    else if (p == "rock")
    {
        if (c == "scissors")
        {
            return "You win! rock beats scissors!";
        }
        else
        {
            return "You lose! paper beats rock!";
        }
    }
    else if (p == "paper")
    {
        if (c == "rock")
        {
            return "You win! paper beats scissors!";
        }
        else
        {
            return "You lose! scissors beats paper!";
        }
    }
    else
    {
        if (c == "paper")
        {
            return "You win! scissors beats paper!";
        }
        else
        {
            return "You lose! rock beats scissors!";
        }
    }

}

// function playGame()
// {
//     playerChoice = prompt("What do you choose?");
//     playRound = 
// }



alert(getComputerChoice());

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);