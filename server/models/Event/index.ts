import EventFactory from './EventFactory';
import sequelize from "../../components/Sequelize";
import {Sequelize} from "sequelize";

const EventModel = EventFactory(sequelize, Sequelize);
export default EventModel;

