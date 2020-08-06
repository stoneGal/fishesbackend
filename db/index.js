const { Client }  = require('pg');
// require('dotenv').config({ path: '../.env' })

const client = new Client({
   
    // user: process.env.USER,
    // host : process.env.HOST,
    // database: process.env.DATABASE_NAME,
    // password: process.env.PASSWORD,
    // port: process.env.PORT,
    
    user :'postgres',
    password: 'bashorunbethel99',
    host :'localhost',
    port :3000,
    database: 'fishes-app',

   
   
});

client.connect();


module.exports = client;