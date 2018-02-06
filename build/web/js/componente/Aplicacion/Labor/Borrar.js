var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion(getRutaAbsoluta()+'/MenuPrincipal','nav');   
        
    Labor_basicform_Json(id);    
    Labor_basicform();
    Labor_basicform_disabled();

    
    var labb_aceptar = document.getElementById('labb_aceptar');
    labb_aceptar.addEventListener('click',
        function() 
        {            
                
                var form = document.getElementById("labb_form");            
                var accion =  getRutaAbsoluta()+"/Labor/Controlador/Borrar" ; 
                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (control.toString().trim() == "DeleteOK") {                       
                    window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Lista.jspx";
                }
                else
                {    
                    alerta_error(control);
                }

        }, 
        false
    );  
        


    
    var labb_cancelar = document.getElementById('labb_cancelar');
    labb_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Registro.jspx?id="+id;
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


