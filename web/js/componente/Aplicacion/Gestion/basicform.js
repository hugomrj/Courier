
function Gestion_basicform (   )
{

    
    var gesf_cliente = document.getElementById( 'gesf_cliente');    
    gesf_cliente.onblur  = function() {        
        gesf_cliente.value  = fmtNum(gesf_cliente.value);    
        document.getElementById( 'cliente_descripcion').innerHTML = cliente_descripcion_Json( gesf_cliente.value);           
    };     
    gesf_cliente.onblur();    
    
    var gesf_cliente_buscar = document.getElementById( 'gesf_cliente_buscar');
    gesf_cliente_buscar.addEventListener('click',
        function()
        {                         
            VentanaModalBusqueda('g1',  
                getRutaAbsoluta()+'/Aplicacion/Cliente/jspf/busqueda.jspx', 
                "Cliente", 
                "gesf_cliente" , 
                "clientes_tabla", 
                800 );                  
        },
        false
    );   
    
    var gesf_cliente_agregar = document.getElementById( 'gesf_cliente_agregar');
    gesf_cliente_agregar.addEventListener('click',
        function()
        {          
            Cliente_modal_agregar( "gesf_cliente" );
        },
        false
    );    
          
          
          

    var gesf_gestor = document.getElementById( 'gesf_gestor');    
    gesf_gestor.onblur  = function() {        
        gesf_gestor.value  = fmtNum(gesf_gestor.value);    
        document.getElementById( 'gestor_descripcion').innerHTML = gestor_descripcion_Json( gesf_gestor.value );           
    };     
    gesf_gestor.onblur();    
    
    var gesf_gestor_buscar = document.getElementById( 'gesf_gestor_buscar');
    gesf_gestor_buscar.addEventListener('click',
        function()
        {                         
            VentanaModalBusqueda('g2',  
                getRutaAbsoluta()+'/Aplicacion/Gestor/jspf/busqueda.jspx', 
                "Gestor", 
                "gesf_gestor" , 
                "gestor_tabla", 
                800 );                  
        },
        false
    );       
    
    
    
    
    var gesf_labor = document.getElementById( 'gesf_labor');    
    gesf_labor.onblur  = function() {        
        gesf_labor.value  = fmtNum(gesf_labor.value);    
        document.getElementById( 'labor_descripcion').innerHTML = labor_descripcion_Json( gesf_labor.value);           
    };     
    gesf_labor.onblur();    
        
    var gesf_labor_buscar = document.getElementById( 'gesf_labor_buscar');
    gesf_labor_buscar.addEventListener('click',
        function()
        {                         
            VentanaModalBusqueda('g3',  
                getRutaAbsoluta()+'/Aplicacion/Labor/jspf/busqueda.jspx', 
                "Labor", 
                "gesf_labor" , 
                "labores_tabla", 
                800 );                  
        },
        false
    );   
    
    var gesf_labor_agregar = document.getElementById( 'gesf_labor_agregar');
    gesf_labor_agregar.addEventListener('click',
        function()
        {          
            Labor_modal_agregar( "gesf_labor" );
        },
        false
    );    
             
    
    
    
    // formateo de numeros
    var gesf_monto = document.getElementById( 'gesf_monto');    
    gesf_monto.onblur  = function() {        
        gesf_monto.value  = fmtNum(gesf_monto.value);               
    };     
    gesf_monto.onblur();      
    
 
   var gesf_retorno = document.getElementById( 'gesf_retorno');    
    gesf_retorno.onblur  = function() {        
        gesf_retorno.value  = fmtNum(gesf_retorno.value);               
    };     
    gesf_retorno.onblur();      
    
   var gesf_total = document.getElementById( 'gesf_total');    
   gesf_total.disabled = true;   
    gesf_total.onblur  = function() {        
        gesf_total.value  = fmtNum(gesf_total.value);               
    };     
    gesf_total.onblur();      
        
    
    
    
    

}




