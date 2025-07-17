const DataTypes = require('sequelize');
const sequelize = require('./index');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }

    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;