const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
}) 

sequelize.authenticate()
    .then(() => console.log(`${process.env.NAME} is Connected`))
    .catch(err => console.log(err));
    
user = sequelize.import('./models/user');
comment = sequelize.import('./models/comment');

user.hasMany(comment);
comment.belongsTo(user);



module.exports = sequelize;