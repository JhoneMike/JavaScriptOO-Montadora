import { Veiculo } from "./Veiculo.js"

export class Carro extends Veiculo{

    constructor(modelo, ano, numeroChassi, cor){
        super(modelo, ano, numeroChassi);

        this._cor = cor;
    }

}