var id = getParametroValor("id");    

window.onload = function() {

    
    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
    
    Gestion_basicform_Json(id);                
    Gestion_basicform_disabled();
    
    
    var gesb_aceptar = document.getElementById('gesb_aceptar');
    gesb_aceptar.addEventListener('click',
        function() 
        {      
                var form = document.getElementById("gesb_form");                            
                var accion =  getRutaAbsoluta()+"/Gestion/Controlador/Borrar"; 
                

                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (control.toString().trim() == "DeleteOK") {                                           
                    window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Lista.jspx" ;                        
                }
                else
                {    
                    alerta_error(control);
                }

        }, 
        false
    );  
        

    
    var gesb_cancelar = document.getElementById('gesb_cancelar');
    gesb_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");                
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Registro.jspx?id="+ id ;                                    
        },
        false
    );        

    


};

window.onresize = function() {
    
    var nodeList = document.querySelectorAll('.fondo_oscuro');
    for (var i = 0; i < nodeList.length; ++i) {
        document.getElementById(nodeList[i].id).style.height = document.body.scrollHeight;        
    }

}


