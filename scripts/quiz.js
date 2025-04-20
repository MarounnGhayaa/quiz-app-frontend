const quizData = JSON.parse(localStorage.getItem("selectedQuiz"));
const quizContainer = document.getElementById("quiz-container");

for (let i = 0; i < quizData.questions.length; i++) {
    const question = quizData.questions[i];
    quizContainer.innerHTML += `<div class="question">
                                <h3>${i + 1}. ${question.question}</h3>
                                <div class="options">`;
  
    for (let j = 0; j < question.options.length; j++) {
      quizContainer.innerHTML += `<button class="option-btn">${question.options[j]}</button>`;
    }

    quizContainer.innerHTML += `</div></div>`;
  }