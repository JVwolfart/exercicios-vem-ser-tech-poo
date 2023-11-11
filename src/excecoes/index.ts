import { ContaBancaria } from "./ContaBancaria"

const exercicioExcecoes = () => {
    const conta = new ContaBancaria(1000);
    console.log("Saldo na sua conta: ", conta.saldo);
    conta.depositar(200);
    console.log("Saldo na sua conta: ", conta.saldo);
    conta.sacar(800);
    console.log("Saldo na sua conta: ", conta.saldo);
    try {
        conta.sacar(500);    
    } catch (error) {
        console.log(error.message);
    }
    console.log("Saldo na sua conta: ", conta.saldo);
}

export {exercicioExcecoes}