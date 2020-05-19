import UserFactory from './UserFactory';
import sequelize from "../../components/Sequelize";
import {Sequelize} from "sequelize";

const UserModel = UserFactory(sequelize, Sequelize);
export default UserModel;

