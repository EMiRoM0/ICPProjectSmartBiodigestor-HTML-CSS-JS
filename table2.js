// Obtener una referencia al elemento canvas del DOM
const $grafica2 = document.querySelector("#grafica2");
// Las etiquetas son las que van en el eje X. 
const etiquetas2 = ["pH"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datospH = {
    label: "pH del biodigestor",
    data: [7, 14], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(102, 204, 51, 0.5)', // Color de fondo
    borderColor: 'green', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica2, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas2,
        datasets: [
            datospH,
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