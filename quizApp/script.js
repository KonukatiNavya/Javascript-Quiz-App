const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "J.K. Rowling", correct: false },
        ],
    },
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
}

// Show the current question
function showQuestion(question) {
    questionContainer.querySelector('#question').innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    if (isLastQuestion) {
        showResult();
    } else {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    }
}

// Show the final score
function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = score;
    nextButton.classList.add('hide');
}

// Restart the quiz
restartButton.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    startQuiz();
});

startQuiz();
