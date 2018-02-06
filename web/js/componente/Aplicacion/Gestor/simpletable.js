


function gestor_descripcion_Json(id)
{      
    
    var path = getRutaAbsoluta()+"/Gestor/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    
    var retornar = "";    
    
    if (jsonResponse.toString().trim() != "[]")
    {        
        var json = JSON.parse(jsonResponse); 
        
        var vartmp = (VJson( json, "nombre") + " " + VJson( json, "apellido") );
        
        retornar =vartmp.trim();
    }
    return retornar;
    
}


