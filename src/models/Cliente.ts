import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

//DADOS PESSOAIS 

export interface ClienteInstance extends Model{
    id_cliente: number,
    nome: string,
    data: Date,
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    tel_res: string,
    tel: string,
    tel_emergencia: string,
    contato: string,
    data_nascimento: Date,
    profissao: string,
    email: string,
    sexo: "Masculino" | "Feminino" | "Outro"
}

export const dadopessoal = sequelize.define<ClienteInstance>("Pessoal,",{
    id_cliente:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    },
    data:{
        type: DataTypes.DATE
    },
    endereco:{
        type: DataTypes.STRING
    },
    bairro:{
        type: DataTypes.STRING
    },
    cidade:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    cep:{
        type: DataTypes.STRING
    },
    tel_res:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.STRING
    },
    tel_emergencia:{
        type: DataTypes.STRING
    },
    contato:{
        type: DataTypes.STRING
    },
    data_nascimento:{
        type: DataTypes.DATE
    },
    profissao:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    sexo: {
        type: DataTypes.ENUM("Masculino", "Feminino", "Outro"), // Define os valores possíveis
        allowNull: false, // Opcional: torna o campo obrigatório
    }
    

},{
    tableName:'cliente',
    timestamps:false
})