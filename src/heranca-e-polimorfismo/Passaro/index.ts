import { Animal } from "../Animal";

class Passaro extends Animal {
    public especie: string;

    constructor (especie: string){
        super();
        this.especie = especie;
    }

    emitirSom() {
        console.log("Piu piu!");
    }

    mover() {
        console.log(`${this.especie} está voando...`);
    }
}

export {Passaro}