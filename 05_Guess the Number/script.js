const userInput = document.querySelector(".user_input");

const form = document.querySelector("form");

const result = document.querySelector(".result");

const allGuesses = document.querySelector(".all_guesses");

const submitBtn = document.querySelector(".submit_btn");

const startGameBtn = document.querySelector(".start_game");


const alGuessesArray = []

let randomNumber = Math.round(Math.random() * 100);

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const userInputValue = parseInt(userInput.value);

    if (userInputValue < randomNumber) {

        result.innerText = "Too low!"

    } else if (userInputValue > randomNumber) {

        result.innerText = "Too high!"

    } else {

        result.innerText = "You got it ! Congrats"

        startGameBtn.disabled = false

        submitBtn.disabled = true
    }

    alGuessesArray.push(userInputValue)

    allGuesses.innerText = "Your guesses : " + alGuessesArray.join(",")

    form.reset()

})


startGameBtn.addEventListener("click", (e) => {

    allGuesses.innerText = ""

    result.innerText = ""

    startGameBtn.disabled = true

    submitBtn.disabled = false

    randomNumber = Math.round(Math.random() * 100);
})