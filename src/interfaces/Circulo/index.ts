import { FormaGeometrica } from "../FormaGeometrica";

class Circulo implements FormaGeometrica {
    public raio: number;

    constructor(raio: number){
        this.raio = raio;
    }

    calcularArea() {
        const area = Math.PI*this.raio*this.raio;
        return parseFloat(area.toFixed(2))
    }

    calcularPerimetro() {
        const perimetro = 2*Math.PI*this.raio;
        return parseFloat(perimetro.toFixed(2))
    }
}

export {Circulo}