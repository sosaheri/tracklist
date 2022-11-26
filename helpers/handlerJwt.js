const jwt = require('jsonwebtoken');
const get_properties = require('./handlerPropertiesEngine');
const propertiesKey = get_properties();
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * 
 * @param {*} user 
 * @returns 
 */
const tokenSign = async (user) => {
 const sign = await jwt.sign(
    {
    [propertiesKey.id]: user[propertiesKey.id],
    role:user.role
    },
    JWT_SECRET,
    {
        expiresIn: '2h',
    }
 
 );
 
 return sign;

};

/**
 * verifica autenticidad de token jwt
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try {
         return jwt.verify(tokenJwt, JWT_SECRET);

    } catch (error) {
        return null
    }
};

module.exports = { tokenSign, verifyToken };