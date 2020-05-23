const TABLE = 'events';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            date_start: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            date_end: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            diamonds: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true
            },
            crystals: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE);
    }
};
