import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface TipomarchaInstance extends Model{
    id_tipo_marcha: number,
    descricao: "normal" | "patológica" | string
}

export const tipomarcha = sequelize.define<TipomarchaInstance>("TipoMarcha",{
    id_tipo_marcha:{
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descricao:{
        type: DataTypes.ENUM("normal", "patológica"), // Aqui definimos os 3 tipos possíveis para descricao
        allowNull: false // Opcional: garante que o campo não seja nulo
    }

},{
    tableName:'tipo_marcha',
    timestamps:false
})