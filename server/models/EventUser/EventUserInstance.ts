import {Instance as SequelizeInstance} from 'sequelize';
import EventAttributes from "./EventUserAttributes";

export default interface EventUserInstance extends SequelizeInstance<EventAttributes>, EventAttributes {

}
