


function funcionariocategoria_descripcion_Json(id)
{      
    
    var path = getRutaAbsoluta()+"/FuncionarioCategoria/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    
    var retornar = "";    
    
    if (jsonResponse.toString().trim() != "[]")
    {        
        var json = JSON.parse(jsonResponse); 
        retornar = VJson( json, "descripcion");
    }
    return retornar;
    
}


