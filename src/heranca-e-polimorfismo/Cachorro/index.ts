import { Animal } from "../Animal";

class Cachorro extends Animal {
    public raca: string;
    
    constructor (raca: string) {
        super();
        this.raca = raca;
    }

    emitirSom() {
        console.log("Au au!");
    }

    mover() {
        console.log(`${this.raca} está andando...`);
    }
}

export {Cachorro}