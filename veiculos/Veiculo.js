export class Veiculo {

    constructor(modelo, ano, numeroChassi){
        this._modelo = modelo;
        this._ano = ano;
        this._numeroChassi = numeroChassi;
    }

    get modelo(){
        return this._modelo;
    }

    get ano(){
        return this._ano;
    }

    get numeroChassi(){
        return this._numeroChassi;
    }
}