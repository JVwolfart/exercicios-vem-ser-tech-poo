import { Motor } from "../Motor";

class Carro {
    public modelo: string;
    public ano: number;
    public cor: string;
    public motor: Motor;

    constructor (modelo: string, ano: number, cor: string) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.motor = new Motor();
    }

    public ligarMotor(): void {
        this.motor.ligar();
    }

    public desligarMotor(): void {
        this.motor.desligar();
    }
}

export {Carro}