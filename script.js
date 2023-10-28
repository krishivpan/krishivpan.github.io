// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a 5-second delay (adjust as needed)
    setTimeout(function() {
        document.querySelector(".preloader").style.animation = "fadeOut 1s";
        document.querySelector(".preloader").style.animationFillMode = "forwards";

        // Show the main content
        setTimeout(function() {
            document.querySelector(".preloader").style.display = "none";
            document.querySelector("#content").style.display = "block";
        }, 1000); // Delay for the fade-out animation
    }, 5000); // 5 seconds (5000 milliseconds)
});
