

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
          
    Gestion_basicform();
    
    
    document.getElementById("gesf_fecha").value = fechaActual();
    
    
    var envio = false;            
    var gesa_guardar = document.getElementById('gesa_guardar');
    gesa_guardar.addEventListener('click',
        function() 
        {
            
            if (envio === true){
                return;
            }
            
            
            if (Gestion_AgregarEditar_validacion())
            {
                var form = document.getElementById("gesa_form");            
                var accion =  form.getAttribute('action') ; 
                var accion =  getRutaAbsoluta()+"/Gestion/Controlador/Agregar"; 


                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (!(isNaN(control))){                                          
                     envio = true;
                     window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Registro.jspx?id="+control.toString().trim();        
                }
                else{                    
                    envio = false;
                    alerta_error(control);
                }
            }
            
            
            
        }, 
        false
    );  
    
    
    
    
    
    var formu = document.getElementById('gesa_form');
    formu.addEventListener('submit',
        function() 
        {            
            return checkForm(formu);
        }, 
        false
    );  
    
    
    
    
    
    
    var gesa_cancelar = document.getElementById('gesa_cancelar');
    gesa_cancelar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Lista.jspx";
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


