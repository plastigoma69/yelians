const {body} = require("express-validator");

class UserValidator{
    constructor(){


    }

    validateUser = [
        body("name").notEmpty().withMessage("name is required"),
        body("name").isString().withMessage("name must be string"),
        body("email").notEmpty().withMessage("email is required"),
        body("email").isEmail().withMessage("Email format incorrect, example format example@gmail.com"),
        body("pasword").isAlphanumeric().withMessage("The pasword must be alphanumeric"),
        body("pasword").notEmpty().withMessage("pasword is required"),
        body("role_id").isNumeric().withMessage("The rol id is required"),
       

        
    ]
}
module.exports = {
    UserValidator
}