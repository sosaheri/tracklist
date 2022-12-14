require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo");
const { dbConnectMysql } = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors()); //maneja las peticiones cruzadas
app.use(express.json()); //.json me permite enviar recibir jsons
app.use(express.static('storage')); //especifica de donde se tomaran los archivos publicos del server


const port = process.env.PORT || 3000;  //process.env varaible de ambiente de node jala data del dotenv

app.use("/api",require("./routes"));

app.listen(port, () => {
    console.log('app up http://localhost:'+port);
});

( ENGINE_DB === 'nosql' ) ? dbConnect() : dbConnectMysql();