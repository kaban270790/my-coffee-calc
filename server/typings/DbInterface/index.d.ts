import Sequelize from "sequelize";
import User from '../../models/User';
import UserInstance from "../../models/User/Instance";
import UserAttributes from "../../models/User/Attributes";

export interface DbInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    User: Sequelize.Model<UserInstance, UserAttributes>;
}
