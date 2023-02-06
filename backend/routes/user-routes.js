const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/users-controller");

const router = express.Router();

router.get("/", userController.getUsers);

router.post(
    "/signup",
    [
        check("name").not().isEmpty(),
        check("email").normalizeEmail().isEmail(), // Abc@abc.com => abc@abc.com
        check("password").isLength({ min: 6 }),
    ],
    userController.signUp
);

router.post(
    "/login",
    [
        check("email").normalizeEmail().isEmail(),
        check("password").isLength({ min: 6 }),
    ],
    userController.login
);

module.exports = router;
