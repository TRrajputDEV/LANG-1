const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is 5 + 2?",
        choices: ["3", "4", "7", "6"],
        correct: "7"
    },
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Earth", "Jupiter"],
        correct: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;

    choicesContainer.innerHTML = "";

    currentQuestionData.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
    });
}

function checkAnswer(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correct;

    if (selectedChoice === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    choicesContainer.innerHTML = "";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
    nextButton.style.display = "none";
}

displayQuestion();

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});
