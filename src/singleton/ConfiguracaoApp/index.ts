class ConfiguracaoApp {
    private static instance: ConfiguracaoApp;
    private _nomeApp: string;
    private _versao: string;

    private constructor(nomeApp: string, versao: string) {
        this._nomeApp = nomeApp;
        this._versao = versao;
    }

    static getInstance(nomeApp: string, versao: string): ConfiguracaoApp {
        if(!ConfiguracaoApp.instance){
            ConfiguracaoApp.instance = new ConfiguracaoApp(nomeApp, versao);
        }
        return ConfiguracaoApp.instance;
    }

    get nomeApp(){
        return ConfiguracaoApp.instance._nomeApp;
    }

    set nomeApp(nomeApp: string){
        ConfiguracaoApp.instance._nomeApp = nomeApp;
    }

    static get versao(){
        return ConfiguracaoApp.instance._versao;
    }

    static set versao(versao: string){
        ConfiguracaoApp.instance._versao = versao;
    }
}

export {ConfiguracaoApp}