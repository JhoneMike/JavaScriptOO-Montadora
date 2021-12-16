import { Veiculo } from "./Veiculo.js"

export class Carro extends Veiculo{

    constructor(modelo, ano, numeroChassi, velocidadeMaxima, cor){
        super(modelo, ano, numeroChassi);

        this._cor = cor;
        this._velocidadeMaxima = velocidadeMaxima;
    }

}