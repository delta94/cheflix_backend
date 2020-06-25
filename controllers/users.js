const { userService } = require('../services');
const {
    validate,
    definedError, jwt
} = require('../utils');
const users = require('../services/users');
const { isEmail } = validate;

const getUser = async (req, res, next) => {
    console.log('called to get 1')
    try {
        let { id } = req.params;
        let user = await userService.findOne({ id });
        // if no user
        if (!user) {
            throw new definedError.NotFound('User not found');
        }
        return res.json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (e) {
        next(e);
    }
}

const getUserList = async (req, res, next) =>{
    console.log('called to get n')
    try{
        console.log('query', req.query);
        let q = req.query.firstName?{firstname:req.query.firstName}:'';
        let users = await userService.findAll({});

        if (!users) {
            throw new definedError.NotFound('User not found');
        }
        console.log(users)
        res.header('Access-Control-Expose-Headers', 'X-Total-Count');
        res.set("x-total-count", users.length);
        return res.json(users)
    }catch(e){
        next(e);
    }

}

const createToken = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // See if email is correct
        let user;

        if (isEmail(email)){
            user = await userService.findOne({ email })
        }else{
            user = await userService.findOne({ username:email });
        }
        if (!user) {
            throw new definedError.IncorrectEmail('Email is incorrect');
        }
        console.log(password);
        // See if password is correct
        let isCorrectPassword = await userService.comparePassword({ id: user.id, password })
        if (!isCorrectPassword) {
            throw new definedError.IncorrectPassword('Password is not correct');
        }
        // Generate token
        let token = jwt.signToken({
            id: user.id,
            email: user.email
        });
        // Respond with token
        return res.status(200).json({
            status: 'success',
            data: {
                token,
                id: user.id
            }
        });
    } catch (e) {
        next(e);
    }
}

const createUser = async (req, res, next) => {
    console.log('called to create')
    try {

        const {username, email, password, firstName, lastName, address, dateOfBirth } = req.body;

        // Check missing fields
        if (!username || !email || !password) {
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

        // See if this username is already used
        let user2 = await userService.findOne({ username });
        if (user2) {
            throw new definedError.UsedUsername('Username is used');
        }
        // Create new user
        console.log('here')
        let newUser = await userService.create({username, email, password, firstName, lastName, address, dateOfBirth });

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

const updateUser = async (req, res, next) => {
    console.log('called to update')
    try {
        let { id } = req.params;
        let { firstName, lastName, address, dateOfBirth, phoneNumber, gender, picture } = req.body;

        // let { firstName, lastName, address, dateOfBirth, phoneNumber,sex} = req.body;
        let user = await userService.findOne({ id });
        // if no user then throw error
        if(!user) throw new definedError.NotFound('User not found');
        // set changes
        user.firstName = firstName;
        user.lastName = lastName;
        user.address = address;
        user.dateOfBirth = dateOfBirth;
        user.phoneNumber = phoneNumber;
        user.gender = gender;
        user.picture = picture;

        // save changes
        await user.save();
        return res.json({
            status: 'success',
            message: 'User updated'
        });
    } catch (e) {
        next(e);
    }
}

const deleteUser = async (req, res, next) =>{
        console.log('called to update')
    try {
        let { id } = req.params;
        // let { firstName, lastName, address, dateOfBirth, phoneNumber,sex} = req.body;
        let user = await userService.destroy({ id });
        // if no user then throw error
        if(!user) throw new definedError.NotFound('User not found');
        // save changes
        // await user.save();
        return res.json({
            status: 'success',
            message: 'User delete'
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createToken,
    getUser,
    createUser,
    updateUser,
    getUserList,
    deleteUser
}