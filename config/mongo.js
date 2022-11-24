const mongoose = require("mongoose");

const dbConnect = () => {

    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(error, response)=>{
        if(!error){
            console.log(" CONECTADO A ATLAS MONGODB");
        }else{
            console.log(" ERROR CONECTADO A ATLAS MONGODB");
        }
    })

}

module.exports = dbConnect