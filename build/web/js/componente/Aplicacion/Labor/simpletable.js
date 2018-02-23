


function labor_descripcion_Json(id)
{      
  
    var path = getRutaAbsoluta()+"/Labor/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    
    var retornar = "";    
    
    if ( (jsonResponse.toString().trim() != "[]") && (jsonResponse.toString().trim() != "[error403]") )
    {        
        var json = JSON.parse(jsonResponse); 
        
        var vartmp = (VJson( json, "descripcion") );
        
        retornar =vartmp.trim();
    }
    return retornar;
    
}


