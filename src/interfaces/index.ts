import { Circulo } from "./Circulo";
import { Quadrado } from "./Quadrado";

const exercicioInterfaces = () => {
    const quadrado = new Quadrado(5);
    const circulo = new Circulo(5);

    console.log(`Perímetro do quadrado de lado ${quadrado.lado}: ${quadrado.calcularPerimetro()}`);
    console.log(`Área do quadrado de lado ${quadrado.lado}: ${quadrado.calcularArea()}`);
    console.log(`Perímetro do circulo de raio ${circulo.raio}: ${circulo.calcularPerimetro()}`);
    console.log(`Área do circulo de raio ${circulo.raio}: ${circulo.calcularArea()}`);
}

export {exercicioInterfaces};