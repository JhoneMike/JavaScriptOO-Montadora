import { Veiculo } from "./Veiculo.js";

export class Motocicleta extends Veiculo{
    constructor(modelo, ano, numeroChassi, velocidadeMaxima, cor, quantidadeDeMarchas){
        super(modelo, ano, numeroChassi);

        this._cor = cor;
        this._velocidadeMaxima = velocidadeMaxima;
        this._quantidadeDeMarchas = quantidadeDeMarchas;
    }
}