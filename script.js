let [computer_score, user_score] = [0, 0];
let result_ref = document.getElementById("result");

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'win';
    }
    return 'lose';
}

function playGame(input) {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    document.getElementById("comp_choice").innerHTML =
        `Computer chose <span> ${choices[num].toUpperCase()} </span>`;
    document.getElementById("user_choice").innerHTML =
        `You chose <span> ${input.toUpperCase()} </span>`;

    const computer_choice = choices[num];
    const result = getResult(input, computer_choice);

    switch (result) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    updateScores();

    // Check if someone won the game (score reached 5)
    if (user_score == 5) {
        setTimeout(() => {
            alert("You won the game! Congratulations!");
            resetGame();
        }, 500); // Delay to show win message
    } else if (computer_score == 5) {
        setTimeout(() => {
            alert("Computer won the game. Better luck next time!");
            resetGame();
        }, 500); // Delay to show lose message
    }
}

function updateScores() {
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    document.getElementById("computer_score_display").innerHTML = computer_score;
    document.getElementById("user_score_display").innerHTML = user_score;
}

function resetGame() {
    // Reset both scores
    computer_score = 0;
    user_score = 0;

    // Reset score displays
    updateScores();

    // Reset result display
    result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
    result_ref.innerHTML = "Game Reset! Choose again.";
}
