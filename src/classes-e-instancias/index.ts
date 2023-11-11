import { Carro } from "./Carro"

const exercicioClasseInstancia = () => {
    const carro1 = new Carro("Volksvagen Gol", 2023, "branco");
    const carro2 = new Carro("Fiat Uno", 2020, "preto");
    console.log(carro1);
    console.log(carro2);
}

export {exercicioClasseInstancia}