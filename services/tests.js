const db = require('../models');

const {
    bcrypt
} = require('../utils');

const create = async (data) => {

    return db.Test.create({
        ...data
    });
}

module.exports = {    
    create
}