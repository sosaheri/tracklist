const express = require('express');
const filesystem = require('fs');
const router = express.Router();  //libreria enrutador https://www.geeksforgeeks.org/express-js-express-router-function/

const PATH_ROUTES = __dirname;

const removeExt = (fileName) => {

    return fileName.split('.').shift();

}

filesystem.readdirSync(PATH_ROUTES).filter((file) => {

        const name = removeExt(file);

        if(name !== 'index'){
            router.use(`/${name}`, require(`./${file}`));
        }
}) 


router.get("/", (req,res) => {
    const data = "OK";
    
    res.send({data});

})

module.exports = router;