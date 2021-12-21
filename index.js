import { Carro } from "./veiculos/Carro.js";
import { Motocicleta } from "./veiculos/Motocicleta.js";
import { Veiculo } from "./veiculos/Veiculo.js";


const carroGolf = new Carro('Golf', 2021, '0089886779', 300, 'Vermelho' );

const motoHornet = new Motocicleta("Hornet", 2017, '00044455660', 260, 'Preto', 6);



console.log(carroGolf);
carroGolf.acelerar(295);