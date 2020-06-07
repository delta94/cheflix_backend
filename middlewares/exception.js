const { definedError } = require('../utils');

const exceptionHandler = (err, req, res, next) => {
    // Status 404
    if (err instanceof definedError.NotFound) {
        console.log(err.message);
        return res.status(404).json({
            status: 'failed',
            errorCode: err.name,
            message: err.message
        });
    }
    // Status 401
    else if (
        err instanceof definedError.IncorrectEmail
        || err instanceof definedError.IncorrectPassword
        || err instanceof definedError.ExpiredToken
        || err instanceof definedError.InvalidToken
    ) {
        console.log(err.message);
        return res.status(401).json({
            status: 'failed',
            errorCode: err.name,
            message: err.message
        });
    }
    // Status 400
    else if (
        err instanceof definedError.MissingParameter
        || err instanceof definedError.ValidationError
    ) {
        console.log(err.message);
        return res.status(400).json({
            status: 'failed',
            errorCode: err.name,
            message: err.message
        });
    }
    // Status 409
    else if (
        err instanceof definedError.UsedEmail
    ) {
        console.log(err.message);
        return res.status(409).json({
            status: 'failed',
            errorCode: err.name,
            message: err.message
        });
    }
    // Status 500
    else {
        console.log(err.message);
        return res.status(500).json({
            status: 'failed',
            errorCode: 'Unexpected',
            message: 'Unexpected Error',
            debug: err.message
        });
    }
}

module.exports = {
    exceptionHandler
};