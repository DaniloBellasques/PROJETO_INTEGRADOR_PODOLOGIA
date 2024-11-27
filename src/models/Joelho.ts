import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface DoencaClinicaInstance extends Model{
    id_tipo_doenca_dados_clinicos: number,
    descricao: string
}

export const tipodoenca = sequelize.define<DoencaClinicaInstance>("doenca_clinica",{
    id_tipo_doenca_dados_clinicos:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descricao:{
        type: DataTypes.STRING
    }

},{
    tableName:'DoencaClinica',
    timestamps:false
})