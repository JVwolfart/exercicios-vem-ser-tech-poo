import { Cachorro } from "./Cachorro"
import { Passaro } from "./Passaro";

const exercicioHerancaPolimorfismo = () => {
    const cachorro = new Cachorro("Labrador");
    const passaro = new Passaro("Bem te vi");

    cachorro.emitirSom();
    cachorro.mover();

    passaro.emitirSom();
    passaro.mover();
}

export {exercicioHerancaPolimorfismo}