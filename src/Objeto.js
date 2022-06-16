class Objeto {

    static UNIDAD = "px";

    imagen;

    x;
    y;
    width;
    height;

    /**
     * Crear un objeto del juego, que será representado en la pantalla por un elemento html.
     * 
     * El objeto puede colisionar y empujar o ser empujado por otros objetos.
     * 
     * @param {string} idPadre id del elemento html que contendrá a este objeto
     * @param {string} tagName tag del elemento html que representará a este objeto
     * @param {string} classList Clases css del elemento html que representará a este objeto
     * @param {number} x Posición en x del elemento html que representará a este objeto (%)
     * @param {number} y Posición en y del elemento html que representará a este objeto (%)
     * @param {number} width Anchura del elemento html que representará a este objeto (%)
     * @param {number} height Altura del elemento html que representará a este objeto (%)
     */
    constructor(idPadre, tagName, classList, x, y, width, height) {
        this.imagen = document.createElement(tagName);
        this.imagen.classList = classList;
        this.imagen.style.position = "absolute";
        this.imagen.style.height = height + Objeto.UNIDAD;
        this.imagen.style.width = width + Objeto.UNIDAD;
        this.imagen.style.top = y + Objeto.UNIDAD;
        this.imagen.style.left = x + Objeto.UNIDAD;

        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;

        document.getElementById(idPadre).insertAdjacentElement("afterbegin", this.imagen);
    }

    colisiona(objeto) {
        let infObjY = objeto.y;
        let infObjX = objeto.x;
        let supObjY = (objeto.y + objeto.height);
        let supObjX = (objeto.x + objeto.width);

        let infMuroY = this.y;
        let infMuroX = this.x;
        let supMuroY = (this.y + this.height);
        let supMuroX = (this.x + this.width);

        return ((infObjX < supMuroX) && (supObjX > infMuroX) && (infObjY < supMuroY) && (supObjY > infMuroY)); //Si las areas se superponen
    }

    setPosicion(x, y) {
        this.y = y; //Actualizar la posicion en y
        this.x = x; //Actualizar la posicion en x

        this.imagen.style.top = y + Objeto.UNIDAD; //Actualizar la posicion de la imagen en y
        this.imagen.style.left = x + Objeto.UNIDAD; //Actualizar la posicion de la imagen en x
    }

}
