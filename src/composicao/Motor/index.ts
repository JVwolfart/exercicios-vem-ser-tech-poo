class Motor {
    private _ligado: boolean = false;

    ligar(): void {
        if (!this._ligado){
            this._ligado = true;
            console.log("Motor ligado",);
        } else {
            console.log("Motor já está ligado");
        }
    }

    desligar(): void {
        if (this._ligado) {
            this._ligado = false;
            console.log("Motor desligado");
        } else {
            console.log("Motor já está desligado");
        }
    }
    
}

export {Motor}