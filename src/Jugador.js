class Jugador extends Objeto {

    vel = 30;
    dirX = 0;
    objetos;

    constructor(idPadre, objetos) {
        super(idPadre, "img", "", window.innerWidth / 2, window.innerHeight - 100, 90, 100);

        this.objetos = objetos;
        this.imagen.src = "res/Kirby.webp";
        this.imagen.alt = "Jugador";

        document.onkeydown = (ev) => {
            let code = ev.code;

            switch (code) {
                case "ArrowLeft":
                case "KeyA":
                    this.dirX = -1;
                    break;
                case "ArrowRight":
                case "KeyD":
                    this.dirX = 1;
                    break;
            }
        };
        document.onkeyup = (ev) => {
            let code = ev.code;

            switch (code) {
                case "ArrowLeft":
                case "KeyA":
                    if (this.dirX == -1) {
                        this.dirX = 0;
                    }
                    break;
                case "ArrowRight":
                case "KeyD":
                    if (this.dirX == 1) {
                        this.dirX = 0;
                    }
                    break;
            }
        };
    }

    mover() {
        this.setPosicion(Math.min(Math.max(this.x + (this.vel * this.dirX), 0), window.innerWidth - this.width), this.y);

        for (let i = 0; i < this.objetos.length; i++) {
            let obj = this.objetos[i];

            if (this.colisiona(obj)) {
                this.objetos[i].reiniciar(true);
            }
        }
    }

}
