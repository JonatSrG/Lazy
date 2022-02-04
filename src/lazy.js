
const isIntersecting = (entry) => {
    return entry.isIntersecting; //true (dentro de la pantalla)
};

const accion = (entry) => {
    const nodo = entry.target;
    console.log('hola');

    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion);
});

//funcion de rehistar imagen
export const registerImage = (imagen) => {
    //IntersectationaOnserver -> observr(iimagen)
    observer.observe(imagen);
};