let questions = [
    {
        question: "What does CSS stands for?",
        a: "Central Style sheets",
        b: "Cars SUVs Sailboats",
        c: "Cascading Style Sheets",
        d: "Cascading Simple Sheets",
        ans: "c",
    },
    {
        question: "Name the application used for creating presentations?",
        a: "MS Access",
        b: "MS Word",
        c: "MS Excel",
        d: "Ms PowerPoint",
        ans: "d",
    },
    {
        question: "Which language runs in web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        ans: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        ans: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        ans: "b",
    }
];
const quiz = document.getElementById('quiz')
const question = document.querySelector('.question');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');


let question_count = 0;
let score = 0;

const loadQuestion = () => {

    unCheckedAnswers();

    const questionList = questions[question_count];

    question.innerHTML = questionList.question;

    text1.innerHTML = questionList.a;
    text2.innerHTML = questionList.b;
    text3.innerHTML = questionList.c;
    text4.innerHTML = questionList.d;
}
const unCheckedAnswers = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;
  
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === questions[question_count].ans) {
        score++;
    };

    question_count++;

    if (question_count < questions.length) {
        loadQuestion();
    } else {
        quiz.innerHTML = `
        <h2> You scored ${score}/${questions.length} questions correctly</h2>
        <button class="btn" onclick="location.reload()"> Reload </button> `;
    }

});
