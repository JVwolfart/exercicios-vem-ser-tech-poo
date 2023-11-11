import { Calculadora } from "./Calculadora";

const exercicioEncapsulamentoEstatico = () => {
    const calculadora = new Calculadora();

    console.log("Soma dos números 5 e 3: ", calculadora.soma(5, 3));
    console.log("Subtração dos números 9 e 4: ",calculadora.subtracao(9, 4));
    console.log("Multiplicação dos números 4 e 8: ", calculadora.multiplicacao(4, 8));
    console.log("Divisão dos números 15 e 5: ", calculadora.subtracao(15, 5));
    
    console.log("Valor absoluto do número -8: ", Calculadora.absoluto(-8));
    

}

export {exercicioEncapsulamentoEstatico}