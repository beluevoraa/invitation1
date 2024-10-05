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

document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor o mostrar un mensaje de éxito
    console.log(`Nombre: ${name}, Correo: ${email}, Mensaje: ${message}`);
    
    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('attendanceModal'));
    modal.hide();
    
    // Limpia el formulario
    this.reset();
});
