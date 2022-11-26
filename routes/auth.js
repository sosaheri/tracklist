const express = require('express');
const { encrypt, compare } = require('../helpers/handlerPassword')
const { usersModel } = require('../models');
const { tokenSign, verifyToken } = require('../helpers/handlerJwt')
const router = express.Router();


// TODO validator, controller for register, controller for login

router.post("/register", async (req, res) => {
    const body = req.body
    console.log(body, body.password);
    const passwordHash = await encrypt(body.password);
    console.log(passwordHash);   
    const dataStored = {...body, password:passwordHash};
    const dataUser = await usersModel.create(dataStored);
    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }

    res.send({data});

});

router.post("/login", async (req, res) => {

    const body = req.body
    const dataUser = await usersModel.findOne({email:body.email});
    const check = await compare( body.password, dataUser.password )

    if(!check){
        return false
    }

    dataUser.set('password', undefined, {strict:false});
    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    // const diff = await verifyToken(req.header.Authorization)
    
    // console.log(dataUser,check, diff);




    // const passwordHash = await encrypt(body.password);
    // console.log(passwordHash);   
    // const dataStored = {...body, password:passwordHash};
    
    res.send({data});

});

module.exports = router;