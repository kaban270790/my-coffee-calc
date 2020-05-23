import {Instance as SequelizeInstance} from 'sequelize';
import EventAttributes from "./EventAttributes";

export default interface EventInstance extends SequelizeInstance<EventAttributes>, EventAttributes {

}
