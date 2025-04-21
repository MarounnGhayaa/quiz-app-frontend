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
                               <h3>${user.name}</h3>
                               <p>Email: ${user.email}</p>
                               <p>Score: ${user.score}</p>
                               </div>`;
        }
    }
}

document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    alert("You have logged out successfully!");

    window.location.href = "../index.html";
});