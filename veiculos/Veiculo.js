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

    get velocidadeMaxima(){
        return this._velocidadeMaxima;
    }

    acelerar(velocidade){
       if(this.velocidadeMaxima >= velocidade){
           return console.log("A velocidade atual do veiculo é de " + velocidade + " km/h");
       }else{
           console.log("O carro não pode atingir a velocidade desejada!");
       }
    }

    freiar(velocidadeAtual) {
        if(velocidadeAtual > 120 && velocidadeAtual <= 300){
            console.log("Velocidade alta, ativando o sistema de freios ABS");
            while(velocidadeAtual >= 10 && velocidadeAtual > 0){
                console.log(velocidadeAtual + " km/h");
                velocidadeAtual -= 10;
            }
            console.log("O carro freiou com sucesso, a velocidade atual é de " + velocidadeAtual + " km/h");
        }else if(velocidadeAtual >= 301){
            console.log("Velocidade informada não é compativel!");
        }else{
            velocidadeAtual = 20;
            return console.log("Carro freiou com sucesso e em segurança!");
        }        
    }
}