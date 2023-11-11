import { ConfiguracaoApp } from "./ConfiguracaoApp";

const exercicioSingleton = () => {
    const confApp = ConfiguracaoApp.getInstance("Meu App", "1.0");
    console.log(confApp); // { _nomeApp: 'Meu App', _versao: '1.0' }
    const confApp2 = ConfiguracaoApp.getInstance("Novo App", "1.1"); // Tentando instanciar outra instância com valores diferentes
    console.log(confApp2); // O valor de confApp2 será o mesmo de confApp
    ConfiguracaoApp.versao = "1.1" // As únicas formas de alterar as propriedades são pelos setters estáticos
    console.log(confApp);
    console.log(confApp2); // Ambas as instâncias foram alteradas, pois elas são relativas a mesma instância

    // const confApp3 = new ConfiguracaoApp("App", "1.0") // Isso não funcionaria, pois o construtor dessa classe é privado
}

export {exercicioSingleton}