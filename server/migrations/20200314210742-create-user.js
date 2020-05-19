const TABLE = 'users';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            user_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            home: {
                type: Sequelize.TINYINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
            },
            added_ts: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            deleted_ts: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE);
    }
};
