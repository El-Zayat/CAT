import { check } from "express-validator";
import { handleValidationError } from "./handleValidationError";

const register = [
    check("fullName")
        .notEmpty()
        .withMessage("fullName is required!")
        .bail()
        .isAlpha()
        .withMessage("The full name can't contain numbers!"),
    check("email")
        .notEmpty()
        .withMessage("email is required!")
        .bail()
        .isEmail({ host_whitelist: ["gmail.com"] })
        .withMessage("Email must be gmail."),
    check("password")
        .notEmpty()
        .withMessage("Please enter a password!")
        .bail()
        .isStrongPassword()
        .withMessage("Password is not strong enough."),
    check("passwordConfirm")
        .custom((passConfirm, { req }) => {
            return passConfirm == req.body.password;
        })
        .withMessage("Password and comfirm password do not match!"),

    check("birthdate").isDate().withMessage("Birthdate must be a valid date!"),

    handleValidationError,
];

export default { register };
