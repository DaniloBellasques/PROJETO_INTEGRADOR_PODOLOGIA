import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface DoencaClinicaInstance extends Model{
    id: number,
    descricao: [
        "Osteoporose", 
        "Cardiopatia", 
        "Marca Passo", 
        "Hipotireoidismo", 
        "Hipertensão", 
        "Hipotensão", 
        "Renal", 
        "Neuropatia", 
        "Reumatismo", 
        "Alterações ou doenças associadas", 
        "Epilepsia", 
        "Hepatite", 
        "Hansenase", 
        "Quimioterapia", 
        "Antecedentes", 
        "Cirurgia MMII", 
        "diabetes"
    ]
}

export const tipodoenca = sequelize.define<DoencaClinicaInstance>("doenca_clinica",{
    id:{
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