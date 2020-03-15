import Factory from './Factory';
import sequelize from "../../components/Sequelize";
import {Sequelize} from "sequelize-typescript";

const Model = Factory(sequelize, Sequelize);
export default Model;

