const { Concesionaria } = require("../models/concesionaria");
const validarID = async (req, res, next) => {
  try {
    const autos = await Concesionaria.findById(req.params.id);
    if (autos !== null) {
      next();
    } else {
      res.status(400).json({
        msg: "id ingresado invalido",
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { validarID }