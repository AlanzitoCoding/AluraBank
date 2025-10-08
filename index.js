// Louvado seja o Senhor 

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAuth } from "./SistemaAuth.js";

const diretor = new Diretor("Pedro", 12345678900, 10000);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Adam", 11122233300, 4000);
gerente.cadastrarSenha("32145");

const cliente = new Cliente("Wyna", 12343245312, "231");

const isDiretorLogged = SistemaAuth.login(diretor, "123456");
const isGerenteLogged = SistemaAuth.login(gerente, "32145");
const isClienteLogged = SistemaAuth.login(cliente, "231");

console.log(isDiretorLogged, isGerenteLogged, isClienteLogged);