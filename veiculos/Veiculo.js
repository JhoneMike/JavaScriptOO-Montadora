export class Veiculo {

    constructor(modelo, ano, numeroChassi, velocidadeMaxima){

        if(this.constructor == Veiculo){
            throw new Error("Você não pode instanciar um objeto do tipo Veiculo, pois a classe é abstrata!");
        }


        this._modelo = modelo;
        this._ano = ano;
        this._numeroChassi = numeroChassi;
        this._velocidadeMaxima = velocidadeMaxima;
        this._velocidadeAtualDoVeiculo = 0;
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

    get velocidadeMaxima(){
        return this._velocidadeMaxima;
    }

    velocidadeAtualDoVeiculo(velocidade){
        return this._velocidadeAtualDoVeiculo = velocidade;
    }

    get velocidadeDoVeiculo(){
        return this._velocidadeAtualDoVeiculo;
    }

    acelerar(velocidade){
       if(this.velocidadeMaxima >= velocidade){
           this.velocidadeAtualDoVeiculo(velocidade);
           console.log("Acelerando");
           return console.log("A velocidade atual do veiculo é de " + velocidade + " km/h");
       }else{
           console.log("O carro não pode atingir a velocidade desejada!");
       }
    }

    freiar() {
        if(this.velocidadeDoVeiculo > 120 && this.velocidadeDoVeiculo <= 300){
            console.log("Velocidade alta, ativando o sistema de freios ABS");
            while(this.velocidadeDoVeiculo >= 15 && this.velocidadeDoVeiculo > 0){
                console.log(this.velocidadeDoVeiculo + " km/h");
                this.velocidadeAtualDoVeiculo(this.velocidadeDoVeiculo - 10);
            }
            console.log("O carro freiou com sucesso, a velocidade atual é de " + this.velocidadeDoVeiculo + " km/h");
        }else if(this.velocidadeDoVeiculo >= 301){
            console.log("Velocidade informada não é compativel!");
        }else{
            this.velocidadeDoVeiculo = 20;
            return console.log("Carro freiou com sucesso e em segurança!");
        }        
    }
}