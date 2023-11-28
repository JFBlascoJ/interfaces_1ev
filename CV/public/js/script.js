// Obtener todos los elementos con la clase "titulo"
let titulos = document.getElementsByClassName("titulo");

// Agregar un evento de clic a cada título
for (let i = 0; i < titulos.length; i++) {
    const num = titulos[i].id.split('-')[1];
    const masMenos = document.getElementById("masMenos-" + num);
    const svgMenos = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><line x1=\"2\" y1=\"10\" x2=\"18\" y2=\"10\" stroke=\"#ebebeb\" stroke-width=\"2\" /></svg>";
    const svgMas = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><line x1=\"2\" y1=\"10\" x2=\"18\" y2=\"10\" stroke=\"#ebebeb\" stroke-width=\"2\" /><line x1=\"10\" y1=\"2\" x2=\"10\" y2=\"18\" stroke=\"#ebebeb\" stroke-width=\"2\" /></svg>";
    masMenos.innerHTML = svgMenos;

    titulos[i].addEventListener('click', () => {
        const contenido = document.getElementById("contenido-" + num);
        // Mostrar u ocultar el párrafo
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block';
            masMenos.innerHTML = svgMenos;
        } else {
            contenido.style.display = 'none';
            masMenos.innerHTML = svgMas;
        }

    });
}