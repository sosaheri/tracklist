const { tokenSign, verifyToken } = require('../helpers/handlerJwt');
const { usersModel } = require('../models');
const get_properties = require('../helpers/handlerPropertiesEngine');
const propertiesKey = get_properties();

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

        if(!dataToken){
            res.status(401);
            res.send({error: "ID no valido"});
        }
        const query = {
            [propertiesKey.id]: dataToken[propertiesKey.id]
        }

        const user = await usersModel.findOne({query});
        req.user = user;
        next();

    }
    catch (err ){
            res.status(500)
            res.send({error: err})

    }   
};

module.exports = authMiddleware