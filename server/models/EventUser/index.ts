import EventUserFactory from './EventUserFactory';
import sequelize from "../../components/Sequelize";
import {Sequelize} from "sequelize";

const EventUserModel = EventUserFactory(sequelize, Sequelize);
export default EventUserModel;

