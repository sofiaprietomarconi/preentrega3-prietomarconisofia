document.addEventListener("DOMContentLoaded", function() {
    const lanzarBtn = document.querySelector('#lanzar-btn');
    const resultDiv = document.querySelector('#result');

    lanzarBtn.addEventListener('click', function() {
        const lanzamiento = Math.floor(Math.random() * 6) + 1;
        const result = `Resultado del lanzamiento: ${lanzamiento}`;
        resultDiv.innerText = result;

        // Guardar historial de lanzamientos
        const historial = JSON.parse(localStorage.getItem('historial')) || [];
        historial.push(lanzamiento);
        localStorage.setItem('historial', JSON.stringify(historial));
    });

    // Mostrar historial de lanzamientos
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    if (historial.length > 0) {
        const historyString = historial.map(dice => ` ${dice}`).join(',');
        resultDiv.innerText = `Historial de lanzamientos:${historyString}`;
    }
});