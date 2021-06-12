const quizData = [{
    question: 'What is the Capital of Nepal?',
    a: 'Sydney',
    b: 'California',
    c: 'Kathmandu',
    d: 'Dhaka',
    correct: 'c',
},{
    question: 'Where is Janki Mandir?',
    a: 'Bharatpur',
    b: 'Janakpur',
    c: 'Biratnagar',
    d: 'Shantinagar',
    correct: 'b',
},{
    question: 'What is the most used language in the world ?',
    a: 'Chinese',
    b: 'Japanese',
    c: 'English',
    d: 'Nepali',
    correct: 'c',
},{
    question: 'Which is the best programming language in the world ?',
    a: 'Java',
    b: 'Python',
    c: 'Javascript',
    d: 'Go',
    correct: 'c',
}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// To deselect the answer after submiting answer in another question
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click",() => {
    // click to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <buttton onClick="location.reload()">Reload</button>`;
        }
    }
});