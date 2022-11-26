const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * 
 * @param {*} user 
 * @returns 
 */
const tokenSign = async (user) => {
 const sign = await jwt.sign(
    {
    _id:user._id,
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