class Calculadora {

    soma (n1: number, n2: number){
        return n1+n2;
    }

    subtracao (n1: number, n2: number){
        return n1-n2;
    }

    multiplicacao (n1: number, n2: number){
        return n1*n2;
    }

    divisao (n1: number, n2: number){
        return n1/n2;
    }

    static absoluto(n: number){
        return Math.abs(n);
    }
}

export {Calculadora}