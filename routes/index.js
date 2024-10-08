var express = require('express');
var router = express.Router();
const usuariosController = require("../controllers/usuariosController");


/* GET home page. */
router.get('/',function(req, res, next){
        res.send('Bienvenido a solution');

});
  
module.exports = router;
