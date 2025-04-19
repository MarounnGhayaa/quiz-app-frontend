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
      title: "JavaScript Basics",
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
  