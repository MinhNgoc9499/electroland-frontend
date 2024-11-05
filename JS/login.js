const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const loginContainer = document.getElementsByClassName("login-container")[0]; // Access the first element directly

registerButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    loginContainer.style.opacity = "0"; // Set opacity to 0 to make it invisible
});

loginButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    loginContainer.style.opacity = "1"; // Reset opacity to 1 to make it visible again
});

document.getElementById("chk1").addEventListener("change", function() {
    if (this.checked) {
        console.log("Menu mở");
    } else {
        console.log("Menu đóng");
    }
});