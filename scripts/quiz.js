const quizData = JSON.parse(localStorage.getItem("selectedQuiz"));
const quizContainer = document.getElementById("quiz-container");

document.getElementById("quiz-title").textContent = `: ${quizData.title}`;

for (let i = 0; i < quizData.questions.length; i++) {
    const currentQuestion = quizData.questions[i];
    quizContainer.innerHTML += `<div class="question">
                                <h3>${i + 1}. ${currentQuestion.question}</h3>
                                <div class="options">`;
  
    for (let j = 0; j < currentQuestion.options.length; j++) {
        quizContainer.innerHTML += `<label class="option-section">
                                    <input type="radio" name="question-${i}" value="${currentQuestion.options[j]}">
                                    ${currentQuestion.options[j]}
                                    </label>
                                    <br>`;
    }

    quizContainer.innerHTML += `</div></div>`;
}
quizContainer.innerHTML += `<div class = "submitQuiz">
                            <a href="#" id="showScore">Submit</a>
                            </div>`;

const showScore = document.getElementById('showScore');
const quizCont = document.getElementById('quiz-container');
const quizScore = document.getElementById('quiz-score');

showScore.addEventListener('click', (e) => {
    e.preventDefault();

    let score = 0;

    for (let i = 0; i < quizData.questions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
    
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = quizData.questions[i].answer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {

        const users = JSON.parse(localStorage.getItem("users"));

        for (const user of users) {

            if (user.email === currentUser.email) {
                user.score = score;
                user.quizTitle = quizData.title;
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
    }

    quizScore.innerHTML = `<div class="score-box">
                           <h2>Quiz Completed!</h2>
                           <p>Your score is <span>${score}</span> out of <span>${quizData.questions.length}</span>.</p>
                           </div>`;

quizCont.classList.add('hidden');
quizScore.classList.remove('hidden');
});

