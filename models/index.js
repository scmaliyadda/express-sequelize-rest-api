const { Sequelize } = require('sequelize');

//init sequelize with SQLite

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = sequelize;