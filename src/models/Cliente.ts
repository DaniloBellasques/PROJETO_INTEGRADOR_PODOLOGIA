import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface ClienteInstance extends Model {
    id_cliente: number;
    nome: string;
    data: Date;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    tel_res: string;
    tel: string;
    tel_emergencia: string;
    contato: string;
    data_nascimento: Date;
    profissao: string;
    email: string;
    sexo: "Masculino" | "Feminino" | "Outro";
}

export const Cliente = sequelize.define<ClienteInstance>("Cliente", {
    id_cliente: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE
    },
    endereco: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING,
        validate: {
            is: /^\d{5}-\d{3}$/ // Exemplo de validação de CEP
        }
    },
    tel_res: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.STRING
    },
    tel_emergencia: {
        type: DataTypes.STRING
    },
    contato: {
        type: DataTypes.STRING
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    profissao: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    sexo: {
        type: DataTypes.ENUM("Masculino", "Feminino", "Outro"),
        allowNull: false
    }
}, {
    tableName: 'cliente',
    timestamps: false
});