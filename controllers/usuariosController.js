var conexion= require('../config/conexion');
var usuario= require('../model/usuario');


module.exports={

index:function(req,res){

    usuario.obtener(conexion,function(error,datos) {
            console.log(datos);
            res.render ('usuarios/index',{title: 'Aplicacion', usuarios_mostrar:datos});
    });
  
},

crear_usuario: function (res, req) {

    res.render ('usuarios/crear_usuario');
    
}
}
