document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const landing = document.querySelector(".landing");
    const formSection = document.querySelector(".form-section");

    const form = document.querySelector("form");
    const loading = document.getElementById("loading");

    const trackingPage = document.getElementById("trackingPage");
    const resultBox = document.getElementById("resultBox");
    const timeline = document.getElementById("timeline");
    const backBtn = document.getElementById("backBtn");


    // ===== START BUTTON =====
    startBtn.addEventListener("click", function () {
        landing.classList.add("hide");

        setTimeout(() => {
            landing.style.display = "none";
            formSection.style.display = "block";
            formSection.classList.add("show");
        }, 600);
    });


    // ===== FORM SUBMIT =====
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const trackingInput = document.querySelector("input[name='tracking']").value.trim();

        if (!trackingInput) {
            alert("Enter tracking number");
            return;
        }

        loading.style.display = "block";

        setTimeout(() => {

            loading.style.display = "none";
            formSection.style.display = "none";

            trackingPage.style.display = "block";
            trackingPage.classList.add("show");

            const statuses = ["pending", "transit", "delivered"];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            let status = "";

            if (randomStatus === "delivered") {
                status = "delivered";
                resultBox.textContent = "✅ Delivered Successfully";

                timeline.innerHTML = `
                    <div class="timeline-step active">✔ Order Received</div>
                    <div class="timeline-step active">✔ Shipped</div>
                    <div class="timeline-step active">✔ Delivered</div>
                `;

            } else if (randomStatus === "transit") {
                status = "transit";
                resultBox.textContent = "🚚 In Transit";

                timeline.innerHTML = `
                    <div class="timeline-step active">✔ Order Received</div>
                    <div class="timeline-step active">✔ Shipped</div>
                    <div class="timeline-step">Delivered</div>
                `;

            } else {
                status = "pending";
                resultBox.textContent = "⏳ Processing Shipment";

                timeline.innerHTML = `
                    <div class="timeline-step active">✔ Order Received</div>
                    <div class="timeline-step">Shipped</div>
                    <div class="timeline-step">Delivered</div>
                `;
            }

            resultBox.className = "result-box " + status;
            resultBox.innerHTML += `<br><small>ID: ${trackingInput}</small>`;

            timeline.classList.add("show");

        }, 1000);
    });


    // ===== BACK BUTTON =====
    backBtn.addEventListener("click", function () {
        trackingPage.style.display = "none";
        formSection.style.display = "block";

        // reset UI
        resultBox.innerHTML = "";
        timeline.innerHTML = "";
        timeline.classList.remove("show");
    });

});