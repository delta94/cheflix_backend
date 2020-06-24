const { exceptionHandler } = require('./exception');
const {
    checkAuthorization,
    checkAdminAuthorization
} = require('./authorization');

const {addHeader} = require('./addHeader');

const {
    upload
} = require('./multer');

const {
    preUpdateUser,
    preUpdateClass
} = require('./form');

module.exports = {
    exceptionHandler,
    checkAuthorization,
    checkAdminAuthorization,
    upload,
    preUpdateUser,
    preUpdateClass
    addHeader
}