import {Instance as SequelizeInstance} from 'sequelize';
import Attributes from "./Attributes";

export default interface Instance extends SequelizeInstance<Attributes>, Attributes {

}
