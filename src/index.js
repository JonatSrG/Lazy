import { registerImage } from "./lazy";

//funcion random de las imagenes
const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;
//crear (1) imagenes
const createImageNode = () => {

    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

    container.appendChild(imagen);

    return container;
};

//agregar #imagen
const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");

//funccion del boton de agregar
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener("click", addImage);


