class Lluvia {

    cant = 30;
    objetos = [];

    constructor(idPadre) {
        for (let i = 0; i < this.cant; i++) { //Crear los objetos que caen
            let obj = new Objeto(idPadre, "img", "", 0, -50, 50, 50);
            obj.imagen.src = "res/estrella.png";
            obj.activo = false;
            obj.vel = this.enteroRandom(15, 27);
            obj.reiniciar = () => {
                obj.activo = false; //Dejar de mover
                obj.imagen.style.display = "none"; //Dejar de mostrar
                obj.setPosicion(this.enteroRandom(0, window.innerWidth - obj.width), -obj.height); //Reiniciar su posición

                setTimeout(() => { //Después de 2 a 5 segundos
                    obj.imagen.style.display = "inline"; //Volver a mostrar

                    obj.activo = true; //Volver a mover
                }, this.enteroRandom(2000, 5000));
            };
            obj.mover = () => {
                if (obj.activo) { //Si el objeto está activo
                    if ((obj.y + obj.height + obj.vel) >= window.innerHeight) { //Si el objeto ya se sale de la pantalla
                        obj.reiniciar(); //Reiniciar
                    } else { //Si sigue dentro de la pantalla
                        obj.setPosicion(obj.x, obj.y + obj.vel); //Mover hacia abajo
                    }
                }
            };

            setTimeout(() => { //Despues de unos segundos
                obj.reiniciar(); //Comenzar a ejecutar el objeto
                // Esto se hace para que los objetos no salgan todos de primeras
            }, 1000 * i);

            this.objetos.push(obj);
        }
    }

    ejecutar() {
        for (let i = 0; i < this.cant; i++) {
            this.objetos[i].mover();
        }
    }

    /**
     * Generar un número entero pseudo-aleatorio
     * 
     * @param {number} min Número mínimo resultante (incluido)
     * @param {number} max Número máximo resultante (excluido)
     * @returns U número pseudo-aleatorio entre min(incluido) y max(excluido)
     */
    enteroRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
