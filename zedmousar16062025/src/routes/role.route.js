const {Router} = require('express');
const {RoleController} = require('../controllers/role.controller');
const { validarFields } = require('../midlewares/validate-fields.midleware');
const { RoleValidator, RoleValidator } = require('../validators/role.validators');

const router = Router();
const role_controller = new RoleController()
const roleValidator = new RoleValidator()
router.get(
    '/',
    role_controller.getAll)
module.exports = router;
router.get(
    '/:id',
    role_controller.getOne)
    router.post(
    '/',
    roleValidator.validateRole,
    validarFields,
    role_controller.created)
    router.put(
    '/:id',
    role_controller.updated)
    router.delete(
    '/:id',
    role_controller.deleted)
