class NotFound extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'NotFound';
    }
}

class UsedEmail extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'UsedEmail';
    }
}

class UsedUsername extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'UsedUsername';
    }
}

class IncorrectEmail extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'IncorrectEmail';
    }
}

class IncorrectPassword extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'IncorrectPassword';
    }
}

class MissingParameter extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'MissingParameter';
    }
}

class ValidationError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'ValidationError';
    }
}

class ExpiredToken extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'ExpiredToken';
    }
}

class InvalidToken extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'InvalidToken';
    }
}

class MissingHeader extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'MissingHeader';
    }
}

module.exports = {
    NotFound,
    UsedEmail,
    IncorrectEmail,
    IncorrectPassword,
    MissingParameter,
    ValidationError,
    ExpiredToken,
    InvalidToken,
    MissingHeader
}