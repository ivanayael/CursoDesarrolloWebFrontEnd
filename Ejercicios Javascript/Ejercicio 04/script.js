document.getElementById('calcularIMC').addEventListener('click', function() {
    // Obtener valores de los campos de entrada
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir cm a m

    // Verificar si los valores son válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, introduce valores válidos para el peso y la altura.');
        return;
    }

    // Calcular el IMC
    var imc = peso / (altura * altura);

    // Redondear el resultado a dos decimales
    imc = imc.toFixed(2);

    // Mostrar el resultado en una alerta
    alert('Tu IMC es: ' + imc);
});