import { FormaGeometrica } from "../FormaGeometrica";

class Quadrado implements FormaGeometrica {
    public lado: number;

    constructor (lado: number){
        this.lado = lado;
    }

    calcularArea() {
        return this.lado*this.lado;    
    }

    calcularPerimetro() {
        return this.lado*4;
    }
}

export {Quadrado}