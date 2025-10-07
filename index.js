// Louvado seja o Senhor 

import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Pedro", 12345678900);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaCorrentePedro = new ContaCorrente(cliente2, 1002);
contaCorrentePedro.depositar(1000);
contaCorrentePedro.sacar(250);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const conta = new Conta(900, cliente1, 1001);

// console.log(conta);
// console.log(contaPoupanca);
// console.log(contaCorrentePedro);