export class Veiculo {

    constructor(modelo, ano, numeroChassi, velocidadeMaxima){

        if(this.constructor == Veiculo){
            throw new Error("Você não pode instanciar um objeto do tipo Veiculo, pois a classe é abstrata!");
        }


        this._modelo = modelo;
        this._ano = ano;
        this._numeroChassi = numeroChassi;
        this._velocidadeMaxima = velocidadeMaxima;
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

    acelerar(velocidade){
       
    }
}