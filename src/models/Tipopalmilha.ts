import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipopalmilhaInstance extends Model {
    id_tipo_pisada: number;
    descricao: "Ortopédica" | "Descanso" ; // Valores literais possíveis para descricao
}

export const Tipopalmilha = sequelize.define<TipopalmilhaInstance>("Tipopalmilha", {
    id_tipo_palmilha: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descricao: {
        type: DataTypes.ENUM("Ortopédica", "Descanso"), // Aqui definimos os 2 tipos possíveis para descricao
        allowNull: false // Opcional: garante que o campo não seja nulo
    }
}, {
    tableName: 'tipo_pisada',
    timestamps: false
});
