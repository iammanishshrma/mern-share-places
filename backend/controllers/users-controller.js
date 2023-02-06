const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
    {
        id: "u1",
        name: "Manish Sharma",
        email: "test1@test.com",
        password: "password",
        image: "https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png",
        places: 3,
    },
    {
        id: "u2",
        name: "Amit Sharma",
        email: "test2@test.com",
        password: "password",
        image: "https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png",
        places: 2,
    },
];

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
};

const signUp = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError(
            "Invalid inputs passed, please check your data",
            422
        );
        return next(error);
    }

    const { name, email, password } = req.body;

    const hasUser = DUMMY_USERS.find((u) => u.email === email);
    if (hasUser) {
        const error = new HttpError(
            "Could not create user, email already exists.",
            422
        );
        return next(error);
    }

    const createdUser = {
        id: uuid(),
        name,
        email,
        password,
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError(
            "Invalid inputs passed, please check your data",
            422
        );
        return next(error);
    }

    const { email, password } = req.body;

    const identifiedUser = DUMMY_USERS.find((u) => u.email === email);

    if (!identifiedUser || identifiedUser.password !== password) {
        const error = new HttpError(
            "Could not identify user, credentials seems to be wrong!!!",
            401
        );
        return next(error);
    }

    res.json({ message: "logged in" });
};

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
