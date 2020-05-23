const TABLE = 'event_user';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER.UNSIGNED
            },
            user: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {model: 'users', key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE},
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            event: {
                type: Sequelize.INTEGER.UNSIGNED,
                references: {model: 'events', key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE},
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            cups: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true
            },
            diamonds: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true
            },
            crystals: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: true,
            }
        }, {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE);
    }
};
