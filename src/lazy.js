let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de la pantalla)
};

const loadImage = (entry) => {
    const imgNode = entry.target;
    const imagen = imgNode.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;

        loadedImages += 1;
        logState();
    
    observer.unobserve(imgNode);
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
    totalImages += 1;
    logState();
};

function logState() {
    console.log(`○ Total Imágenes: ${totalImages}`);
    console.log(`⭕️ Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}