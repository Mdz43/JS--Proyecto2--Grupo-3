document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const videoFrame = document.getElementById("videoFrame");

    playButton.addEventListener("click", () => {
        videoFrame.src = "https://www.youtube.com/embed/QjYp9fGqgWA?autoplay=1";
        playButton.style.display = "none"; // Oculta el botón después de reproducir
        videoFrame.requestFullscreen(); // Solicita el modo de pantalla completa
    });
});


