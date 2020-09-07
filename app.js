//! ENV
require('dotenv').config();
let bcrypt = require('bcryptjs');

//! EXPRESS
const express = require('express'); 
const app = express();


//!CONTROLLERS
const shop = require('./controllers/shopcontroller')
const comment = require('./controllers/commentcontroller')
const user = require('./controllers/usercontroller');

//! DATABASE
const sequelize = require('./db'); 
sequelize.sync();
// sequelize.sync({force: true})
app.use(express.json());  
app.use(require('./middleware/headers'));


//! ROUTES
app.use('/shop', shop)
app.use('/comment', comment)
app.use('/user', user)

app.listen(3001, function(){
    console.log('App is listening on port 3000');
})