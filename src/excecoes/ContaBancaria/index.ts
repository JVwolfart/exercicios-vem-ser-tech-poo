class ContaBancaria {
    private _saldo: number;

    constructor(saldo: number = 0){
        this._saldo = saldo
    }

    get saldo(){
        return this._saldo.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    }

    depositar(valor: number): void {
        this._saldo += valor;
        console.log(`Depósito de ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} realizado com sucesso`);
    }

    sacar(valor: number): void {
        if (valor > this._saldo){
            throw new Error(`Saque de ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} não pode ser realizado. Seu saldo é de ${this._saldo.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)
        } else {
            this._saldo -= valor;
            console.log(`Saque de ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} realizado com sucesso`);
        }
    }

}

export {ContaBancaria}