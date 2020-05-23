import {DataTypes, Sequelize} from "sequelize";
import EventUserInstance from "./EventUserInstance";
import EventUserAttributes from "./EventUserAttributes";
import {SequelizeAttributes} from "../../typings/SequelizeAttributes";
import EventModel from "../Event";
import UserModel from "../User";

const EventUserFactory = (sequelize: Sequelize, dataType: DataTypes) => {
    const attributes: SequelizeAttributes<EventUserAttributes> = {
        id: {
            type: dataType.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        diamonds: {
            type: dataType.INTEGER.UNSIGNED,
            allowNull: true
        },
        crystals: {
            type: dataType.INTEGER.UNSIGNED,
            allowNull: true
        },
        cups: {
            type: dataType.INTEGER.UNSIGNED,
            allowNull: true
        },
        user: {
            type: dataType.INTEGER.UNSIGNED,
            references: {model: UserModel, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE},
        },
        event: {
            type: dataType.INTEGER.UNSIGNED,
            references: {model: EventModel, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE},
        }
    };
    return sequelize.define<EventUserInstance, EventUserAttributes>('EventUser', attributes, {
        tableName: 'event_user',
        createdAt: false,
        updatedAt: false,
        timestamps: true,
        deletedAt: false,
    });
};
export default EventUserFactory;
