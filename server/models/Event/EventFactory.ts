import {DataTypes, Sequelize} from "sequelize";
import EventInstance from "./EventInstance";
import EventAttributes from "./EventAttributes";
import {SequelizeAttributes} from "../../typings/SequelizeAttributes";

const EventFactory = (sequelize: Sequelize, dataType: DataTypes) => {
    const attributes: SequelizeAttributes<EventAttributes> = {
        id: {
            type: dataType.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        date_start: {
            type: dataType.DATE,
            allowNull: false,
        },
        date_end: {
            type: dataType.DATE,
            allowNull: false,
        },
        diamonds: {
            type: dataType.INTEGER.UNSIGNED,
            allowNull: true
        },
        crystals: {
            type: dataType.INTEGER.UNSIGNED,
            allowNull: true
        }
    };
    return sequelize.define<EventInstance, EventAttributes>('Events', attributes, {
        tableName: 'events',
        createdAt: false,
        updatedAt: false,
        timestamps: true,
        deletedAt: false,
    });
};
export default EventFactory;
