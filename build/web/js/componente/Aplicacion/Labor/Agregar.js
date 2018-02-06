

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
          
    Labor_basicform();
    
    
    var labf_descripcion = document.getElementById('labf_descripcion');
    labf_descripcion.focus();
    labf_descripcion.select();
        



    var laba_guardar = document.getElementById('laba_guardar');
    laba_guardar.addEventListener('click',
        function() 
        {
            
            if (Labor_AgregarEditar_validacion())
            {
                var form = document.getElementById("laba_form");            
                var accion =  form.getAttribute('action') ; 
                var accion =  getRutaAbsoluta()+"/Labor/Controlador/Agregar"; 

                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (!(isNaN(control))){                                          
                     window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Registro.jspx?id="+control.toString().trim();        
                }
                else{                    
                    alerta_error(control);
                }
            }
        }, 
        false
    );  
    
    
    var laba_cancelar = document.getElementById('laba_cancelar');
    laba_cancelar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Lista.jspx";
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


