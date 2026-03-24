const startBtn = document.getElementById("startBtn");
const landing = document.querySelector(".landing");
const formSection = document.querySelector(".form-section");

startBtn.addEventListener("click", function () {
    landing.style.opacity = "0";

    setTimeout(() => {
        landing.style.display = "none";
        formSection.style.display = "block";
        formSection.style.opacity = "0";

        setTimeout(() => {
            formSection.style.opacity = "1";
        }, 100);
    }, 500);
});

const form = document.querySelector("form");

form.addEventListener("submit", function () {
    setTimeout(() => {
        window.location.href = "success.html";
    }, 200);
});