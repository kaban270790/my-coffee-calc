import {Instance as SequelizeInstance} from 'sequelize';
import UserAttributes from "./UserAttributes";

export default interface UserInstance extends SequelizeInstance<UserAttributes>, UserAttributes {

}
