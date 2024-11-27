import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface MarchaartjoelhoInstance extends Model {
    id_marcha_articulacao_joelho: number;
    id_informacoes_podologicas: number;
    id_tipo_marcha: number;
    id_tipo_joelho: number;
    id_tipo_articulacao: number;
    id_sensibilidade_dor: number;
}

export const MarchaArticulacaoJoelho = sequelize.define<MarchaartjoelhoInstance>("MarchaArticulacaoJoelho", {
    id_marcha_articulacao_joelho: {
        primaryKey: true, // Se você deseja que esse campo seja a chave primária, ele deve ser o único com "primaryKey: true"
        type: DataTypes.INTEGER
    },
    id_informacoes_podologicas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_marcha: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_joelho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_tipo_articulacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_sensibilidade_dor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'id_marcha_articulacao_joelho', // Nome da tabela (sem o 'id_')""
    timestamps: false // Se você não está usando `createdAt` e `updatedAt`
});
