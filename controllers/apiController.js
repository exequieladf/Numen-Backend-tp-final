const { Concesionaria } = require("../models/concesionaria");
const axios = require('axios')

class ApiController {
  async ver(req, res) {
    const autos = await Concesionaria.find();
    res.status(200).json({ autos });
  }
  async external (req, res) {
    try {
      const apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'; 
      const response = await axios.get(apiUrl); 
  
      const data = response.data; 
  
      res.json(data); 
    } catch (error) {
        
      res.status(500).json({ error: 'Error al obtener informacion de la Api externa' });
    }
  }

  async buscarSegunId(req, res) {
    const autos = await Concesionaria.findById(req.params.id);
    res.status(200).json({ autos });
  }
  async crear(req, res) {
    try {
      const nuevoAuto = new Concesionaria(req.body);
      await nuevoAuto.save();

      res.status(201).json(nuevoAuto);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async editar(req, res) {
    try {
      await Concesionaria.findByIdAndUpdate(req.params.id, req.body )
      res.status(201).json({
        msg: "producto editado"
      })
    } catch (error) {
      
    }
  }
  async eliminar(req, res) {
    await Concesionaria.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: "producto eliminado"
    })
  }
}
module.exports = new ApiController();
