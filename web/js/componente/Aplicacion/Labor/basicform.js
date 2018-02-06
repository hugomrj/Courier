



function Labor_basicform (   )
{    
    
    document.getElementById('labf_labor').disabled = true;
    
    var labf_labor = document.getElementById( 'labf_labor');    
    labf_labor.onblur  = function() {        
        labf_labor.value  = fmtNum(labf_labor.value);                 
    };     
    labf_labor.onblur();   
    
    
}






function Labor_basicform_Json(id)
{  
    var path = getRutaAbsoluta()+"/Labor/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    
    
    
    
    if (jsonResponse.toString().trim() != "[]")
    {        

        var json = JSON.parse(jsonResponse);  

        document.getElementById('labf_labor').value = VJson( json, "labor", "N");
        document.getElementById('labf_descripcion').value = VJson( json, "descripcion");
       
    }
    else
    {        
        var json = JSON.parse(jsonResponse);  
        
        document.getElementById('labf_labor').value = "0";
        document.getElementById('labf_descripcion').value = "";
       
    }        
    
}



function Labor_busqueda_Json(id)
{
            
    var path = getRutaAbsoluta()+"/Labor/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
   
    if (jsonResponse.toString().trim() != "[]")
    {        
        var json = JSON.parse(jsonResponse);    

        document.getElementById('ordent_cliente').value = VJson( json, "cliente","N");
        document.getElementById('vicClienteDescripcion').value = 
                VJson( json, "nombre") +" " +VJson( json, "apellido") ;        

        document.getElementById('vicRuc').value = VJson( json, "ruc"); 
        document.getElementById('vicTel').value = VJson( json, "telefono"); 
        document.getElementById('vidDireccion').value = VJson( json, "direccion"); 
        document.getElementById('vicCiudad').value = VJson( json, "ciudad"); 
        
  
    }  
    else    
    {        
        document.getElementById('ordent_cliente').value = 0;
        document.getElementById('vicClienteDescripcion').value = "";
        document.getElementById('vicRuc').value = "";
        document.getElementById('vicTel').value = "";
        document.getElementById('vidDireccion').value = "";
        document.getElementById('vicCiudad').value = "";
    }  
    
    
}






function Labor_AgregarEditar_validacion (  ){

    return true;
    
}






function Labor_basicform_disabled (   )
{
    document.getElementById( 'labf_labor').disabled = true;
    document.getElementById( 'labf_descripcion').disabled = true;   
}







function Labor_modal_agregar ( dom )
{
    
    VentanaModal("lmda4",  getRutaAbsoluta()+'/Aplicacion/Labor/jspf/modagregar.jspx', 800 );        
    Labor_basicform();
    

    var gesma_guardar = document.getElementById('gesma_guardar');
    gesma_guardar.addEventListener('click',
        function() 
        {
                      
            if (Labor_AgregarEditar_validacion())
            {
                var form = document.getElementById("gesma_form");            
                
                var accion =  getRutaAbsoluta()+"/Labor/Controlador/Agregar"; 
                
                   
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (!(isNaN(control))){                                          
                    
                    var linea_id = control;    
                    asignarValor(  dom , linea_id );
                    document.getElementById( dom ).onblur();  
                    gesma_cerrar.click();
                     
                }
                else{                    
                    alerta_error(control);
                }
            }
        }, 
        false
    );  
    

    var gesma_cerrar = document.getElementById('gesma_cerrar');   
    gesma_cerrar.addEventListener('click',
        function()
        {
            VentanaModalCerrar("lmda4");
        },
        false
    );


}



