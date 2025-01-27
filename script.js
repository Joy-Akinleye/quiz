const questions = [
    {
        Question: "Pick the rught property of a css Display?",
        answer: [
        {text: "Flex", correct: true},
        {text: "Arial-shadow", correct: false},
        {text: "display", correct: false},
        {text: "Content-line", correct: false},
        {text: "color", correct: false}
        ]
    },
    {
        Question: "What tag is used in breaking line/sentences in HTML",
        answer: [
        {text: "<em>", correct: true},
        {text: "<li>", correct: false},
        {text: "<br>", correct: false},
        {text: "<a>", correct: false},
        {text: "color", correct: false}
        ]
    },
    {
        Question: "Pick the right re-usable variable",
        answer: [
        {text: "selector", correct: true},
        {text: "array", correct: false},
        {text: "const", correct: false},
        {text: "const-line", correct: false},
        {text: "let", correct: false}
        ]
    },
    {
        Question: "What do you understand by (CSS)",
        answer: [
        {text: "For styling", correct: true},
        {text: "For structure", correct: false},
        {text: "For luck", correct: false},
        {text: "Fun-line", correct: false},
        {text: "Enjoyment", correct: false}
        ]
    },
    {
        Question: "Pick the rught property of a css Display?",
        answer: [
        {text: "Flex", correct: true},
        {text: "Arial-shadow", correct: false},
        {text: "display", correct: false},
        {text: "Content-line", correct: false},
        {text: "color", correct: false}
        ]
    },
    {
        Question: "Full meaning of FTP",
        answer: [
        {text: "File trophy protocol", correct: true},
        {text: "File transferring protocol", correct: false},
        {text: "File teleporting protocol", correct: false},
        {text: "File-line transfer protocol", correct: false},
        {text: "File transfer protocol", correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
 currentQuestionIndex = 0;
 score = 0;
 nextButton.innerHTML = 'Next';
 showQuestion();
}
