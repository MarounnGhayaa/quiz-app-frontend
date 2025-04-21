const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginField = document.querySelector('.login-field');
const registerForm = document.getElementById('registerForm');

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginField.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginField.classList.remove('hidden');
});

const users = [ 
    { role: "admin", name: "Maroun", email: "admin@quiz.com", password: "admin123", score: 0},
  ];

localStorage.setItem("users", JSON.stringify(users));

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const logMail = document.getElementById("log-email").value;
    const logPass = document.getElementById("log-pass").value;
  
    const storedUsers = JSON.parse(localStorage.getItem("users"));
  
    let logger = null;
    for (const user of storedUsers) {
        if (user.email === logMail && user.password === logPass) {
            logger = user;
            break;
        }
    }
  
    if (logger) {
      alert(`Welcome, ${logger.name}!`);
        if (logger.role === "admin") {
            window.location.href = "./pages/dashboard.html";
        } else {
            window.location.href = "./pages/home.html";            
        }
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const regMail = document.getElementById("reg-email").value;
    const regPass = document.getElementById("reg-pass").value;

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    const user = {
        role: "user",
        name: regMail.split('@')[0],
        email: regMail,
        password: regPass,
        score: 0
    };

    storedUsers.push(user);
    
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert(`Congrats ${user.name}, registration successful! You can now log in.`);
   
    window.location.href = "./pages/home.html";
});
