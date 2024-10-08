var conexion= require('../config/conexion');
var usuario= require('../model/usuario');


module.exports={

index:function(req,res){

    usuario.obtener(conexion,function(error,datos) {
            console.log(datos);
            res.render ('usuarios/index',{title: 'Aplicacion'});
    });

   //con.query("SELECT * FROM usuarios", function (err,datos){
       // console.log(datos);
    //});
       
}
}
