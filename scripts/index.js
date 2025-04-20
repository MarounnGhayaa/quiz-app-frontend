const users = [ 
    { role: "admin", name: "Maroun", email: "admin@quiz.com", password: "admin123"},
    { role: "user", name: "Nabiha", email: "nabiha@quiz.com", password: "nabiha123"}
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
            window.location.href = ".pages/dashboard.html";
        } else {
            window.location.href = "./pages/home.html";            
        }
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const regMail = document.getElementById("log-email").value;
    const regPass = document.getElementById("log-pass").value;

    const storedUsers = JSON.parse(localStorage.getItem("users"));

    const user = {
        role: "user",
        name: regMail.split('@')[0],
        email: regMail,
        password: regPass
    };

    storedUsers.push(user);
    
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Registration successful! You can now log in.");
   
    window.location.href = "./pages/home.html";
});
