const { testService } = require('../services');
const {
    validate,
    definedError, jwt
} = require('../utils');
const users = require('../services/tests');

const getTests = async (req, res, next) => {
	try {

	} catch (e) {
		next(e);
	}
}

const createTest = async (req, res, next) => {
    try {
        const { cauhoi, A, B, C, D, dapan } = req.body;
        // Check missing fields
        
        // Create new user
        let newTest = await userService.create({ cauhoi, A, B, C, D, dapan });
        // Respond with newly created user
        return res.json({
            status: 'success',
            message: 'Test created',
            data: {
                Test : {
                    id: newTest.id,
                    A: newTest.A,
                    B: newTest.B,
                    C: newTest.C,
                    D: newTest.D,
                    dapan: newTest.dapan
                }
            }
        });
    } catch (e) {
        next(e);
    }
}


module.exports = {
	getTests,
    createTest
}