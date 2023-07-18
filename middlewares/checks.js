const { check } = require("express-validator");
const checks = [
  check("marca")
    .notEmpty()
    .withMessage("El campo marca es obligatorio")
    .isString()
    .withMessage("el campo marca debe ser de tipo string"),
  check("modelo")
    .notEmpty()
    .withMessage("El campo modelo es obligatorio")
    .isString()
    .withMessage("el campo modelo debe ser de tipo string"),
  check("año")
    .notEmpty()
    .withMessage("El campo año es obligatorio")
    .isNumeric()
    .withMessage("el campo año debe ser de tipo number"),
  check("nuevo")
    .notEmpty()
    .withMessage("El campo nuevo es obligatorio")
    .isBoolean()
    .withMessage("el campo nuevo debe ser de tipo string"),
  check("combustible")
    .notEmpty()
    .withMessage("El campo combustible es obligatorio")
    .isIn(['nafta', 'gas'])
    .withMessage('El campo combustible debe ser "nafta" o "gas"')
    .isString()
    .withMessage("el campo combustible debe ser de tipo string"),
];

module.exports = checks
