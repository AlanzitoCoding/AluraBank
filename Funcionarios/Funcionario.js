// Louvado seja o Senhor

export class Funcionario{
    constructor(nome, cpf, salario){
        if(this.constructor === Funcionario){
            throw new Error("Não deve-se instanciar diretamente a class Funcionario");
        }

        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
    }
}