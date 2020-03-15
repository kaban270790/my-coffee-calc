import {DataTypes, Sequelize} from "sequelize";
import Instance from "./Instance";
import Attributes from "./Attributes";
import {SequelizeAttributes} from "../../typings/SequelizeAttributes";

const Factory = (sequelize: Sequelize, dataType: DataTypes) => {
    const attributes: SequelizeAttributes<Attributes> = {
        id: {
            type: dataType.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        user_name: {
            type: dataType.STRING,
            allowNull: false,
        },
        home: {
            type: dataType.TINYINT.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        added_ts: {
            type: dataType.DATE,
            allowNull: false,
        },
        deleted_ts: {
            type: dataType.DATE,
            allowNull: true
        }
    };
    return sequelize.define<Instance, Attributes>('User', attributes, {
        tableName: 'users',
        createdAt: 'added_ts',
        updatedAt: false
    });
};
export default Factory;
