const Sequelize = require("sequelize");
const shop = require("./models/shop");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
}) 

sequelize.authenticate()
    .then(() => console.log(`${process.env.NAME} is Connected`))
    .catch(err => console.log(err));
    
user = sequelize.import('./models/user');
comment = sequelize.import('./models/comment');
shop = sequelize.import('./models/shop')

user.hasMany(comment);
comment.belongsTo(user);

shop.hasMany(comment);
comment.belongsTo(shop);


module.exports = sequelize;