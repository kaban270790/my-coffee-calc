import Sequelize from "sequelize";
import UserInstance from "../../models/User/UserInstance";
import UserAttributes from "../../models/User/UserAttributes";

export interface DbInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    User: Sequelize.Model<UserInstance, UserAttributes>;
}
