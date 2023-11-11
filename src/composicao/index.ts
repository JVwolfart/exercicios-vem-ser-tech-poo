import { Carro } from "./Carro";

const exercicioComposicao = () => {
    const carro1 = new Carro("Volksvagen Gol", 2023, "branco");
    console.log(carro1);
    carro1.ligarMotor();
    carro1.ligarMotor();
    carro1.desligarMotor();
    carro1.desligarMotor();
}

export {exercicioComposicao}