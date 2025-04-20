const userList = document.getElementById('scores-list');
const storedUsers = JSON.parse(localStorage.getItem("users"));

for (let i = 0; i < storedUsers.length; i++) {
    const user = storedUsers[i];
    userList.innerHTML += `<div class="user">
                           <h3>${user.name}</h3>
                           <p>Email: ${user.email}</p>
                           <p>Score: ${user.score}</p>
                           </div>`;
}