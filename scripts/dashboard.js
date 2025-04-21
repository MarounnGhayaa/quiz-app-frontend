const userList = document.getElementById('scores-list');
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

if (storedUsers.length === 1) {
    userList.innerHTML = `<div class="user">
                          <p>There are no users registered yet!</p>
                          </div>`;
} 
else {
    for (let i = 0; i < storedUsers.length; i++) {
        const user = storedUsers[i];
        if (user.role === "admin") {
            continue;
        }
        else {
        userList.innerHTML += `<div class="user">
                               <h3>${user.name}</h3><br>
                               <p>Email: ${user.email}</p><br>
                               <p>Quiz: ${user.quizTitle}</p><br>
                               <p>Score: [${user.score}]</p><br>
                               </div>`;
        }
    }
}