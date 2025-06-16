const {body} = require("express-validator");

class RoleValidator{
    constructor(){


    }

    validateRole = [
        body("name").notEmpty().withMessage("name is required"),
        body("name").isString().withMessage("name must be string"),
        body("id").notEmpty().withMessage("id is required"),
        body("id").isNumeric().withMessage("id must be numeric")
   
    ]
}
module.exports = {
    RoleValidator
}