const mongoose = require('mongoose');
const config = require('../config/config');

// console.log(config);

mongoose.set('strictQuery', false)
const connectDatabase = async () => {

    

   const result= await mongoose.connect(config.DB_CONNECTION_URL);

   return result;
};

module.exports = connectDatabase;
