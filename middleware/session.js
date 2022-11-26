const { tokenSign, verifyToken } = require('../helpers/handlerJwt');
const { usersModel } = require('../models');

const authMiddleware = async (req, res, next) => {
    try {
        
        const body = req.body;
        const auth = req.headers.authorization;
        if(!auth){
            res.status(401);
            res.send({error: "PROBLEMAS CON TOKEN"});
        }

        const token = auth.split(' ').pop();
        const dataToken = await verifyToken(token); 

        if(!dataToken._id){
            res.status(401);
            res.send({error: "ID no valido"});
        }
        const user = await usersModel.findOne({_id:dataToken._id});
        req.user = user;
        next();

    }
    catch (err ){
            res.status(500)
            res.send({error: err})

    }   
};

module.exports = authMiddleware