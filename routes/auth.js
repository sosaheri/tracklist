const express = require('express');
const { encrypt, compare } = require('../helpers/handlerPassword')
const { usersModel } = require('../models');
const router = express.Router();


// TODO validator
router.post("/register", async (req, res) => {
    const body = req.body
    console.log(body, body.password);
    const passwordHash = await encrypt(body.password);
    console.log(passwordHash);   
    const dataStored = {...body, password:passwordHash};
    const data = await usersModel.create(dataStored);
    res.send({data:data});

});

module.exports = router;