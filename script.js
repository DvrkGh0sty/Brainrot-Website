function checkAnswer(isCorrect) {
    const result = document.getElementById("result");
    if (isCorrect) {
        result.textContent = "Correct! Skibidi Toilets were created in 2023.";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong! Skibidi Toilets were not created in 2019.";
        result.style.color = "red";
    }
}
