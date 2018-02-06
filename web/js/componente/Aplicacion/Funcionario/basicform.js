
function Funcionario_basicform (   )
{

    var funf_categoria = document.getElementById( 'funf_categoria');
    funf_categoria.onblur  = function() {                
        funf_categoria.value  = fmtNum(funf_categoria.value);           
        var idvalor = funf_categoria.value;        
        
        
        document.getElementById( 'categoria_descripcion').innerHTML = funcionariocategoria_descripcion_Json( idvalor );         
        
        
    };     
    funf_categoria.onblur();
    
    var funf_categoria_buscar = document.getElementById( 'funf_categoria_buscar');
    funf_categoria_buscar.addEventListener('click',
        function()
        {              
            ModalBusquedaSimple('Cate',  getRutaAbsoluta()+'/Aplicacion/FuncionarioCategoria/jspf/busqueda.jspx',
                    "FuncionarioCategoria", "funf_categoria" , "funcionariocategoria_tabla", 600 );                                        
        },
        false
    );   

    

    var funf_usuario = document.getElementById( 'funf_usuario');
    funf_usuario.onblur  = function() {                
        funf_usuario.value  = fmtNum(funf_usuario.value);           
        var idvalor = funf_usuario.value;                
        document.getElementById( 'usuario_descripcion').innerHTML = Usuario_cuenta_Json( idvalor );         
    };     
    funf_usuario.onblur();
        
    
    var funf_usuario_buscar = document.getElementById( 'funf_usuario_buscar');
    funf_usuario_buscar.addEventListener('click',
        function()
        {                         
            VentanaModalBusqueda('Usub',  
                getRutaAbsoluta()+'/Sistema/Usuario/jspf/busqueda.jspx', 
                "Usuario", 
                "funf_usuario" , 
                "usuarios_tabla", 
                700 );                  
        },
        false
    );   
    

}




function Funcionario_AgregarEditar_validacion() {
    
   
/*
    var modulo_descripcion = document.getElementById('modulo_descripcion');       
    var interf_modulo = document.getElementById('interf_modulo');       
    
    if ( (modulo_descripcion.innerHTML).toString().trim().length == 0 ) 
    {
        alerta_error("Falta seleccionar Modulo");
        interf_modulo.focus();
        interf_modulo.select();
        return false;
    }

*/
   
    return true;
    
}





function Funcionario_basicform_Json(id)
{      
    
    var path = getRutaAbsoluta()+"/Funcionario/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    
    if (jsonResponse.toString().trim() != "[]")
    {        
        var json = JSON.parse(jsonResponse);  

        
        document.getElementById('funf_funcionario').value = VJson( json, "funcionario", "N");
        document.getElementById('funf_cedula').value = VJson( json, "cedula", "N");
        document.getElementById('funf_nombre').value = VJson( json, "nombre");  
        document.getElementById('funf_apellido').value = VJson( json, "apellido");  
        
        document.getElementById('funf_fecha_nacimiento').value = VJson( json, "fecha_nacimiento", "D") ;
        
        if (!(json[0]["categoria"] === undefined)){
            document.getElementById('funf_categoria').value = json[0]["categoria"]["categoria"];
            document.getElementById('categoria_descripcion').value =  json[0]["categoria"]["descripcion"] ; 
        }
        
        if (!(json[0]["usuario"] === undefined)){        
            document.getElementById('funf_usuario').value =  json[0]["usuario"]["usuario"] ;                  
            document.getElementById('usuario_descripcion').value =  json[0]["usuario"]["cuenta"] ;  
        }
    }
    else
    {

        document.getElementById('funf_funcionario').value = "0";
        document.getElementById('funf_cedula').value = "0";
        document.getElementById('funf_nombre').value = "";  
        document.getElementById('funf_apellido').value = "";  
        
        document.getElementById('funf_fecha_nacimiento').type = 'TEXT';
        document.getElementById('funf_fecha_nacimiento').value = "";         
        
        document.getElementById('funf_categoria').value = "0";  
        document.getElementById('categoria_descripcion').value = "";  
        
        document.getElementById('funf_usuario').value = "0";  
        document.getElementById('usuario_descripcion').value = "";  

    }
}



function Funcionario_basicform_disabled (   )
{    
    
        document.getElementById('funf_funcionario').disabled = true;
        document.getElementById('funf_cedula').disabled = true;
        document.getElementById('funf_nombre').disabled = true;
        document.getElementById('funf_apellido').disabled = true;
        
        document.getElementById('funf_fecha_nacimiento').disabled = true;
        
        document.getElementById('funf_categoria').disabled = true;
        document.getElementById('funf_categoria_buscar').style.display = 'none';
        
        
        document.getElementById('funf_usuario').disabled = true;
        document.getElementById('funf_usuario_buscar').style.display = 'none';
        
    
}




