var id = getParametroValor("id");    

window.onload = function() {

    
    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
    
    Funcionario_basicform_Json(id);                
    Funcionario_basicform_disabled();
    
    
    var funcb_aceptar = document.getElementById('funcb_aceptar');
    funcb_aceptar.addEventListener('click',
        function() 
        {      
                var form = document.getElementById("funcb_form");                            
                var accion =  getRutaAbsoluta()+"/Funcionario/Controlador/Borrar"; 
                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (control.toString().trim() == "DeleteOK") {                                           
                    window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Lista.jspx" ;                        
                }
                else
                {    
                    alerta_error(control);
                }

        }, 
        false
    );  
        

    
    var funcb_cancelar = document.getElementById('funcb_cancelar');
    funcb_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");                
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Registro.jspx?id="+ id ;                                    
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


