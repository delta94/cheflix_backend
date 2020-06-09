const { userService } = require('../services');
const { isEmail } = require('../utils').validate;

const getUser = async (req, res, next) => {
    try {
        res.json({
            status: 'successful',
            data: 'user'
        })
    } catch (e) {
        next(e);
    }
}

const createUser = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName, address, dateOfBirth } = req.body;
        // Check missing fields
        if (!email || !password) {
            throw new definedError.MissingParameter('Missing fields in registration form');
        }
        // Check correct email format
        if (!isEmail(email)) {
            throw new definedError.ValidationError('Invalid email string');
        }
        // See if this email is already used
        let user = await userService.findOne({ email });
        if (user) {
            throw new definedError.UsedEmail('Email is used');
        }

        // Create new user
        let newUser = await userService.create({ email, password, firstName, lastName, address, dateOfBirth });
        // Respond with newly created user
        return res.json({
            status: 'success',
            message: 'User created',
            data: {
                user: {
                    id: newUser.id,
                    email: newUser.email
                }
            }
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getUser,
    createUser
}