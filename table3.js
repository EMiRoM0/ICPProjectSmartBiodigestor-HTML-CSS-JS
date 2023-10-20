// Obtener una referencia al elemento canvas del DOM
const $grafica3 = document.querySelector("#grafica3");
// Las etiquetas son las que van en el eje X. 
const etiquetas3 = ["Volumen"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVolumen = {
    label: "Volumen del biodigestor",
    data: [65, 100], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(102, 204, 51, 0.5)', // Color de fondo
    borderColor: 'green', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica3, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas3,
        datasets: [
            datosVolumen,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});