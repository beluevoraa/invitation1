const weddingDate = new Date('2025-10-25T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDiff = weddingDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Actualizar los valores en el HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const volumeButton = document.getElementById('volume-on');
    const muteButton = document.getElementById('volume-off');
    const modal = document.getElementById('modal');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    // Muestra el modal al cargar la página
    modal.style.display = 'flex';

    // Agrega eventos de clic a los botones del modal
    yesButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Oculta el modal
        audio.play(); // Reproduce el audio
        document.getElementById('volume-controls').style.display = 'flex'; // Muestra los controles de volumen
    });

    noButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Oculta el modal
        audio.pause(); // Asegura que el audio no se reproduzca
    });

    // Agrega un evento de clic al botón de volumen
    volumeButton.addEventListener('click', function() {
        audio.muted = true; // Mutea el audio
        volumeButton.style.display = 'none'; // Oculta el botón de volumen
        muteButton.style.display = 'block'; // Muestra el botón de volumen apagado
    });

    // Agrega un evento de clic al botón de mute
    muteButton.addEventListener('click', function() {
        audio.muted = false; // Desmutea el audio
        muteButton.style.display = 'none'; // Oculta el botón de mute
        volumeButton.style.display = 'block'; // Muestra el botón de volumen
    });

    // Control de pausa
    audio.addEventListener('pause', function() {
        if (audio.muted) {
            muteButton.style.display = 'block'; // Muestra el botón de mute
            volumeButton.style.display = 'none'; // Oculta el botón de volumen
        } else {
            volumeButton.style.display = 'none'; // Oculta el botón de volumen
            muteButton.style.display = 'block'; // Muestra el botón de mute
        }
    });

    // Control de play
    audio.addEventListener('play', function() {
        if (audio.muted) {
            muteButton.style.display = 'block'; // Muestra el botón de mute
            volumeButton.style.display = 'none'; // Oculta el botón de volumen
        } else {
            volumeButton.style.display = 'none'; // Oculta el botón de volumen
            muteButton.style.display = 'block'; // Muestra el botón de mute
        }
    });
});

