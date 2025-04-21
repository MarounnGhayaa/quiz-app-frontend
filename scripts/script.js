document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    alert("You have logged out successfully!");

    window.location.href = "../index.html";
});