function Gestion_AgregarEditar_validacion() {
    
    
    // tiene que existir cliente
    
    var cliente_descripcion = document.getElementById('cliente_descripcion');      
    if ( (cliente_descripcion.innerHTML).toString().trim().length == 0 ) 
    {
        alerta_error("Falta seleccionar cliente");
        var gesf_cliente = document.getElementById('gesf_cliente');  
        gesf_cliente.focus();
        gesf_cliente.select();
        return false;
    }
    
    
    var gesf_fecha = document.getElementById('gesf_fecha');    
    if (gesf_fecha.value == '') {
        alerta_error("La fecha no puede estar vacia");
        gesf_fecha.focus();
        return false;
    }        
    
    
    var gesf_solicito = document.getElementById('gesf_solicito');      
    if ( (gesf_solicito.value).toString().trim().length == 0 ) 
    {
        alerta_error("Se debe agregar la persona que solicito el servicio");        
        gesf_solicito.focus();
        gesf_solicito.select();
        return false;
    }
    

    var gesf_destino = document.getElementById('gesf_destino');      
    if ( (gesf_destino.value).toString().trim().length == 0 ) 
    {
        alerta_error("Se debe agregar el destino");        
        gesf_destino.focus();
        gesf_destino.select();
        return false;
    }
    
    

    
    var gestor_descripcion = document.getElementById('gestor_descripcion');      
    if ( (gestor_descripcion.innerHTML).toString().trim().length == 0 ) 
    {
        alerta_error("Falta seleccionar gestor");
        var gesf_gestor = document.getElementById('gesf_gestor');  
        gesf_gestor.focus();
        gesf_gestor.select();
        return false;
    }
    
        
        
    
    var labor_descripcion = document.getElementById('labor_descripcion');      
    if ( (labor_descripcion.innerHTML).toString().trim().length == 0 ) 
    {
        alerta_error("Falta seleccionar la labor");
        var gesf_labor = document.getElementById('gesf_labor');  
        gesf_labor.focus();
        gesf_labor.select();
        return false;
    }
    
        
    var labor_descripcion = document.getElementById('labor_descripcion');      
    if ( (labor_descripcion.innerHTML).toString().trim().length == 0 ) 
    {
        alerta_error("Falta seleccionar la labor");
        var gesf_labor = document.getElementById('gesf_labor');  
        gesf_labor.focus();
        gesf_labor.select();
        return false;
    }
            
        
    var gesf_monto = document.getElementById('gesf_monto');       
    if ( parseInt(gesf_monto.value) <= 0 ) 
    {
        alerta_error("Monto incorrecto");
        gesf_monto.focus();
        gesf_monto.select();
        return false;
    }
    
   
    return true;
    
}





function Gestion_basicform_Json(id)
{      
        
    var path = getRutaAbsoluta()+"/Gestion/Linea.json?id="+id 
    var jsonResponse = AjaxUrl( path );    
    

    if ( (jsonResponse.toString().trim() != "[]") && (jsonResponse.toString().trim() != "[error403]") ) 
    {        

        var json = JSON.parse(jsonResponse);  
        

        document.getElementById('gesf_gestion').value = VJson( json, "gestion", "N");

        if (!(json[0]["cliente"] === undefined)){
            
            document.getElementById('gesf_cliente').value = json[0]["cliente"]["cliente"];
            document.getElementById('cliente_descripcion').innerHTML =  
                    cliente_descripcion_Json( document.getElementById('gesf_cliente').value);
        }        
        
        document.getElementById('gesf_fecha').value = VJson( json, "fecha", "D") ;
        document.getElementById('gesf_solicito').value = VJson( json, "solicito") ;
        document.getElementById('gesf_destino').value = VJson( json, "destino") ;


        if (!(json[0]["gestor"] === undefined)){            
            document.getElementById('gesf_gestor').value = json[0]["gestor"]["funcionario"];
            document.getElementById('gestor_descripcion').innerHTML = json[0]["gestor"]["nombre"] + " "
                    +json[0]["gestor"]["apellido"];
        }  

       document.getElementById('gesf_ciudad').value = VJson( json, "ciudad") ;
       
       
        if (!(json[0]["labor"] === undefined)){            
            document.getElementById('gesf_labor').value = json[0]["labor"]["labor"];
            document.getElementById('labor_descripcion').innerHTML = json[0]["labor"]["descripcion"];
        }         
       
       
       document.getElementById('gesf_monto').value = VJson( json, "monto", "N") ;
       document.getElementById('gesf_retorno').value = VJson( json, "retorno", "N") ;
       document.getElementById('gesf_total').value = VJson( json, "total", "N") ;
       

    }
    else
    {

        document.getElementById('gesf_gestion').value = "0";
        
        document.getElementById('gesf_cliente').value = "0";
        document.getElementById('cliente_descripcion').innerHTML =  "";         
    
        document.getElementById('gesf_fecha').type = 'TEXT';
        document.getElementById('gesf_solicito').value = "";
        document.getElementById('gesf_destino').value = "";        
    
    
        document.getElementById('gesf_gestor').value = "0";
        document.getElementById('gestor_descripcion').innerHTML = ""    ;
    
        document.getElementById('gesf_ciudad').value = "" ;
        
        document.getElementById('gesf_labor').value = "0";
        document.getElementById('labor_descripcion').innerHTML = "";        
                
       document.getElementById('gesf_monto').value = "0" ;
       document.getElementById('gesf_retorno').value = "0" ;
       document.getElementById('gesf_total').value = "0" ;        
        
    }
    
    
    
}



function Gestion_basicform_disabled (   )
{    
    
        document.getElementById('gesf_cliente').disabled = true;
        document.getElementById('gesf_cliente_buscar').style.display = 'none';
        document.getElementById('gesf_cliente_agregar').style.display = 'none';
        
        
        document.getElementById('gesf_fecha').disabled = true;
        document.getElementById('gesf_solicito').disabled = true;
        document.getElementById('gesf_destino').disabled = true;
        
        
        document.getElementById('gesf_gestor').disabled = true;
        document.getElementById('gesf_gestor_buscar').style.display = 'none';
        
        
        document.getElementById('gesf_ciudad').disabled = true;
        document.getElementById('gesf_labor').disabled = true;
        document.getElementById('gesf_labor_buscar').style.display = 'none';
        document.getElementById('gesf_labor_agregar').style.display = 'none';
        
        
        document.getElementById('gesf_monto').disabled = true;
        document.getElementById('gesf_retorno').disabled = true;
        document.getElementById('gesf_total').disabled = true;
        
        
}








