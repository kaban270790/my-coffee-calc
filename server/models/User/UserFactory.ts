import {DataTypes, Sequelize} from "sequelize";
import UserInstance from "./UserInstance";
import UserAttributes from "./UserAttributes";
import {SequelizeAttributes} from "../../typings/SequelizeAttributes";

const UserFactory = (sequelize: Sequelize, dataType: DataTypes) => {
    const attributes: SequelizeAttributes<UserAttributes> = {
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
            defaultValue: new Date()
        },
        deleted_ts: {
            type: dataType.DATE,
            allowNull: true
        }
    };
    return sequelize.define<UserInstance, UserAttributes>('User', attributes, {
        tableName: 'users',
        createdAt: 'added_ts',
        updatedAt: false,
        timestamps: true,
        deletedAt: 'deleted_ts',
    });
};
export default UserFactory;
