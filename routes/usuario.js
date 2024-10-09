var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");


/* GET home page. */
router.get('/',usuariosController.index);
router.get('/crear_usuario',usuariosController.crear_usuario);
  
module.exports = router;
