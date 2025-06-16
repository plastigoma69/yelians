const { Router } = require('express');
const { Usercontroller } = require('../controllers/user.controller');
const { UserValidator } = require('../validators/user.validator');
const { validarFields } = require('../midlewares/validate-fields.midleware');



const router = Router();
const user_controller = new Usercontroller()
const user_validator = new UserValidator()
router.get(
    '/',
    user_controller.getAll)
module.exports = router;
router.get(
    '/:id',
    user_controller.getOne)
router.post(
    '/',
    user_validator.validateUser,
validarFields,
user_controller.created
)
router.put(
    '/:id',
    user_controller.updated)
router.delete(
    '/:id',
    user_controller.deleted)
