var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");


/* GET home page. */
router.get('/',usuariosController.index);
  
module.exports = router;
