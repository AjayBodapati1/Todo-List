document.addEventListener("DOMContentLoaded", function () {
    function confettiEffect(event) {
        event.preventDefault();

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            event.target.submit(); // Submit after confetti effect
        }, 200);
    }

    // Attach event listeners to all forms with the class "out-form"
    document.querySelectorAll(".out-form").forEach((form) => {
        form.addEventListener("submit", confettiEffect);
    });
});
