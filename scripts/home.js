const users = [
    { role: "admin", name: "Maroun", email: "admin@quiz.com", password: "admin123"},
    { role: "user", name: "Nabiha", email: "nabiha@quiz.com", password: "nabiha123"}
  ];
  
const quizzes = [
    {
      id: 1,
      title: "General Knowledge",
      image: "../images/quiz1.jpg",
    },
    {
      id: 2,
      title: "JavaScript Basic Rules",
      image: "../images/quiz2.jpg",
    },
    {
      id: 3,
      title: "World-Wars History",
      image: "../images/quiz3.jpg",
    }
  ];
  
const quizzesList = document.getElementById("q-list");
  
for (let i = 0; i < quizzes.length; i++) {
    const quiz = quizzes[i];
  
    quizzesList.innerHTML += `<div class="quiz">
                                <div class="quiz-img">
                                  <img src="${quiz.image}" alt="${quiz.title}" />
                                </div>
                                <div class="divider"></div>
                                <div class="quiz-details">
                                  <p><h3>${quiz.title}</h3></p>
                                </div>
                                <button class="start-quiz">Start Quiz</button>
                              </div>`;
}

document.querySelectorAll(".start-quiz").forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedQuiz = quizzes[index];

    const questions = {
      1: [
        { question: "What is the capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
        { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
        { question: "What is the main organ of taste?", options: ["Tongue", "Nose", "Neck"], answer: "Tongue" }
      ],
      2: [
        { question: "Which keyword declares a variable in JavaScript?", options: ["var", "int", "define"], answer: "var" },
        { question: "How do you write a comment in JavaScript?", options: ["<!-- -->", "//", "**"], answer: "//" },
        { question: "Which method removes the last element from an array in JavaScript?", options: ["pop()", "push()", "slice()"], answer: "pop()" }
      ],
      3: [
        { question: "Which year did World War I begin?", options: ["1914", "1939", "1920"], answer: "1914" },
        { question: "Who was the leader of Germany during WWII?", options: ["Hitler", "Stalin", "Churchill"], answer: "Hitler" },
        { question: "Which of the following nations was not invited to Versailles?", options: ["France", "Great Britain", "Russia"], answer: "Russia" }
      ]
    };

    localStorage.setItem("selectedQuiz", JSON.stringify({
      title: selectedQuiz.title,
      questions: questions[selectedQuiz.id]
    }));
    
    window.location.href = "./quiz.html";
  });
});
  