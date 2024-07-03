// quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who is the author of the book 'To Kill a Mockingbird'?",
        answers: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen", "J.K. Rowling"],
        correctAnswer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correctAnswer: 2
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
        correctAnswer: 0
    }
];

// current question index
let currentQuestionIndex = 0;

// function to load the next question
function loadNextQuestion() {
    // clear the quiz container
    document.getElementById("quiz-container").innerHTML = "";

    // get the current question
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // create the question element
    const questionElement = document.createElement("h3");
    questionElement.textContent = currentQuestion.question;
    document.getElementById("quiz-container").appendChild(questionElement);

    // create the answer elements
    const answerElements = [];
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answerElement = document.createElement("div");
        answerElement.className = "form-check";
        answerElement.innerHTML = `
            <input class="form-check-input" type="radio" name="answer" value="${i}">
            <label class="form-check-label">${currentQuestion.answers[i]}</label>
        `;
        answerElements.push(answerElement);
        document.getElementById("quiz-container").appendChild(answerElement);
    }

    // add the next button
    const nextButton = document.createElement("button");
    nextButton.className = "btn btn-primary mt-3";
    nextButton.textContent = "Next";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            loadNextQuestion();
        } else {
            // show the submit button
            document.getElementById("submit-btn").style.display = "block";
        }
    };
    document.getElementById("quiz-container").appendChild(nextButton);
}

// load the first question
loadNextQuestion();

// add event listener to submit button
document.getElementById("submit-btn").addEventListener("click", () => {
    document.getElementById("result").innerHTML = "Quiz has been submitted!";
});