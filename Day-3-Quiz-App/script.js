const questions = [

    {
        question: "What is the capital of India?",
        answers: [
            { text: "Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false },
            { text: "Kochi", correct: false }
        ]
    },

    {
        question: "Which language is used for web apps?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false }
        ]
    },

    {
        question: "Which planet is called Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    }

];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answerButtons");

const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

let score = 0;

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer.text;

        answerButtons.appendChild(button);

        button.addEventListener("click", () => {

            if(answer.correct){

                score++;

                alert("Correct Answer");

            }else{

                alert("Wrong Answer");

            }

        });

    });

}

function resetState(){

    nextBtn.style.display = "none";

    while(answerButtons.firstChild){

        answerButtons.removeChild(answerButtons.firstChild);

    }

}

nextBtn.addEventListener("click", () => {

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){

        showQuestion();

    }else{

        questionElement.innerText =
        `Quiz Finished! Score: ${score}`;

        answerButtons.innerHTML = "";

        nextBtn.style.display = "none";

    }

});

showQuestion();

nextBtn.style.display = "block";