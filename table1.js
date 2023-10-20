// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica1");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Temperatura"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosTemperatura = {
    label: "Temperatura del Biodigestor",
    data: [25, 50], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(102, 204, 51, 0.5)', // Color de fondo
    borderColor: 'green', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosTemperatura,
            // Aquí más datos...
        ]
    },
    options: {
        scales:{
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
