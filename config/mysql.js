const { Sequelize } = require("sequelize");


const database = process.env.MYSQL_DB;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host: 'localhost',
        dialect: 'mysql' 
    }
);

const dbConnectMysql = async () => {

    try {

        await sequelize.authenticate();
        console.log("*** CONECTADO A MYSQL  ***");

        
    } catch (error) {

        console.log(" ERROR CONECTADO A MYSQL", error);

    }

}

module.exports = { sequelize, dbConnectMysql}