const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('shop', {

        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    
    return Shop;

}