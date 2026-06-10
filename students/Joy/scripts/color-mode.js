let button = document.getElementById("color-mode-button");
console.log(button);
function toggleColorMode(event) {
    console.log("hi")
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Dark mode";
        document.body.classList.replace("dark-mode", "light-mode");
    } else {
        button.textContent = "Light mode";
        document.body.classList.replace("light-mode", "dark-mode");
    }
}
button.addEventListener("click", toggleColorMode);