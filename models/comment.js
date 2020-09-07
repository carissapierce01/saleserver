const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
        nameOfCommenter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descriptionOfComment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Comment;
};