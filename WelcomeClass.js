/**
 * Clase Welcome
 */
class Welcome {

    /**
     * Constructor
     */
    constructor() {
        this.message = "Bienvenido a NodeJS"
    }

    /**
     * Muestra el mensaje de bienvenida
     */
    display() {
        console.log(this.message);
    }
}

module.exports = Welcome;