let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de la pantalla)
};

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar la imagen
    imagen.src = url;

    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

//funcion de rehistar imagen
export const registerImage = (imagen) => {
    //IntersectationaOnserver -> observr(iimagen)
    observer.observe(imagen);
    logState();
};

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
  }