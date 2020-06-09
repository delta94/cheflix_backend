const {
  jwt,
  definedError
} = require('../utils');
const { userService } = require('../services');

function authorize(cb) {
  return async function (req, res, next) {
    try {
      const bearerHeader = req.headers['authorization'];
      if (typeof bearerHeader === 'undefined') {
        throw new definedError.MissingHeader('Authorization header is undefined');
      }
      const token = bearerHeader.split(" ")[1];
      // Verify token
      let decode;
      try {
        decode = await jwt.verifyToken(token);
      } catch (e) {
        throw new definedError.InvalidToken('Token is invalid');
      }
      // Check if token has expired
      if (decode.exp < Date.now()/1000) {
        throw new definedError.ExpiredToken('Token has expired');
      } else {
        // Find user by token
        cb && cb(decode);
        let user = await userService.findOne({ email: decode.email });
        if (!user) {
          throw new definedError.InvalidToken('Token is invalid');
        }
        // Put user info in request
        user = user.get();
        req.user = user;
        req.token = token;
        next();
      }
    } catch (e) {
      next(e);
    }
  }
}

const checkAuthorization = authorize();

const checkAdminAuthorization = authorize((decode) => {
  if (!decode.isAdmin === true) {
    throw new definedError.InvalidToken('Token is invalid');
  }
});

module.exports = {
  checkAuthorization,
  checkAdminAuthorization
}
