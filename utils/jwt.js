const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const { JWT_SECRET } = require('../config/config.json')[env].jwt;

function signToken(payload) {
    return jwt.sign({
        ...payload
    },
    JWT_SECRET,
    {
        expiresIn: '30d'
    }
    )
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) { reject(err) }
        else { resolve(decode) }
      });
    });
  }  

module.exports = {
    signToken,
    verifyToken
}