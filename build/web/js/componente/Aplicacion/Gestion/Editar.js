
var id = 0;
var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
    
    Gestion_basicform_Json(id);    
    Gestion_basicform();

/*
    var cli_cedula = document.getElementById('cli_cedula');
    cli_cedula.focus();
    cli_cedula.select();
   */     
        
        
    var gese_aceptar = document.getElementById('gese_aceptar');
    gese_aceptar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            
            if (Gestion_AgregarEditar_validacion())
            {
                var form = document.getElementById("gese_form");                            
                var accion =  getRutaAbsoluta()+"/Gestion/Controlador/Editar"; 
                
                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (!(isNaN(control)))
                {   
                   //alert("es numero");                        
                    window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Registro.jspx?id="+control.toString().trim();                    
                }
                else
                {    
                    alerta_error(control);
                }
                                
            }        
            
        },
        false
    );        

    
    
    
    var gese_cancelar = document.getElementById('gese_cancelar');
    gese_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Registro.jspx?id="+id;
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


