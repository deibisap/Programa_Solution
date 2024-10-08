var con= require('../config/conexion');


module.exports={

index:function(req,res){

   con.query("SELECT * FROM usuarios", function (err,datos){
        console.log(datos);
    });

        res.render ('usuarios/index',{title: 'Aplicacion'});
}}
