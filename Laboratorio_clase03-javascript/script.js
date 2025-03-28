const resultados = [];

function calcular(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    let resultado;
    if (operation === 'sumar') {
        resultado = num1 + num2;
    } else if (operation === 'restar') {
        resultado = num1 - num2;
    } else if (operation === 'multiplicar') {
        resultado = num1 * num2;
    }

    
    resultados.push(resultado);

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

const mostrarTodosLosResultados = () => {
    const todosLosResultadosDiv = document.getElementById('todosLosResultados');

    if (resultados.length === 0) {
        todosLosResultadosDiv.textContent = 'No hay resultados almacenados aún.';
    } else {
        todosLosResultadosDiv.textContent = `Todos los Resultados: ${resultados.join(', ')}`;
    }
};
