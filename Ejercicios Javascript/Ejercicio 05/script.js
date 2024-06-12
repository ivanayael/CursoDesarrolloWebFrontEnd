document.getElementById('calcular').addEventListener('click', function() {
    // Obtener valores de los campos de entrada
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;

    // Verificar si los valores son válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, introduce números válidos.');
        return;
    }

    // Variable para almacenar el resultado
    var resultado;

    // Realizar la operación seleccionada
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operación no válida.');
            return;
    }

    // Redondear el resultado a dos decimales
    resultado = resultado.toFixed(2);

    // Mostrar el resultado en una alerta
    alert('El resultado es: ' + resultado);
});
