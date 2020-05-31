import Sequelize from "sequelize";
import config from "../../../config/database.json";

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    port: config.port
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .then(() => {
        return sequelize.query("SET NAMES UTF8");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;
