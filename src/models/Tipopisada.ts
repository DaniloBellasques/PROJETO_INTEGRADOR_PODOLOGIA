import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TipopisadaInstance extends Model {
    id_tipo_pisada: number;
    descricao: "Cavo" | "Chato" | "Normal"; // Valores literais possíveis para descricao
}

export const Tipopisada = sequelize.define<TipopisadaInstance>("Tipopisada", {
    id_tipo_pisada: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    descricao: {
        type: DataTypes.ENUM("Cavo", "Chato", "Normal"), // Aqui definimos os 3 tipos possíveis para descricao
        allowNull: false // Opcional: garante que o campo não seja nulo
    }
}, {
    tableName: 'tipo_pisada',
    timestamps: false
});
